import React from 'react';

import PostData from '../data/posts.json';
import PostDetail from './PostDetail';

class Posts extends React.Component {
    constructor(props){
        super(props);
        this.handleDataCallback = this.handleDataCallback.bind(this);
        this.state = {
            postList: []
        }
    }

    componentDidMount() {
        this.setState({
            postList: PostData
        })
    }

    handleDataCallback(updatedPostItem) {
        console.log(updatedPostItem);
        let currentPostList = this.state.postList
        currentPostList.push(updatedPostItem);
        this.setState({
            postList: currentPostList
        })
    }

    removePost = (postItem) => {
        let currentPostList = this.state.postList
        currentPostList.pop(postItem); 
        this.updatePostList(currentPostList);
    }

    updatePostList = (postList) => {
        console.log('Updating Posts List...')
        this.setState({
            postList: postList
        })
    }

    render() {
        const postList = this.state.postList
        return(
            <div>
                <h2>My Posts</h2>
                {postList.map((item, index) => {
                    return(<PostDetail 
                        post={item} key={`post-list-key ${index}`} 
                        dataCallback={this.handleDataCallback} 
                        didHandleRemove={this.removePost}
                    />) 
                })}
            </div>
        )
    }
}


export default Posts;