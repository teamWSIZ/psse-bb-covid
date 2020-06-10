export class Post {
  id: number;
  title: string;
  content: string;
  imgurl: string;
  created: Date;


  constructor(id: number, title: string, content: string, imgurl: string, created: Date) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.imgurl = imgurl;
    this.created = created;
  }

  static dummy(): Post {
    return new Post(0, '', '', '', new Date());
  }
}
