import React, { Component } from 'react'
import { connect } from 'react-redux';
import Post from './Post'
import {GET_POSTS} from '../../actions/types'
class Blog extends Component {

  componentDidMount() {
      this.props.getPosts()
  }
    
  render() {
      const { posts } = this.props;
      console.log(posts)
    return (
    
      <div>
 
        <h1 style={{textAlign: 'center'}}>BLOG</h1>
        {posts.map(post => 
        <Post 
        key={post.id} 
        post={post}
        onClick={this.onClick}/>
       
        )}
        
      </div>
      
    )
  }
}

const maptateToProps = (state) => ( {
    posts: state.post.posts
})

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch({type: GET_POSTS})
})


export default connect(maptateToProps,mapDispatchToProps)(Blog);