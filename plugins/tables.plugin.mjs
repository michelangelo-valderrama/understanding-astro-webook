import { visit } from 'unist-util-visit'

export const rehypeTables = () => (tree) => {
  const v = (node, _, parent) => {
    if (node.type !== 'element' || node.tagName !== 'table') return
    const n = {
      type: 'element',
      tagName: 'div',
      properties: {
        class: "w-full overflow-scroll",
      },
      children: [node]
    }
    parent.children.splice(parent.children.indexOf(node), 1, n)
  }
  return visit(tree, v)
}
