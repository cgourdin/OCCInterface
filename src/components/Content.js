import React from 'react';
import { connect } from 'react-redux';

import CodeView from './CodeView.js';
import MessageErrorPath from './MessageErrorPath.js';
import InputCurrentPath from './InputCurrentPath.js';
import Reading from './Reading.js';


export default class Content extends React.Component{
  preventClickEffect = () => {
    $('.dclink').click((e) => {
      e.preventDefault();
    });
    $('.playground').click((e) => {
      e.preventDefault();
    });
  }

  componentDidUpdate = () => {
    this.preventClickEffect();
  }

  render() {
    return (
      <div className="twelve wide column ui grid">
        <div className="row">
          <h2 className="ui header">
            <i className="configure icon"></i>
            <div className="content">
              OCCI playground
            </div>
          </h2>
        </div>
        <div className="ui grid main">
          <div className="row ui form">
            <div className="field adresseget">
              <div className="ui label pointing below">
                <p>OCCI server</p>
              </div>
              <InputCurrentPath />
            </div>
          </div>
          <div className="row ui centered">
            <button className="ui green button">GET</button>
            <button className="ui orange button">EDIT</button>
            <button className="ui red button">DEL</button>
          </div>

          {/*pour le moment*/}
          <div className="row ui segment mydatacontainer">
          </div>

          {/*<CodeView currentJson={this.props.currentJson} codeView={this.props.codeView} />*/}

          <Reading reading={this.props.reading} />
        </div>
      </div>
    );
  }
}
