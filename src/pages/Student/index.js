import React, {Component} from  'react';
import api from '../../services/api';
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
