import React, { useState } from 'react';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [messege, setMessege] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
    
        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'name') {
            setName(value);
        } else {
            setMessege(value);
        }
      };
    
      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // Alert the user their first and last name, clear the inputs
        alert(`Thanks for the input ${name}!`);
        setName('');
        setEmail('');
        setMessege('');
      };

    return(
        <section className="container my-5">
            <div>
                <h2 className="mb-2">Contact Me</h2>
            </div>
            <div className="Contact">
                <form className="form">
                    <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                    />
                    <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                    />
                    <textarea
                    value={messege}
                    name="messege"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="messege"
                    className="w-50"
                    />
                    <br/>
                    <button type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
            </div>
            <p>Or contact me at jcandrew1219@gmail.com</p>
        </section>
    )
}

export default Contact;