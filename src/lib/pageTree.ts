import type { StoredDynamicPage } from '../services/dynamicPages';

export interface PageTreeNode {
	page: StoredDynamicPage;
	depth: number;
	children: PageTreeNode[];
}

export function buildPageTree(pages: StoredDynamicPage[]): PageTreeNode[] {
	const ids = new Set(pages.map((page) => page.id));
	const byParent = new Map<string, StoredDynamicPage[]>();
	const roots: StoredDynamicPage[] = [];

	for (const page of pages) {
		const parentId = page.parentId;
		if (parentId && parentId !== page.id && ids.has(parentId)) {
			const siblings = byParent.get(parentId) ?? [];
			siblings.push(page);
			byParent.set(parentId, siblings);
		} else {
			roots.push(page);
		}
	}

	const build = (page: StoredDynamicPage, depth: number): PageTreeNode => {
		const children = (byParent.get(page.id) ?? []).map((child) => build(child, depth + 1));
		return { page, depth, children };
	};

	return roots.map((root) => build(root, 0));
}

export function flattenPageTree(nodes: PageTreeNode[], collapsed: ReadonlySet<string>): PageTreeNode[] {
	const output: PageTreeNode[] = [];
	const walk = (list: PageTreeNode[]) => {
		for (const node of list) {
			output.push(node);
			if (!collapsed.has(node.page.id)) {
				walk(node.children);
			}
		}
	};
	walk(nodes);
	return output;
}

export function countDescendants(node: PageTreeNode): number {
	return node.children.reduce((sum, child) => sum + 1 + countDescendants(child), 0);
}
