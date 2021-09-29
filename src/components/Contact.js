import React from "react"
//import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    return( 
        <>
    <h1 className="contacth1"> Contact Page! </h1>
    <div className="contactPage" >
    <label for="exampleFormControlInput1" class="form-label mt-5">Name</label><br></br>
<input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Your name" />
</div>
   <div className="contactPage" >
    <label for="exampleFormControlInput1" class="form-label mt-5">Email address</label><br></br>
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your e-mail" />
</div>
<div className="contactPage">
<label for="exampleFormControlTextarea1" class="form-label mt-5">Message</label><br></br>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your message"></textarea>
</div>
<button type="button" className="contactPage" class="btn btn-outline-warning d-grid mx-auto mb-5">Submit</button>
</>
    )
}



