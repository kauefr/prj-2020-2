import React from 'react'
import { Link } from 'react-router-dom'
import './turmas.css';

export default function TurmaRow(props) {
    return (
        <div className="limiter">
		    <div className="container-box">
			    <div className="wrap"> 
                <div className="titulo"> Turmas</div>
                
        <tr>
            <td>{props.Nome}</td>
            <td>{props.Periodo}</td>
            <td><Link to={"/turmas/" + props.id}> Visualizar  </Link></td>
        </tr>
      
        </div>
                </div>
                </div>  
    );
}