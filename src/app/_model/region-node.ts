export class RegionNode {
  id: number;
  pid: number;
  name: string;
  pop: number;


  constructor(id: number, pid: number, name: string, pop: number) {
    this.id = id;
    this.pid = pid;
    this.name = name;
    this.pop = pop;
  }


  static dummy(): RegionNode {
    return new RegionNode(0, 0, '', 1)
  }
}
