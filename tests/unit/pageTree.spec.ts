import { describe, it, expect } from 'vitest';
import { buildPageTree, countDescendants, flattenPageTree } from '@/lib/pageTree';
import type { StoredDynamicPage } from '@/services/dynamicPages';

const makePage = (id: string, parentId: string | null): StoredDynamicPage =>
	({ id, parentId } as unknown as StoredDynamicPage);

describe('buildPageTree', () => {
	it('groups children under their parent', () => {
		const tree = buildPageTree([
			makePage('a', null),
			makePage('b', 'a'),
			makePage('c', 'a'),
			makePage('d', 'b'),
			makePage('e', null),
		]);

		expect(tree.map((node) => node.page.id)).toEqual(['a', 'e']);
		expect(tree[0].children.map((node) => node.page.id)).toEqual(['b', 'c']);
		expect(tree[0].children[0].children.map((node) => node.page.id)).toEqual(['d']);
		expect(tree[0].children[0].depth).toBe(1);
		expect(tree[0].children[0].children[0].depth).toBe(2);
	});

	it('treats orphan pages as roots', () => {
		const tree = buildPageTree([makePage('x', 'missing')]);
		expect(tree.map((node) => node.page.id)).toEqual(['x']);
	});

	it('ignores self-parent references', () => {
		const tree = buildPageTree([makePage('x', 'x')]);
		expect(tree.map((node) => node.page.id)).toEqual(['x']);
	});
});

describe('flattenPageTree', () => {
	it('hides descendants of collapsed nodes', () => {
		const tree = buildPageTree([makePage('a', null), makePage('b', 'a'), makePage('c', 'b')]);
		expect(flattenPageTree(tree, new Set()).map((node) => node.page.id)).toEqual(['a', 'b', 'c']);
		expect(flattenPageTree(tree, new Set(['b'])).map((node) => node.page.id)).toEqual(['a', 'b']);
		expect(flattenPageTree(tree, new Set(['a'])).map((node) => node.page.id)).toEqual(['a']);
	});
});

describe('countDescendants', () => {
	it('counts all nested descendants', () => {
		const tree = buildPageTree([makePage('a', null), makePage('b', 'a'), makePage('c', 'b'), makePage('d', 'a')]);
		expect(countDescendants(tree[0])).toBe(3);
		expect(countDescendants(tree[0].children.find((node) => node.page.id === 'b')!)).toBe(1);
	});
});
