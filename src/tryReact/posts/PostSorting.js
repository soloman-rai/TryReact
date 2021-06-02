import React from 'react';

import PostData from '../data/posts.json';
import PostDetail from './PostDetail';

class PostsList extends React.Component {
    constructor(props){
        super(props);
        this.toggleListReverse = this.toggleListReverse.bind(this)
        this.toggleSortDate = this.toggleSortDate.bind(this)
        this.state = {
            postList: [],
            isOldestFirst: true
        }
    }

    componentDidMount() {
        this.setState({
            postList: PostData
        })
    }

    toggleListReverse(){
        this.setState({
            postList: this.state.postList.reverse()
        })
    }

    sortByDate() {
        let newPostList = this.state.postList
        if(this.state.isOldestFirst){
            newPostList = newPostList.sort((a,b ) => a.date > b.date)
        } else {
            newPostList = newPostList.sort((a,b ) => a.date < b.date)
        }
        this.setState({
            isOldestFirst: !this.state.isOldestFirst,
            postList: newPostList
        })
        console.log(this.state.isOldestFirst, this.state.postList)
    }

    toggleSortDate(event){
        this.sortByDate()
    }

    render() {
        const postList = this.state.postList
        return(
            <div>
                <h2>My Posts</h2>
                {postList.map((item, index) => {
                    return(<PostDetail post={item} key={`post-list-key ${index}`} />) 
                })}
                <br/> <br/>
                <button onClick={this.toggleListReverse}>Reverse Order</button>
                <br/> <br/>
                <button onClick={this.toggleSortDate}>Sort by Date</button>
            </div>
        )
    }
}


export default PostsList;