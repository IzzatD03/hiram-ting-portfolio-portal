"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Loader2,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
} from "@/components/icons";

interface CvPdfViewerProps {
  pdfUrl: string;
  downloadLabel?: string;
  openLabel?: string;
  title?: string;
}

export function CvPdfViewer({
  pdfUrl,
  downloadLabel = "Download PDF",
  openLabel = "Open PDF",
  title = "Curriculum Vitae",
}: CvPdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.1);
  const [fitWidth, setFitWidth] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [pageInputValue, setPageInputValue] = useState<string>("1");

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pdfDocRef = useRef<any>(null);
  const renderTaskRef = useRef<any>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Load PDF Document
  useEffect(() => {
    let isCancelled = false;

    async function loadPdf() {
      setIsLoading(true);
      setError(null);

      try {
        const pdfjs = await import("pdfjs-dist");

        // Configure PDF.js worker
        if (typeof window !== "undefined") {
          pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
        }

        const loadingTask = pdfjs.getDocument({
          url: pdfUrl,
          cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        });

        const doc = await loadingTask.promise;

        if (isCancelled) return;

        pdfDocRef.current = doc;
        setNumPages(doc.numPages);
        setCurrentPage(1);
        setPageInputValue("1");
        setIsLoading(false);
      } catch (err: any) {
        if (isCancelled) return;
        console.error("Failed to load PDF with pdfjs:", err);
        setError("Unable to preview PDF directly on this device.");
        setIsLoading(false);
      }
    }

    loadPdf();

    return () => {
      isCancelled = true;
      if (renderTaskRef.current) {
        try {
          renderTaskRef.current.cancel();
        } catch {
          // ignore cancellation errors
        }
      }
    };
  }, [pdfUrl]);

  // Render Single Page
  const renderPage = useCallback(
    async (pageNumber: number) => {
      const doc = pdfDocRef.current;
      const canvas = canvasRef.current;
      const container = containerRef.current;

      if (!doc || !canvas || !container) return;

      if (renderTaskRef.current) {
        try {
          renderTaskRef.current.cancel();
        } catch {
          // ignore cancellation errors
        }
      }

      try {
        const page = await doc.getPage(pageNumber);
        const unscaledViewport = page.getViewport({ scale: 1.0 });

        let finalScale = scale;
        if (fitWidth) {
          const containerWidth =
            container.clientWidth - (window.innerWidth < 640 ? 16 : 48);
          if (containerWidth > 0) {
            finalScale = Math.max(0.6, containerWidth / unscaledViewport.width);
          }
        }

        const viewport = page.getViewport({ scale: finalScale });
        const dpr =
          typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        // Transform for high DPR
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;
        await renderTask.promise;
      } catch (err: any) {
        if (err?.name !== "RenderingCancelledException") {
          console.error("Error rendering PDF page:", err);
        }
      }
    },
    [scale, fitWidth]
  );

  // Trigger render when page or scale changes
  useEffect(() => {
    if (!isLoading && pdfDocRef.current) {
      renderPage(currentPage);
    }
  }, [currentPage, renderPage, isLoading]);

  // Handle Resize for Fit-to-Width
  useEffect(() => {
    if (!fitWidth) return;

    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (pdfDocRef.current) {
          renderPage(currentPage);
        }
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [fitWidth, currentPage, renderPage]);

  // Navigation handlers
  const goToPrevPage = useCallback(() => {
    setCurrentPage((prev) => {
      if (prev > 1) {
        const next = prev - 1;
        setPageInputValue(String(next));
        return next;
      }
      return prev;
    });
  }, []);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => {
      if (prev < numPages) {
        const next = prev + 1;
        setPageInputValue(String(next));
        return next;
      }
      return prev;
    });
  }, [numPages]);

  const handlePageInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(pageInputValue, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= numPages) {
      setCurrentPage(pageNum);
    } else {
      setPageInputValue(String(currentPage));
    }
  };

  const handleZoomIn = () => {
    setFitWidth(false);
    setScale((prev) => Math.min(prev + 0.2, 2.5));
  };

  const handleZoomOut = () => {
    setFitWidth(false);
    setScale((prev) => Math.max(prev - 0.2, 0.6));
  };

  const handleFitWidth = () => {
    setFitWidth(true);
    renderPage(currentPage);
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  // Touch Swipe for Mobile & Tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current || e.changedTouches.length === 0) return;

    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
    const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    // Detect horizontal swipe (horizontal movement > 45px and greater than vertical movement)
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX < 0) {
        // Swiped Left -> Next Page
        goToNextPage();
      } else {
        // Swiped Right -> Prev Page
        goToPrevPage();
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        goToPrevPage();
      } else if (e.key === "ArrowRight" || e.key === "PageDown") {
        goToNextPage();
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextPage, goToPrevPage, isFullscreen]);

  return (
    <div
      className={`cv-viewer-root ${isFullscreen ? "cv-viewer-fullscreen" : ""}`}
      ref={containerRef}
    >
      {/* Top Controls Bar */}
      <div className="cv-viewer-toolbar">
        <div className="cv-viewer-toolbar-group cv-viewer-nav">
          <button
            type="button"
            className="cv-viewer-btn"
            onClick={goToPrevPage}
            disabled={currentPage <= 1 || isLoading}
            aria-label="Previous Page"
            title="Previous Page (←)"
          >
            <ChevronLeft size={18} />
          </button>

          <form onSubmit={handlePageInputSubmit} className="cv-viewer-page-form">
            <span className="cv-viewer-page-label">Page</span>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="cv-viewer-page-input"
              value={pageInputValue}
              onChange={(e) => setPageInputValue(e.target.value)}
              onBlur={() => setPageInputValue(String(currentPage))}
              aria-label="Page number"
              disabled={isLoading || numPages === 0}
            />
            <span className="cv-viewer-page-total">/ {numPages || "—"}</span>
          </form>

          <button
            type="button"
            className="cv-viewer-btn"
            onClick={goToNextPage}
            disabled={currentPage >= numPages || isLoading}
            aria-label="Next Page"
            title="Next Page (→)"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Zoom & View Controls */}
        <div className="cv-viewer-toolbar-group cv-viewer-zoom-group">
          <button
            type="button"
            className="cv-viewer-btn"
            onClick={handleZoomOut}
            disabled={isLoading || scale <= 0.6}
            aria-label="Zoom Out"
            title="Zoom Out"
          >
            <ZoomOut size={17} />
          </button>

          <button
            type="button"
            className={`cv-viewer-btn cv-viewer-btn-text ${fitWidth ? "is-active" : ""}`}
            onClick={handleFitWidth}
            disabled={isLoading}
            title="Fit to Width"
          >
            Fit
          </button>

          <button
            type="button"
            className="cv-viewer-btn"
            onClick={handleZoomIn}
            disabled={isLoading || scale >= 2.5}
            aria-label="Zoom In"
            title="Zoom In"
          >
            <ZoomIn size={17} />
          </button>
        </div>

        {/* Actions & Fullscreen */}
        <div className="cv-viewer-toolbar-group cv-viewer-actions">
          <button
            type="button"
            className="cv-viewer-btn"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen Preview"}
            title={isFullscreen ? "Exit Fullscreen (Esc)" : "Fullscreen Preview"}
          >
            {isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
          </button>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="cv-viewer-btn cv-viewer-btn-link"
            aria-label="Open PDF in new tab"
            title="Open in new tab"
          >
            <ExternalLink size={16} />
            <span className="cv-viewer-btn-label">{openLabel}</span>
          </a>

          <a
            href={pdfUrl}
            download
            className="cv-viewer-btn cv-viewer-btn-link cv-viewer-btn-primary"
            aria-label="Download Curriculum Vitae (PDF)"
            title="Download PDF"
          >
            <Download size={16} />
            <span className="cv-viewer-btn-label">{downloadLabel}</span>
          </a>
        </div>
      </div>

      {/* Main Canvas View Area */}
      <div
        className="cv-viewer-stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {isLoading && (
          <div className="cv-viewer-loading">
            <Loader2 size={32} className="cv-viewer-spinner" />
            <p>Loading Curriculum Vitae preview...</p>
          </div>
        )}

        {error && (
          <div className="cv-pdf-fallback">
            <FileText size={48} className="cv-fallback-icon" />
            <p>{error}</p>
            <div className="cv-fallback-actions">
              <a
                className="button button-primary button-sm"
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={15} aria-hidden="true" /> {openLabel}
              </a>
              <a
                className="button button-secondary button-sm"
                href={pdfUrl}
                download
              >
                <Download size={15} aria-hidden="true" /> {downloadLabel}
              </a>
            </div>
          </div>
        )}

        <div
          className={`cv-viewer-canvas-wrapper ${isLoading || error ? "is-hidden" : ""}`}
        >
          <canvas ref={canvasRef} className="cv-viewer-canvas" />
        </div>
      </div>

      {/* Bottom Mobile Pagination Helper Bar */}
      {!isLoading && !error && numPages > 1 && (
        <div className="cv-viewer-bottom-bar">
          <button
            type="button"
            className="button button-secondary button-sm cv-bottom-nav-btn"
            onClick={goToPrevPage}
            disabled={currentPage <= 1}
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <span className="cv-bottom-page-indicator">
            Page {currentPage} of {numPages}
          </span>
          <button
            type="button"
            className="button button-secondary button-sm cv-bottom-nav-btn"
            onClick={goToNextPage}
            disabled={currentPage >= numPages}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
