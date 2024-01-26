import { visit } from "unist-util-visit"

export const rehypeLinkHeading = () => (tree) => {
  const v = (node, _, parent) => {
    if (node.type !== "element") return
    const { tagName } = node
    if (!/h([0-6])/.test(tagName)) return
    const slug = node.properties.id
    const n = Object.assign(node, {
      children: [
        {
          type: "element",
          tagName: "a",
          properties: {
            href: `#${slug}`,
            "aria-hidden": "true",
            tabindex: "-1",
            class: "h-icon",
          },
        },
        ...node.children,
      ],
    })
    parent.children.splice(parent.children.indexOf(node), 1, n)
  }
  return visit(tree, v)
}
