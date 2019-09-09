import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles.css';


export default class Main extends Component {
  render() {
    return (

      <div className="main">
        <div className="box">
        <div className="container">
          <Link to={'/feed'}>
          <div className="card">
            <div className="card-img">
              <img src="https://cdn.pixabay.com/photo/2019/06/21/14/09/coffe-4289545_640.jpg" alt=""/>
            </div>
            <div className="card-content">
              <h2>Noticias</h2>
              <p>blablablablablablablabla</p>
            </div>
          </div>
          </Link>

          
        </div>

        <div className="container">
          <Link to={'/Student'}>
            <div className="card">
              <div className="card-img">
                <img src="https://cdn.pixabay.com/photo/2019/06/21/14/09/coffe-4289545_640.jpg" alt="" />
              </div>
              <div className="card-content">
                <h2>Noticias</h2>
                <p>blablablablablablablabla</p>
              </div>
            </div>
          </Link>


        </div>
        </div>
      </div>


      )};
}