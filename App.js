
import React, { Component } from 'react';
import SideMenu from 'react-native-side-menu';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';

import Home from './src/home';
import SideBar from './src/sideBar';
import HeadBar from './src/header';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
    this.updateMenuState = this.updateMenuState.bind(this);
  }

  toggle() {

    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }


  render() {

    const menu = <SideBar navigator={navigator} />

    return (
      <SideMenu 
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <HeadBar toggle={this.toggle} />

        <Home isOpen={this.state.isOpen} />
        
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
