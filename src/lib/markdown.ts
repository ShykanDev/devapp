const escapeHtml = (s: string): string =>
	s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');

const bold = (s: string): string => s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

export const parseMarkdown = (text: string): string => {
	const lines = text.split('\n');
	let html = '';
	let inList = false;
	let inOrdered = false;

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

		if (!line) {
			closeLists();
			continue;
		}

		const header = line.match(/^(#{1,6})\s+(.*)$/);
		if (header) {
			closeLists();
			const level = header[1].length;
			const content = bold(escapeHtml(header[2]));
			html += `<h${Math.min(level + 1, 4)}>${content}</h${Math.min(level + 1, 4)}>`;
			continue;
		}

		const bullet = line.match(/^[-*•]\s+(.*)$/);
		if (bullet) {
			if (!inList) {
				html += '<ul>';
				inList = true;
			}
			html += `<li>${bold(escapeHtml(bullet[1]))}</li>`;
			continue;
		}

		const numbered = line.match(/^\d+[.)]\s+(.*)$/);
		if (numbered) {
			if (!inOrdered) {
				closeLists();
				html += '<ol>';
				inOrdered = true;
			}
			html += `<li>${bold(escapeHtml(numbered[1]))}</li>`;
			continue;
		}

		closeLists();
		html += `<p>${bold(escapeHtml(line))}</p>`;
	}

	closeLists();
	return html;
};
