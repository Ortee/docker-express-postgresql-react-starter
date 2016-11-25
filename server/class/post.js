'use strict';
module.exports =
  class Post {
    constructor(name) {
      this.name = new String(name);
    }
    content(content) {
      this.content = content;
      return this;
    }
    getName() {
      return this.name;
    }
    getContent() {
      return this.content;
    }
  };
