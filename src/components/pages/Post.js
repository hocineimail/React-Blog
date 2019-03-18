import React, { Component } from 'react'

class Post extends Component {
 state = {
     likely: false
 }
    onClick = () => {
       this.setState({likely: !this.state.likely})
       console.log(this.state.likely)
    }
  render() {
      const {title ,url, body ,like } = this.props.post;
      let likes = (this.state.likely ? "red" : '#f0f0f0')
     return (
      <div>
         <div className="card " style={{marginBottom: '5%'}}> 
        <div className="card-body">
        <h5 className="card-title" style={{textAlign: 'center'}}>{title}</h5>
        <img src={url} alt={url} style={{width: '100%'}}/>
        <p className="card-text">{body}</p>
        <h6 className="card-subtitle mb-2 text-muted" ><i onClick={this.onDoubleClick} className="fas fa-heart" style={{color: likes}}></i>{like} like</h6>
           
            </div>
            </div>
      </div>
    )
  }
}
export default  Post;