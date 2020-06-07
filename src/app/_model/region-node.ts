export class RegionNode {
  id: number;
  pid: number;
  name: string;
  pop: number;
  leaf: boolean;
  x: number;
  y: number;


  constructor(id: number, pid: number, name: string, pop: number, leaf: boolean, x: number, y: number) {
    this.id = id;
    this.pid = pid;
    this.name = name;
    this.pop = pop;
    this.leaf = leaf;
    this.x = x;
    this.y = y;
  }

  static dummy(): RegionNode {
    return new RegionNode(0, 0, '', 1, false, 19, 50);
  }
}
