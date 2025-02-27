const UserList = require("./UserList")

class PostList {
    constructor(){
        this.posts = [];
    }
    getAllPost(){
        return this.posts;
    }
    getPostById(id){
        const post = this.posts.find(post => post.id == id);
        if(!post){
            throw new Error("coloque um id válido");
        }
        return post;
    }
    addPost(post){
        return this.posts.push(post)
    }
    updatePost(id, UpdatedData){
        const post = this.getPostById(id);
        Object.assign(post, UpdatedData);
        return post;
    }
    deletePost(id){
        this.posts = this.posts.filter(post => post.id != id);

    }
}

module.exports = PostList