const escapeHtml = (s: string): string =>
	s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');

const bold = (s: string): string => s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

const inline = (s: string): string => {
	const parts = s.split('`');
	return parts
		.map((part, index) =>
			index % 2 === 1
				? `<code class="md-inline-code">${escapeHtml(part)}</code>`
				: bold(escapeHtml(part))
		)
		.join('');
};

const renderCodeBlock = (lang: string, lines: string[]): string => {
	const rows = lines
		.map((line) => `<span class="md-code-line">${line ? escapeHtml(line) : '&nbsp;'}</span>`)
		.join('');
	const label = lang ? `<span class="md-code-block__lang">${escapeHtml(lang)}</span>` : '';
	return (
		`<figure class="md-code-block">` +
		(label ? `<figcaption class="md-code-block__bar">${label}</figcaption>` : '') +
		`<pre class="md-code-block__pre"><code>${rows}</code></pre>` +
		`</figure>`
	);
};

export const parseMarkdown = (text: string): string => {
	const lines = text.split('\n');
	let html = '';
	let inList = false;
	let inOrdered = false;
	let inCode = false;
	let codeLang = '';
	let codeLines: string[] = [];

	const closeLists = () => {
		if (inList) {
			html += '</ul>';
			inList = false;
		}
		if (inOrdered) {
			html += '</ol>';
			inOrdered = false;
		}
	};

	for (const rawLine of lines) {
		const line = rawLine.trim();

		const fence = line.match(/^```(.*)$/);
		if (fence) {
			if (!inCode) {
				closeLists();
				inCode = true;
				codeLang = fence[1].trim();
				codeLines = [];
			} else {
				html += renderCodeBlock(codeLang, codeLines);
				inCode = false;
				codeLang = '';
				codeLines = [];
			}
			continue;
		}

		if (inCode) {
			codeLines.push(rawLine.replace(/\r$/, ''));
			continue;
		}

		if (!line) {
			closeLists();
			continue;
		}

		const header = line.match(/^(#{1,6})\s+(.*)$/);
		if (header) {
			closeLists();
			const level = Math.min(header[1].length + 1, 4);
			html += `<h${level}>${inline(header[2])}</h${level}>`;
			continue;
		}

		const bullet = line.match(/^[-*•]\s+(.*)$/);
		if (bullet) {
			if (!inList) {
				closeLists();
				html += '<ul>';
				inList = true;
			}
			html += `<li>${inline(bullet[1])}</li>`;
			continue;
		}

		const numbered = line.match(/^\d+[.)]\s+(.*)$/);
		if (numbered) {
			if (!inOrdered) {
				closeLists();
				html += '<ol>';
				inOrdered = true;
			}
			html += `<li>${inline(numbered[1])}</li>`;
			continue;
		}

		closeLists();
		html += `<p>${inline(line)}</p>`;
	}

	if (inCode) {
		html += renderCodeBlock(codeLang, codeLines);
	}
	closeLists();
	return html;
};
