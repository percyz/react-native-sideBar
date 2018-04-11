/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import COLORS from './common/colors';
import * as LAYOUT from './common/styles';

export default class SideBar extends Component {

  constructor(props) {
      super(props);
      this.state = {
      };
  }

  getMenu() {
    return [
      {_id: '1', name: 'Inbox', icon: 'inbox'},
      {_id: '2', name: 'Outbox', icon: 'dropbox'},
      {_id: '3', name: 'Draft', icon: 'file'},
      {_id: '4', name: 'Delete', icon: 'trash'},
      {_id: '5', name: 'Archive', icon: 'archive'},
    ]
  }

  render() {

    const profile = {
          photo: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          name: 'JavaScript',
          email: 'JavaScript@language.com',
        };

    const menuList = this.getMenu().map((val) => {
      return(
        <View style={styles.menuItem} key={val._id} >
          <View style={styles.menuIcon}>
            <Icon.Button
                name={val.icon}
              color={COLORS.menu}
                backgroundColor='transparent'
            />  
          </View>
          <Text style={styles.menuTitle}>{val.name}</Text>
        </View>
      )
    });

    return (
      <View style={styles.container}>
        <ImageBackground 
          source={require('../images/background.png')}
          style={styles.profile} >
              <Avatar
                xlarge
                rounded
                source={{uri: profile.photo}}
                activeOpacity={0.7}
              />  
              <Text style={styles.welcome}>
                {profile.name}  
              </Text>
              <Text style={styles.instructions}>
                {profile.email}  
              </Text> 
        </ImageBackground>

        <View style={styles.menu}>
          {menuList}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },

  profile: {
    flex: 2,
    flexDirection: 'column',
    justifyContent : 'flex-start',
    alignItems: 'flex-start',
    padding: LAYOUT.SCREEN_WIDTH / 25,
  },

  menu: {
    flex: 3,
    flexDirection: 'column',
    justifyContent : 'flex-start',
    alignItems: 'flex-start',
    padding:  LAYOUT.SCREEN_WIDTH / 25,
  },

  menuItem: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:  LAYOUT.SCREEN_WIDTH / 40,
  },

  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  menuIcon: {
    width: LAYOUT.SCREEN_WIDTH / 7,
  },

  welcome: {
    fontSize: 20,
    paddingTop: LAYOUT.SCREEN_WIDTH / 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  instructions: {
    textAlign: 'center',
    color:  COLORS.instructions,
  },
});
