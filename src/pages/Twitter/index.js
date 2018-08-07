import React, { Component } from 'react';
// import { Route, NavLink, HashRouter } from "react-router-dom";
import axios from 'axios';
import LazyLoad from 'react-lazy-load';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import logodua from '../../twitter.png';
import '../../App.css';


class Twitter extends Component {
  constructor(props) {
    super(props);

    this.handelInputchange = this.handelInputchange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderHasil = this.renderHasil.bind(this);

    this.state = {
      newData: [],
      url: '',
      buttonClicked: false,
    };
  }

  componentDidMount() {
    const response = this.getPosts();
    this.setState(response);
    console.log('respon', response)
  }

  getPosts() {
    axios.get("https://api.twitter.com/1.1/users/search.json?q=soccer",{
      headers: {
        'Authorization': 'OAuth oauth_consumer_key="B1S1t4C6daCwvYhivbKtoMIJS",oauth_nonce="generated-nonce", oauth_signature="generated-signature", oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp", oauth_token="3012068875-jEDO1yQA5o3Djg16YhNrGDutOc24G63OUv6KiBX ", oauth_version="1.0"' 
      },
    })
      .then(response => {
        return({
          posts: response.data.posts,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('error', error);
        return { error, isLoading: false }
      });
  }

  handelInputchange({ target }) {
    const { value } = target;
    const { newData } = this.state;
    const url = newData.filter(user => user.name.toLowerCase().search(value.toLowerCase()))
    console.log('url', url);
  }

  handleClick() {
    this.setState({
      buttonClicked: true,
    });
  }

  renderHasil() {
    const { newData, buttonClicked } = this.state;
    // console.log('newData', newData);
    if (buttonClicked && newData && newData[0]) {
      return (
        <div>
        <LazyLoad height={683} offsetTop={200}></LazyLoad>
        <ul>
        {this.state.newData.map((twitter, i) => {
          return (
            <li className="output" key={i}>
            <br/>
            <div
            className="output">
            {twitter.tweet_id}
            </div>
            <div
              className="output">
              {twitter.username}
            </div>
            <div
              className="output">
              {twitter.text}
            </div>
            </li>
          );
        })
      }
      </ul>
      </div>
      )
    } return null;
  }

  render() {
    return (
      <div className="main">
        <div className="App"> 
          <img src={logodua} className="logo3" alt="pict"/> 
        <div id="inti">
          <input
            className="inputan"
            type="text"
            name="search"
            value={this.props.data}
            onChange={this.handelInputchange}
          />
          <button
            className="btn"
            type="button"
            onClick={this.getPosts}>
            Search Tweet
          </button>

          <LazyLoadComponent>
            <div id="hasil-pencarian">
              {this.renderHasil()}
            </div>
          </LazyLoadComponent>
        </div>
        </div>
      </div>
    );
  }
}
export default Twitter;