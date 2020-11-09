import { TextArea, Button, Form } from "semantic-ui-react";
import '../../CSS/commentsform.css';
import validateData from '../../Utils/formvalidation';
import React from 'react';

class CommentsForm extends React.Component {
    state = { errors: [], email: "", message: "" };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, message } = this.state;
        console.log(this.state)

        let validationErrors = validateData(email, message);

        if (validationErrors.length > 0) {
            console.log("i am here")
            this.setState({ errors: validationErrors,email: "", message: ""  });
        }
        else {
            this.setState({ errors: [] });
            this.props.savepost(this.state);
            this.setState({ email: "", message: ""  });
        }

        debugger;
    }

    renderErrors = () => {
        return this.state.errors.map((error, index) =>
            <ul key={index}>
                <li key={index}>{error}</li>
            </ul>
        )
    }
    render() {
        return (
            <div className="form">
                <Form id="myForm" className="form">
                    <div>
                        <TextArea
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            rows="1" cols="50"
                            placeholder="Email">
                        </TextArea>
                    </div>
                    <div>
                        <TextArea
                            id="message"
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                            rows="2" cols="50"
                            placeholder="Message">
                        </TextArea>
                    </div>
                    <div className="btnForm">
                        <Button className="btnForm" primary onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </div>
                        {this.state.errors.length !== 0 ?
                            <div className="ui negative message">
                                <div>{this.renderErrors()}</div>
                            </div> : null}
                </Form>
            </div>
        )
    }
};
export default CommentsForm;
