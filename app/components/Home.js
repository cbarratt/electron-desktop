import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

const Home = React.createClass({
  // getInitialState() {
  //   return {
  //     wifi: null
  //   };
  // },

  turnOff() {
    // this.setState({
    //   wifi: 'off'
    // });

    console.log('Changed to OFF');

    this.changeWiFi('off');
  },

  turnOn() {
    // this.setState({
    //   wifi: 'on'
    // });

    console.log('Changed to ON');

    this.changeWiFi('on');
  },

  changeWiFi(state) {
    console.log(`WiFi ${state}`);

    const exec = require('child_process').exec;
    const command = `networksetup -setairportpower en0 ${state}`;

    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  },

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>WiFi Controller</h2>
          <h3 onClick={this.turnOff}>Turn WiFi off</h3>
          <h3 onClick={this.turnOn}>Turn WiFi on</h3>
        </div>
      </div>
    );
  }
});

module.exports = Home;
