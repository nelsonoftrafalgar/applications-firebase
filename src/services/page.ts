import { INodePage, Node } from 'src/services/node'

class Page {
  items: INodePage[] = []

  append = (item: Node) => {
    this.items.push(item.page)
    return this
  }
}

export {Page}
