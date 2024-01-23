import { Button } from "./ui/button"
import { List } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { TableOfContents } from "./table-of-contents/table-of-contents"
import type { MarkdownHeading } from "astro"

interface Props {
  headings: MarkdownHeading[]
}

export const BottomMenu = ({ headings }: Props) => (
  <aside className="fixed bottom-0 left-0 w-full z-50">
    <div className="max-w-sm px-4 pb-6 mx-auto">
      <Popover>
        <PopoverTrigger className="w-full" asChild>
          <Button
            variant="outline"
            className="rounded-full gap-x-2 font-semibold py-5"
          >
            <List className="size-5" />
            <span>Table of contents</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="mb-2 overflow-scroll max-h-96">
          <TableOfContents headings={headings} />
        </PopoverContent>
      </Popover>
    </div>
  </aside>
)
