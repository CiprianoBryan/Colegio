import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Login.css';

import schoolLogo from '../images/ana-maria-rivier.jpg';

function Login() {
    return (
		<div className="Login">
			<img className="School_logo" src={schoolLogo} alt="schoolLogo"/>
			<h1>ANA MARÍA RIVIER</h1>
			<form className="col-4 School_form">
				<div className="form-group">
					<h2>Usuario</h2>
					<input className="form-control" type="text"></input>
				</div>
				<div className="form-group">
					<h2>Contraseña</h2>
					<input className="form-control" type="password"></input>
				</div>
				<button className="btn-login btn-classic" to="/badge">Login</button>
				<div className="login_redes">
					<button className="btn-facebook btn-classic" to="/badge">Facebook</button>
					<button className="btn-google btn-classic" to="/badge">Google</button>
				</div>
			</form>
		</div>
    );
}

export default Login;