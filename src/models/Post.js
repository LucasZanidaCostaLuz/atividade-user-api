const {v4 : uuid4} = require("uuid") 

class Post {
    constructor(comment) {
        this.id = uuid4(),
        this.comment = comment;
    }
};

module.exports = Post