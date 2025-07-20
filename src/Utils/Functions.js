const heading3Pattern = /^###\s+(.+)$/gm;    // ### Heading

const listPattern   = /^-\s+(.+)$/gm;        // - list item
const boldPattern   = /\*\*(.+?)\*\*/g;      // **bold**
const italicPattern = /(?:\*(.+?)\*|_(.+?)_)/g;// *italic* or _italic_

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, tag => ({
    '&': '&amp;',  '<': '&lt;',   '>': '&gt;',
    '"': '&quot;', "'": '&#39;'
  }[tag]));
}

export function markdownToHtml(md) {
  if (!md) return "";

  // 1️⃣ Escape any HTML in the source
  let html = escapeHtml(md);

  // 2️⃣ Headings level 3: ### Foo → <h3>Foo</h3>
  html = html.replace(heading3Pattern, '<h3>$1</h3>');

  // 3️⃣ Lists: - item → <li>item</li>, then wrap in <ul>
  html = html.replace(listPattern, '<li>$1</li>');
  html = html.replace(
    /(<li>[\s\S]+?<\/li>)(?=(?:\s*<li>[\s\S]+?<\/li>)+)/gm,
    block => `<ul>${block}</ul>`
  );
  // wrap any trailing group
  html = html.replace(
    /(<ul>[\s\S]+?<\/li>)(?![\s\S]*<\/ul>)/,
    block => `${block}</ul>`
  );

  // 4️⃣ Bold: **text**
  html = html.replace(boldPattern, '<strong>$1</strong>');

  // 5️⃣ Italic: *text* or _text_
  html = html.replace(italicPattern, (m, p1, p2) => `<em>${p1||p2}</em>`);

  // 6️⃣ Line breaks
  html = html.replace(/\n/g, '<br/>');

  return html;
}