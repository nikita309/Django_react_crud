import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";
import { Editor } from "@tinymce/tinymce-react";

class NewStudentForm extends React.Component {
    state ={
        pk:0,
        name: "",
        email: "",
        document: "",
        phone: ""
    };

    componentDidMount() {
        if (this.props.student) {
            const {pk, name, email, document, phone} = this.props.student;
            this.setState({pk, name, email, document, phone});
        }
        
    }



    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    onEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }

    createStudent = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
            console.log(e);
        });
    };

    editStudent = e => {
        e.preventDefault();
        axios.put(API_URL + this.state.pk, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };
    
    render() {
        return (
            <Form onSubmit={this.props.student ? this.editStudent: this.createStudent}>
                <FormGroup>
                    <Label for="name">Reference Id:</Label>
                    <Input
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.name)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input
                    type="email"
                    name="email"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.email)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="document">Subject:</Label>
                    <Input
                    type="text"
                    name="document"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.document)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="phone">Description:</Label>
                    <Input
                    type="text"
                    name="phone"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.phone)}
                    />
                </FormGroup>
                <Button>Send</Button>
            </Form> 
        );
    }
}

export default NewStudentForm;