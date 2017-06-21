'use strict'

const Lucid = use('Lucid')

class Post extends Lucid {

    static get table(){
        return 'posts'
    }

    static get primaryKey(){
        return 'id'
    }

}

module.exports = Post
