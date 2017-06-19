'use strict'

class PostController {

    * index (request, response){
        yield response.sendView('home');
    }
}

module.exports = PostController