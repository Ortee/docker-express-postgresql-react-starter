module.exports =
  class Post {
    constructor(name, content) {
      this.name = name;
      this.content = content;
    }
    getName(){
      return this.name;
    }
    getContent(){
      return this.content;
    }
  }
