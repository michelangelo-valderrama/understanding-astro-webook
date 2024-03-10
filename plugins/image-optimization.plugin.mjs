import { visit } from "unist-util-visit"
import sizeOf from "image-size"

export const remarkImageOptimization = () => (tree) => {
  const v = (node, _, parent) => {
    node.properties = node.properties || {}
    if (node.data?.hProperties) {
      node.data.hProperties = node.data.hProperties || {}
    }
    node.properties.loading = "lazy"
    node.properties.decoding = "async"

    const { url, alt } = node
    const { width, height } =
      (node.data?.hProperties ? node.data.hProperties : node.properties) || {}
    const altRaw = alt?.replace(/</g, "&lt;").replace(/>/g, "&gt;")

    let dimensions = ""

    if (!/https:\/\//g.test(url)) {
      const size = sizeOf(`./public/${url.replace(/%20/g, " ")}`)
      dimensions = `width=${size.width} height=${size.height}`
    }

    if (width) dimensions = `width=${width} height=${height ?? width}`

    const value = `
      <figure>
        <img src="${url}" alt="${altRaw}" ${dimensions} loading="lazy" decoding="async" />
        <figcaption>${altRaw}</figcaption>
      </figure>
    `

    const n = {
      type: "html",
      value,
    }

    parent.children.splice(parent.children.indexOf(node), 1, n)
  }

  return visit(tree, "image", v)
}
