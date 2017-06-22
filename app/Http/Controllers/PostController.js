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
        const postDetail = request.only('title','content');
        const rules = {
            title: 'required',
            content: 'required'
        }

        const validation = yield Validator.validate(postDetail,rules)

        if(validation.fails()){
            yield request
            .withOnly('title', 'content')
            .andWith({ errors: validation.messages() })
            .flash() 

            response.redirect('back')
            return
        }

        yield Post.create(postDetail);
        response.redirect('/');
    }

    * show (request, response){
        const postData = yield Post.find(request.param('id'))
        yield response.sendView('show', { post : postData.toJSON()} );
    }

}

module.exports = PostController