Place your CV files in this folder:
- cv.tex (LaTeX source)
- cv.pdf (compiled PDF used by the CV page embed/download)
- cover-letter.pdf (optional)
- portfolio.pdf (optional)

To compile cv.tex manually:
- cd public/documents
- pdflatex -interaction=nonstopmode -halt-on-error cv.tex

If you rename files, update links in:
- src/app/cv/page.tsx
