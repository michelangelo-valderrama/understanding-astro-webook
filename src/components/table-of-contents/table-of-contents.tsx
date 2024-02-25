import "./style.css"

interface Props {
  headings: any
}

export const TableOfContents = ({ headings }: Props) => {
  const layer: any[] = []
  let depth = 0

  for (const heading of headings) {
    heading.text = heading.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    const h = {
      ...heading,
      children: [],
    }
    if (!layer.length || h.depth <= depth) {
      depth = h.depth
      layer.push(h)
      continue
    }
    layer.at(-1)?.children.push(h)
  }

  return (
    <ul className="w-full">
      {layer.map(({ slug, text, children }, i) => (
        <li key={i}>
          <a
            className="block py-1 text-muted-foreground hover:text-accent-foreground hover:underline"
            href={`#${slug}`}
            dangerouslySetInnerHTML={{ __html: text }}
          />
          {children.length ? <TableOfContents headings={children} /> : null}
        </li>
      ))}
    </ul>
  )
}
