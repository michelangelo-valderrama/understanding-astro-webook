interface Props {
  elementSelector: string
  intersectionFn: (element: Element, entry: IntersectionObserverEntry) => void
  noIntersectionFn: (element: Element, entry: IntersectionObserverEntry) => void
  triggerSelector: string
}

export class GhostEffect {
  constructor({
    triggerSelector,
    elementSelector,
    intersectionFn,
    noIntersectionFn,
  }: Props) {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectionFn(element, entry)
        } else {
          noIntersectionFn(element, entry)
        }
      })
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    }

    const element = document.querySelector(elementSelector) as Element
    // "header[data-ghost-border]"
    const trigger = document.querySelector(triggerSelector) as Element
    // "[data-ghost-border-trigger]"

    if (!element || !trigger) {
      throw new Error("Error when trying to find the element or trigger")
    }

    const observer = new IntersectionObserver(callback, options)

    observer.observe(trigger)
  }
}
