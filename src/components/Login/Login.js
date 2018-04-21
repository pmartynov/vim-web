import React, {Component} from "react";
import Helmet from "../common/Helmet";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {connect} from "react-redux";
import './login.css';
import {push} from "react-router-redux";
import {login} from "../../actions/login";

class Login extends Component {

	componentDidMount() {
		if (this.props.isAuth) {
			this.props.dispatch(push('/index'))
		}
	}

	submit(e) {
		e.preventDefault();
		this.props.dispatch(login(this.name.value, this.password.value));
		this.props.dispatch(push('/index'));
	}

	render() {
		return (
			<div className="container_login">
				<Helmet title='Login'/>
				<Form horizontal>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							Name
						</Col>
						<Col sm={10}>
							<FormControl type="text" placeholder="name" inputRef={ref => { this.name = ref; }}/>
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
						<Col componentClass={ControlLabel} sm={2}>
							Password
						</Col>
						<Col sm={10}>
							<FormControl type="password" placeholder="Password" inputRef={ref => { this.password = ref; }}/>
						</Col>
					</FormGroup>

					<Button type="submit" onClick={this.submit.bind(this)}>Sign in</Button>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: !!state.auth.user && !!state.auth.postingKey
	}
};

export default connect(mapStateToProps)(Login);