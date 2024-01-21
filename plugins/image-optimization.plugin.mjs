import { visit } from "unist-util-visit"

export const remarkImageOptimization = () => (tree) => {
  const v = (node, _, parent) => {
    const { url, alt } = node
    const n = {
      type: "html",
      value: `<figure>
  <img src="${url}" alt="${alt}" loading="lazy" decoding="async" />
  <figcaption>${alt}</figcaption>
</figure>`,
    }
    parent.children.splice(parent.children.indexOf(node), 1, n)
  }

  return visit(tree, "image", v)
}
