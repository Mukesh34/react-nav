import React from 'react';

class Form extends React.Component{
    render(){

        return(
                <div>
                    <Form>
                        <label>Fullname:</label>
                        <input type="text" /><br/>

                        <label>Email</label>
                        <input type="email" /><br/>

                        <label>Mobile</label>
                        <input type="number" /><br/>

                        <label>Message</label>
                        <textarea/>

                    </Form>
                </div>
        );
    }
}
export default Form;