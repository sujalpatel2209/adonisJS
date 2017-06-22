'use strict'

const Post = use('App/Model/Post');
const Validator = use('Validator');

class PostController {

    * index (request, response){
        const posts = yield Post.all()
        yield response.sendView('home', { posts : posts.toJSON()});
    }

    * create (request, response){
        response.sendView('create');    
    }

    * store (request, response){
        const postDetail = request.all();
        const rules = {
            title: 'required',
            desc: 'required'
        }

        const validation = yield Validator.validate(postDetail,rules)

        if(validation.fails()){
            
        }

    }
}

module.exports = PostController