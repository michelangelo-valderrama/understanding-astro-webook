import { Button } from "./ui/button"
import { List } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { TableOfContents } from "./table-of-contents/table-of-contents"
import type { MarkdownHeading } from "astro"

interface Props {
  headings: MarkdownHeading[]
}

export const TocButton = ({ headings }: Props) => (
  <Popover>
    <PopoverTrigger className="w-full" asChild>
      <Button
        variant="outline"
        className="gap-x-2 border-none font-semibold py-5 flex-1 rounded-none h-11"
      >
        <List className="size-5" />
        <span>Table of contents</span>
      </Button>
    </PopoverTrigger>
    <PopoverContent className="mb-2 overflow-scroll max-h-96 rounded-lg">
      <TableOfContents headings={headings} />
    </PopoverContent>
  </Popover>
)
