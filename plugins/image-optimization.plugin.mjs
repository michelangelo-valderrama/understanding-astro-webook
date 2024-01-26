import { visit } from "unist-util-visit"

export const remarkImageOptimization = () => (tree) => {
  const v = (node, _, parent) => {
    node.properties = node.properties || {}
    node.properties.loading = "lazy"
    node.properties.decoding = "async"

    const { url, alt } = node
    const altRaw = alt?.replace(/</g, "&lt;").replace(/>/g, "&gt;")

    const n = {
      type: "html",
      value: `<figure>
  <img src="${url}" alt="${altRaw}" loading="lazy" decoding="async" />
  <figcaption>${altRaw}</figcaption>
</figure>`,
    }

    parent.children.splice(parent.children.indexOf(node), 1, n)
  }

  return visit(tree, "image", v)
}
