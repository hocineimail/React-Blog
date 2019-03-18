import React, { Component } from 'react'

import '../css/Notfound.css'

 class nopage extends Component {
  render() {
    return (
      <div className='error'>
      <img src="https://www.lifewire.com/thmb/qLv10Pgd30kCy7OxXacwOWKxZ8M=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg" style={{width: '100%' }} alt="404"/>
      <h1 className="notFoundTitle"> Oops! That page can’t be found.</h1>
      <p className="notFoundDesc">
              It looks like nothing was found at this location.
              Maybe try one of the links in the menu or press back to go to the previous page.
      </p>
      <a className="link" href="/">Go to home</a>
  </div>
    )
  }
}
export default nopage;