const fs = require('fs');
const css = `

/* --- PRINT / PDF DOWNLOAD STYLES --- */
@media print {
  /* Hide UI Elements */
  .sidebar, .topbar, .simulator-column, .controls-panel, .download-pdf-btn, .breadcrumbs, .overlay-stats {
    display: none !important;
  }

  /* Reset layout for printing */
  body, .app-container, .main-content, .page-wrapper, .theory-layout, .theory-column, .content-area {
    display: block !important;
    height: auto !important;
    max-height: none !important;
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: visible !important;
    box-shadow: none !important;
    border: none !important;
    background: white !important;
  }

  /* Theory Content specific adjustments */
  .theory-content {
    overflow: visible !important;
    padding: 0 !important;
  }

  .theory-h1, .theory-h2, .theory-h3 {
    page-break-after: avoid;
  }

  .theory-p, .theory-ul {
    page-break-inside: avoid;
  }
}
`;
fs.appendFileSync('src/index.css', css);
console.log('Appended print CSS');
