import React from 'react';
import Modal from './Modal';

import './styles/Bar.css';

function Bar(props) {
    return <Modal>
        <div className="Bar">
			<div className="Bar_options">
				<div className="btn btn-classic option">ALUMNO</div>
				<div className="btn btn-classic option">PAGOS</div>
				<div className="btn btn-classic option">EVENTOS</div>
				<div className="btn btn-classic option">SALIR</div>
			</div>
        </div>
    </Modal>
}

export default Bar;