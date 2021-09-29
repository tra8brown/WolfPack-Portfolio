import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', message: '' };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMsgChange = this.handleMsgChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleMsgChange(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        alert(
            'A name was submitted: ' + this.state.name + '\n' 
            + 'An email was submitted: ' + this.state.email + '\n'
            + 'A message was received: ' + this.state.message 
        );
        event.preventDefault();
    }

    render() {
        // todo delete?
        // return (
        //     <form onSubmit={this.handleSubmit}>
        //     <label>
        //         Name:
        //         <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        //     </label>
        //     <label>
        //         Email:
        //         <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
        //     </label>
        //     <label>
        //         Message:
        //         <textarea value={this.state.messsage} onChange={this.handleMsgChange} rows="5" placeholder="Your message"></textarea>
        //     </label>
        //     <input type="submit" value="Submit" />
        //     </form>
        // );

        return(
            <form>
                <h1 className="contacth1"> Contact Page! </h1>
                <div className="contactPage" >
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-5">Name</label><br></br>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} className="form-control" id="exampleFormControlInput1" placeholder="Your name" />
                </div>
                <div className="contactPage" >
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-5">Email address</label><br></br>
                    <input type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control" id="exampleFormControlInput1" placeholder="Your e-mail" />
                </div>
                <div className="contactPage">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label mt-5">Message</label><br></br>
                    <textarea className="form-control" value={this.state.messsage} onChange={this.handleMsgChange} id="exampleFormControlTextarea1" rows="5" placeholder="Your message"></textarea>
                </div>
                <button onClick={this.handleSubmit} type="button" className="contactPage" className="btn btn-outline-warning d-grid mx-auto mb-5">Submit</button>
            </form>
        )
    };
}

export default Contact;
