import React, {Component} from  'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './styles.css';

export default class Student extends Component {
  state = {
    authors: [],

  }
  componentDidMount() {
    this.loadPosts();
  };
  loadPosts = async () => {
    const response = await api.get(`/authors`);

    this.setState({ authors: response.data })
    console.log(response);
  };

    render() {

    return (
      
    <div className="product-list">
        <div className="nav">
          <div className="nav-left">
            <Link to={'/'}><i class="far fa-arrow-alt-circle-left"></i></Link>
          </div>

          <div className="nav-right">
            <Link to={'/student'}><i class="fas fa-users"></i></Link>
            <Link to={'/nutri'}><i class="fas fa-phone-alt"></i></Link>
          </div>
        </div>
        <div className="info">
          <h1>EQUIPE</h1>
          <h3>NutriExpress</h3>
        </div>
        {this.state.authors.map(author => (
          <div className="content">
            <div className="card-body">
              <div className="card-image">
                <img src={author.image_perfil} />
              </div>
              <div className="car-text">
                <strong>{author.name}</strong>
                <p>Estudante de Nutrição</p> 
                
              </div>
            </div>

          </div>
      ))};
      </div>
    )
        }
      }
