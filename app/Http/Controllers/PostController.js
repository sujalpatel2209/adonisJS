'use strict'

const Post = use('App/Model/Post');

class PostController {

    * index (request, response){
        const posts = yield Post.all()
        yield response.sendView('home', { posts : posts.toJSON()});
    }
}

module.exports = PostController