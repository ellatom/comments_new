import { TextArea, Button, Form } from "semantic-ui-react";
import React, { useState } from 'react';
import '../../CSS/commentsform.css'

const CommentsForm = ({ savepost }) => {

    const [state, setState] = useState({ email: "", message: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <div className="form">
            <Form id="myForm" className="form">
                <div>
                    <TextArea
                        id="email"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                        rows="1" cols="50"
                        placeholder="Email">
                    </TextArea>
                </div>
                <div>
                    <TextArea
                        id="message"
                        name="message"
                        value={state.message}
                        onChange={handleChange}
                        rows="2" cols="50"
                        placeholder="Message">
                    </TextArea>
                </div>
                <div className="btnForm">
                <Button className="btnForm" primary onClick={async () => { await savepost(state)
                                                                            setState({ email: "", message: "" })}}>
                    Submit
                </Button>
                </div>
            </Form>
        </div>
    )
};
export default CommentsForm;