const Post = require("../models/Post");
const PostList = require("../models/PostList");
const User = require("../models/User");
const { updateUser } = require("./userControllers");

const listaP = new PostList

listaP.addPost(new Post("ds é muito legal hahaha"))

const routerPost = {
    getAllPost: (req, res) => {
        try {
            res.status(200).json(listaP.getAllPost())
        } catch (error) {
            res.status(404).json({
                message: "erro ao retornar todos as postagens"
            })
        }
    },
    getPostById: (req, res) => {
        try {
            res.status(200).json(listaP.getPostById(req.params.id))
        } catch (error) {
            res.status(404).json({
                message: "erro ao buscar id"
            })
        }
    },
    addPost: (req, res) => {
        try {
            const {comment} = req.body
            if (!comment){
                throw new Error("coloque todas as informações necessários")
            }
            const newPost = new Post(comment);
            listaP.addPost(newPost);
            res.status(200).json(newPost);
        } catch (error) {
            res.status(404).json({
                message: "erro ao criar postagem"
            });
        }
    },
    updatePost: (req, res) => {
        try {
            listaP.updatePost(req.params.id, req.body)
            res.status(200).json({ message: "postagem atualizada com sucesso"})
        } catch (error) {
            res.status(404).json({
                message: "erro ao atualizar postagem", error
            })
        }
    },
    deletePost: (req, res) => {
        try {
            listaP.deletePost(req.params.id)
            res.status(200).json({
                message: "postagem deletada com sucesso"
            })
        } catch (error) {
            res.status(404).json({
                message:"erro ao deletar postagem"
            })
        }
    }
}

module.exports = routerPost