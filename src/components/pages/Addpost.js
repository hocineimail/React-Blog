import React, { Component } from 'react'

//import { Editor } from 'react-draft-wysiwyg';
//import { EditorState } from 'draft-js';
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//import { stateToHTML } from 'draft-js-export-html';
import uuid from 'uuid'

import {connect}  from 'react-redux'

import {addPost} from '../../actions/postActions'

 class Addpost extends Component {
    state = {
        title: '',
        url: '',
        body: ''
       
       
    }
    onSubmit = (e) => {
      e.preventDefault();
     const {title, url , body} = this.state;
     const newPost = {
       id: uuid(),
       title,
       url,
       body,
      
     };
     this.props.addPost(newPost)
      this.setState({
        title: '',
        url: '',
        body: ''
      })    
      this.props.history.push('/')      
    } 
    onChange = (e) => { 
        this.setState({ [e.target.name]: e.target.value})
       
 }
  // onEditorStateChange = (editorState) => {
  //  this.setState({
  //    editorState,
 //   });
//  };
 
  render() {
      const {title, url ,body} = this.state

    return (
      <div >
   
        <h1 style={{textAlign: 'center'}}>Write your Post </h1>
        <form onSubmit={this.onSubmit}>
                   <div  className="card">
                   <div className="card-body"> 
                   <label htmlFor="name">Title</label>
                   <input
                   type="text" 
                   name="title"
                   value={title}
                   onChange={this.onChange}
                   className="form-control form control-lg"
                   placeholder="Enter Name ..."
                   />
                     <label htmlFor="name">url</label>
                   <input
                   type="text" 
                   name="url"
                   value={url}
                   onChange={this.onChange}
                   className="form-control form control-lg"
                   placeholder="Enter link of picter ..."
                   />
                     <label htmlFor="name">Body:</label>
                     <textarea
                   type="text" 
                   name="body"
                   value={body}
                   onChange={this.onChange}
                   className="form-control form control-lg"
                   placeholder="Enter post ..."
                   />
                     <input
                 type="submit"
                 value="Publish"
                 className="btn btn-light btn-block"
                 />
                  
                   </div> </div></form>
      </div>
    )
  }
}
export default connect(null, {addPost})(Addpost);