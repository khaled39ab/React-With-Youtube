import React from 'react';

const Signup = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px', 'textAlign': 'center' }}>
            <h1>SignUp Page</h1>
            <form action="">
                <input type="text" placeholder='Enter First Name' name='fname' /> <br />
                <input type="text" placeholder='Enter Last Name' name='lname' /> <br />
                <input type="email" placeholder='Enter Your Email' name='email' /> <br />
                <input type="number" placeholder='Enter Phone Number' name='phone' /> <br />
                <input type="submit" value="SignUp Now" />
            </form>
        </div>
    );
};

export default Signup;