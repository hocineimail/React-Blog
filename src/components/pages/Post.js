import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deletePost} from '../../actions/postActions'
class Post extends Component {
 state = {
     likely: false
 }

 onDeleteClick = (id) => {
    this.props.deletePost(id)
 }
    onClicklike = () => {
       this.setState({likely: !this.state.likely})
       console.log(this.state.likely)
    }
  render() {
      const {id ,title ,url, body ,like } = this.props.post;
      let likes = (this.state.likely ? "red" : '#f0f0f0')
     return (
      <div>
         <div className="card " style={{marginBottom: '5%'}}> 
        <div className="card-body">
        <h5 className="card-title" style={{textAlign: 'center'}}>
        {title}
        <i className="fas fa-times"
        style={{color: 'red', float: 'right',cursor: 'pointer'}}
        onClick={this.onDeleteClick.bind(this, id)}></i></h5>
        <img src={url} alt={url} style={{width: '100%'}}/>
        <br></br>
        <p className="card-text">{body}</p>
        <h6 className="card-subtitle mb-2 text-muted" >
        <i 
        onClick={this.onClicklick}  
        style={{cursor: 'pointer',color: likes}}
         className="fas fa-heart" ></i>
         {like} 
         like</h6>
           
            </div>
            </div>
      </div>
    )
  }
}
export default connect(null,{deletePost})(Post);