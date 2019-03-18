import React, { Component } from 'react'




class Contactme extends Component {
    state = {
        Firstname: '',
        Lastname: '',
        object: '',
        Message: ''
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
                       <li><i class="fas fa-mobile-alt"></i> &nbsp;Phone: 5555-55555-55555</li>
                       <li><i class="fas fa-map-marker-alt"></i> &nbsp;Address: BATNA,ALGERIA</li>
                       <li><i class="far fa-envelope"></i>&nbsp;Email: hocineismail75@hmail.com</li>
                        </ul> 

                </div>        
               </div>

               <div className="col-md-8">
               <label htmlFor="name">Firstname</label>
                   <input
                   type="text" 
                   name="Firstname"
                   value={Firstname}
                   onChange={this.onChange}
                   className="form-control col form control-lg"
                   placeholder="Enter Firstname ..."
                   />
                   <label htmlFor="name">Lastname</label>
                   <input
                   type="text" 
                   name="Firstname"
                   value={Lastname}
                   onChange={this.onChange}
                   className="form-control col form control-lg"
                   placeholder="Enter Firstname ..."
                   />
                  <label htmlFor="name">Object</label>
                    <input
                   type="text" 
                   name="Object"
                   value={object}
                   onChange={this.onChange}
                   className="form-control col form control-lg"
                   placeholder="Enter Object ..."
                   />
                   <label htmlFor="name">Your Message</label>
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