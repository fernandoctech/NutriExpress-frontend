import React, {Component} from 'react';
import Markdown from 'markdown-to-jsx';
import {Link} from 'react-router-dom';
import './styles.css';

export default class Nutri extends Component{
  
  render() {
    
    return(
      <div className="content-io">
        <div className="nav">
          <div className="nav-left">
            <Link to={'/'}><i class="far fa-arrow-alt-circle-left"></i></Link>
          </div>

          <div className="nav-right">
            <Link to={'/student'}><i class="fas fa-users"></i></Link>
            <Link to={'/nutri'}><i class="fas fa-phone-alt"></i></Link>
          </div>
        </div>
      <div className="clinica">
        <h1>Clinica de Nutrição - Fimca</h1>
          <p>Telefone:6932178998</p>
      </div>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15772.0111938364!2d-63.8607092!3d-8.7858054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81a8e0a083464054!2sFIMCA%20-%20Faculdades%20Integradas%20Apar%C3%ADcio%20Carvalho!5e0!3m2!1spt-BR!2sbr!4v1568405540079!5m2!1spt-BR!2sbr"></iframe>
      </div>
      </div>
    );
  }
}