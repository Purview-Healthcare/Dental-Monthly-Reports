# Dental Monthly Reports

Single-page, browser-only app that builds the monthly EV reports for:

- **Alpha Dental** — Monthly
- **Brambleton** — Monthly and Urgent
- **Great Falls** — Monthly and Urgent

Open `index.html` (or the GitHub Pages site), drop in the raw `.xlsx` files, tick the reports you want and click **Build reports**.
All processing happens in the browser; no file is uploaded anywhere. Do not commit raw or generated reports — they contain patient data.

## Rules applied
- Notes drive Form Type: terminated / no active plan → Terminated + Not Eligible; patient or plan not found, no benefits, out of network → N/A.
- One Short Form / Full Form per patient + insurance per month; repeats become Recently Verified.
- Uniform styling on every cell (Aptos Narrow 11, thin borders, centred), canonical casing for Form Type / Status / Patient Type.
- Rows that need a human look (missing dates, unclear notes, etc.) are listed under **Needs review**.

## Development
`index.html` is generated: `src/app.src.html` + ExcelJS (inlined so the app works offline).
Run `npm i exceljs && node src/build.js` from the repo root (adjust paths in `build.js`).
