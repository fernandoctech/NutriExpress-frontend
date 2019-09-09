import React, { Component } from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './styles.css';

export default class Feed extends Component {
  state = {
    posts:[],

  }
  componentDidMount(){
    this.loadPosts();
  };
  loadPosts = async () => {
    const response = await api.get(`/posts?_expand=author`);

    this.setState({ posts: response.data })
    console.log(response);
  };

  render() {
    return (
      <div className="product-list">
      {this.state.posts.map(post => (
        <article key={post.id} >
          <div className="author">
            <div className="perfil">
              <img src={post.author.image_perfil} alt=""/>
            </div>
            <div className="nameautor">
              <p>{post.author.name}</p>
            </div>
            <div className="date">
              <p>24-12-2019</p>
            </div>
          </div>
          <div className="box-img">
            <img src={post.image} alt=""/>
          </div>
          <div className="container">
            <div className="box-container">
              <strong>{post.title}</strong>
              <p>{post.description}</p>
            </div>
            <div className="links">
              <div className="acessar">
                <Link to={`/post/${post.id}`} ><i class="far fa-eye"></i></Link>
                </div>
              <div className="link">
                <button><i class="fas fa-heart"></i></button>
                <button><i class="fas fa-comment-dots"></i></button>
              </div>
            </div>
            
          </div>
        </article>
      ))}
    </div>
    );
  }
}