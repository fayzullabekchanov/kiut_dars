// src/utils/openViewer.js
export function openViewer(title, images) {
    const win = window.open('', '_blank');
    if (!win) return; // popup blocker himoya

    const imagesHtml = (Array.isArray(images) ? images : [images])
        .map(src => `<img src="${src}" alt="" style="max-width:90%;height:auto;display:block;margin:0 auto;">`)
        .join('<hr style="border:none;margin:16px 0">');

    win.document.write(`<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>${title}</title>
<style>
  body{margin:0;padding:24px;display:flex;flex-direction:column;align-items:center;gap:20px;background:#f5f5f5;font-family:sans-serif}
</style>
</head>
<body>${imagesHtml}</body>
</html>`);
    win.document.close();
}