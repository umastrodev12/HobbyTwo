export class Lunar {
  constructor() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.init());
    }
  }

  private init() {
    document.body.addEventListener("click", () => this.eventHandler);
  }

  private async eventHandler(e: MouseEvent) {
    const el = (e.target as HTMLElement).closest<HTMLElement>("[m-get]");
    if (!el) return;

    const url = el.getAttribute("[m-get]")!;
    const swap = el.getAttribute("m-swap") || "innerHTML";

    try {
      const response = await fetch(url);
      const html = await response.text();
    } catch (err) {
      console.error(`Requisition Error:`, err);
    }
  }

  private Execswap(target: HTMLElement, html: string) {
    if (html === "outerHTML") {
      target.outerHTML = html;
    } else {
      target.innerHTML = html;
    }
  }
}
