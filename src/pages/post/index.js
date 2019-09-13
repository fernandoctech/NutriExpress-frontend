import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Post extends Component {
  state = {
    post: {},
    list:{},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/posts/${id}`);

    this.setState({ post: response.data , list: response.data.paragraph_4});
    console.log(response);

  }

  render() {
    const { post, list } = this.state;
    return (
      <div className="post-info">
        <div className="image">
          <img src={post.image} alt=""/>
        </div>
        <div className="container">
          <div className="title">
            <strong className="text-title">{post.title}</strong>
            <br/><br/><br/>
          </div>
          <div className="box-text">
            <h4>{post.title_p1}</h4>
            <p>{post.paragraph_1}</p>
            <h4>{post.title_p2}</h4>
            <p>{post.paragraph_2}</p>
            <h4>{post.title_p3}</h4>
            <p>{post.paragraph_3}</p>
            <h4>{post.title_p4}</h4>
            <ul>
              <li>{list.item1}</li>  
              <li>{list.item2}</li>  
              <li>{list.item3}</li>  
              <li>{list.item4}</li>   
            </ul>            
          </div>
        </div>
      </div>
    );
  }
}