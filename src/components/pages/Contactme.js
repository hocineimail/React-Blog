import React, { Component } from 'react'




class Contactme extends Component {
    state = {
        Firstname: '',
        Lastname: '',
        object: '',
        Message: ''
    }
    onChange = (e) => { 
        this.setState({ [e.target.name]: e.target.value})
        console.log(this.state.Firstname)
 }
  render() {
      const {Firstname , Lastname ,object ,Message} = this.state
    return (
      <div style={{fontFamily: 'Josefin Sans'}}>
 
        <h1 style={{textAlign: 'center',paddingTop: '5%',paddingBottom: '5%'}}>Contact Me</h1>
        <div className="row">
               <div className="col-md-4 card" style={{paddingTop: '3%'}}>
               <div className="card-body ">
                      <ul style={{listStyleType: 'none'}}>
                       <li><i className="fas fa-mobile-alt"></i> &nbsp;Phone: 5555-55555-55555</li>
                       <li><i className="fas fa-map-marker-alt"></i> &nbsp;Address: BATNA,ALGERIA</li>
                       <li><i className="far fa-envelope"></i>&nbsp;Email: hocineismail75@hmail.com</li>
                        </ul> 

                </div>        
               </div>

               <div className="col-md-8">
               <label htmlFor="nFirstnameame">Firstname</label>
                   <input
                   type="text" 
                   name="Firstname"
                   value={Firstname}
                   onChange={this.onChange}
                   className="form-control col form control-lg"
                   placeholder="Enter Firstname ..."
                   />
                   <label htmlFor="Lastname">Lastname</label>
                   <input
                   type="text" 
                   name="Lastname"
                   value={Lastname}
                   onChange={this.onChange}
                   className="form-control col form control-lg"
                   placeholder="Enter Firstname ..."
                   />
                  <label htmlFor="Object">Object</label>
                    <input
                   type="text" 
                   name="object"
                   value={object}
                   onChange={this.onChange}
                   className="form-control col form control-lg"
                   placeholder="Enter Object ..."
                   />
                   <label htmlFor="Message">Your Message</label>
                      <textarea
                   type="text" 
                   name="Message"
                   value={Message}
                   onChange={this.onChange}
                   className="form-control col form control-lg"
                   placeholder="Enter Message ..."
                   />
                  <input
                 type="submit"
                 value="Send"
                 className="btn btn-light btn-block"
                 />
              </div>
         </div>
      </div>
    )
  }
}
export default Contactme;