import React from 'react';
import Modal from './Modal';
import {Link} from 'react-router-dom';

import './styles/Bar.css';

function Bar(props) {
    return <Modal>
        <div className="Bar">
			<div className="Bar_options">
				<Link className="btn btn-classic option" to="/panel">ALUMNO</Link>
				<Link className="btn btn-classic option" to="/pagos">PAGOS</Link>
				<div className="btn btn-classic option">EVENTOS</div>
				<Link className="btn btn-classic option" to="/login">SALIR</Link>
			</div>
        </div>
    </Modal>
}

export default Bar;