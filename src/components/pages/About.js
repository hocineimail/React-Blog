import React, { Component } from 'react'



 class About extends Component {
  render() {
    return (
      <div style={{fontFamily: 'Josefin Sans'}}>
     
        <h1 style={{textAlign: 'center',paddingTop: '5%'}}>ABOUT </h1>
        <div className="row" style={{paddingTop: '5%'}}> 
        <div className="col-md-8"> 
        <p > If there was one word to describe you it would be: Creatambitionate (Creative, Ambitious, Passionate). 
But, if there was one word to describe your current job, it would be: Boring.</p>
<p>  Whether you just need to add something new to your life, or you straight up can’t stand waking up on any morning that doesn’t begin with the letter ‘S’ — you’re in the right place.</p>
<p> Since you’re here right now, something tells me that you’re full of an entrepreneurial spirit, a positive mindset, and damn good ideas. </p>
 <h3>Since you’re here right now, something tells me that you’re full of an entrepreneurial spirit, a positive mindset, and damn good ideas.</h3>
<p>You want to use your creative juices towards something that matters, both to you and the world.

</p>
<p> You’re READY take your business to that next level and maybe even quit your day job. </p>
      </div>
   <div className="col-md-4">
   <img  src="https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-9/36850295_10214554256882809_3887917375453921280_n.jpg?_nc_cat=111&_nc_ht=scontent-mrs1-1.xx&oh=7b02621b840c1d53bf5cb897b0d7884b&oe=5D1E1AE3" alt="aboutme" width="100%" />
   </div>
        </div>
        </div>
       )
  }
}
export default About;