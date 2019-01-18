import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import decor from '../img/Ngoctrinh.jpg'
export default class LoginScreen extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.fullName)
    }
    render() {
        return (
            <div className="container-flruid">
                <div className="row" >
                    <div className="bg-primary pt-3 px-5 col-12" >
                        <Form  onSubmit ={this.handleSubmit} className="bg-white float-left p-5 rounded col-6">
                            <FormGroup>
                                <Label className="font-weight-bold" for="exampleEmail">Username</Label>
                                <Input type="text" name="email" id="username" placeholder="username" />
                            </FormGroup>
                            <FormGroup>
                                <Label className="font-weight-bold"  for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="password" />
                            </FormGroup>
                            <Button color="primary"  onClick={this.props.onLogin}>Login</Button>
                        </Form>
                        <div className="rounded">
                            <img className="col-6 float-right" src={decor} alt="techkid" />
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}