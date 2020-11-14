export interface INodeChild {
  name: string
  path: string
}

export interface INodePage extends INodeChild {
  icon?: string
  sub_group?: INodeChild[]
}

class Node {
  page: INodePage
  children: INodeChild[] = []

  constructor(name: string, path: string, icon?: string) {
    this.page = icon ? {name, icon, path} : {name, path}
  }

  append = (child: Node) => {
    this.children.push(child.page)
    this.page.sub_group = this.children
    return this
  }
}

export {Node}
