import React, { Component } from 'react'

import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


 class Addpost extends Component {
    state = {
        title: '',
        editorState: EditorState.createEmpty(),
       
    }
    onChange = (e) => { 
        this.setState({ [e.target.name]: e.target.value})
        console.log(this.state.title)
 }
 onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };
  render() {
      const {title, editorState} = this.state
      
    return (
      <div >
   
        <h1 style={{textAlign: 'center'}}>Write your Post </h1>
       
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
                     <label htmlFor="name">Body:</label>
                     <Editor
        initialEditorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
      />
                    <input
                 type="submit"
                 value="Publish Your"
                 className="btn btn-light btn-block"
                 />
                   </div> </div>
      </div>
    )
  }
}
export default Addpost;