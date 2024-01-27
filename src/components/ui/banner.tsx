import { LucideX } from "lucide-react"
import { Button } from "./button.tsx"
import { cn } from "@/lib/utils.ts"
import { useEffect, useState } from "react"

export const Banner = ({ children, className }: any) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <>
      {open && (
        <div
          className={cn(
            "w-full z-50 flex items-center justify-between py-2 px-4 bg-muted/60 backdrop-blur border",
            className
          )}
        >
          <p className="text-center flex-1">{children}</p>
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-foreground/10 size-7"
            onClick={toggle}
          >
            <LucideX className="size-4" />
          </Button>
        </div>
      )}
    </>
  )
}
