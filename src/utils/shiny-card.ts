interface Props {
  triggerSelector: string
  elementsSelector: string
}

export class ShinyCard {
  constructor({ triggerSelector, elementsSelector }: Props) {
    const trigger = document.querySelector<HTMLDivElement>(triggerSelector)
    const cards = document.querySelectorAll<HTMLDivElement>(elementsSelector)

    if (!trigger) throw new Error("Error when trying to find the trigger")

    trigger.addEventListener("mousemove", (e: any) => {
      cards.forEach((c) => {
        const { clientX, clientY } = e
        const { left, top } = c.getBoundingClientRect()

        c.style.setProperty(`--cursor-x`, `${clientX - left}px`)
        c.style.setProperty(`--cursor-y`, `${clientY - top}px`)
      })
    })
  }
}
