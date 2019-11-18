import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Login.css';
import visibilityModal from '../utils/VisibilityModal';

import schoolLogo from '../images/ana-maria-rivier.jpg';

function Login() {
	visibilityModal('hidden');
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
				<Link className="btn btn-login btn-classic" to="/panel">Login</Link>
				<div className="login_redes">
					<Link className="btn btn-facebook btn-classic" to="/">Facebook</Link>
					<Link className="btn btn-google btn-classic" to="/">Google</Link>
				</div>
			</form>
		</div>
    );
}

export default Login;