'use strict';
module.exports =
  class Post {
    constructor(name, content) {
      this.name = new String(name);
      this.content = new String(content);
    }
    getName() {
      return this.name;
    }
    getContent() {
      return this.content;
    }
  };
