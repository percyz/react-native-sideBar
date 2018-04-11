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
  View
} from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import COLORS from './common/colors';
import * as LAYOUT from './common/styles';

export default class Home extends Component {

  getInbox(){
      return[
          {_id: 1, time:'1h', photo: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", name: "React", type: 'The JavaScript Framework', text: "The incredibly popular industry titan that continues to grow in popularity year over year"},
          {_id: 2, time:'1h', photo: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg", name: "Angular", type: 'The JavaScript Framework', text: "Backed by Google"},
          {_id: 3, time:'2h', photo: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg", name: "Ember", type: 'The JavaScript Framework', text: "Ember.js is built for productivity. Designed with developer ergonomics in mind"},
          {_id: 4, time:'3h', photo: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg", name: "Vue", type: 'The JavaScript Framework', text: "Developed by an original member of the Angular 1 team"}
      ];
  }

  render() {

    const inboxList = this.getInbox().map((val) => {
      return (
        <View style={styles.content} key={val._id} >
          <View style={styles.inboxFrame}>
            <View style={styles.inboxLeft}>
            <Avatar
              large
              rounded
              source={{uri: val.photo}}
              activeOpacity={0.7}
            />
            </View>

            <View style={styles.inboxMiddle}>
              <Text style={styles.welcome}>
                {val.name}
              </Text>
              <Text>
                {val.type}
              </Text>
              <Text style={styles.instructions}>
                {val.text}
              </Text>
            </View>

            <View style={styles.inboxRight}>
              <Text>{val.time}</Text>
              <Icon.Button
                 name='star'
                 color={COLORS.menu}
                 backgroundColor='transparent' 
                 marginLeft={-8}
             />  
            </View>
          </View>
        </View>
      )
    });

    return (
      <View style={[styles.container, { backgroundColor: this.props.isOpen?'#CCCCCC':'#F5FCFF'}]}>
        <View style={styles.title}>
          <Text style={styles.welcome}>
            Today
          </Text>
        </View>

        {inboxList}
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
   
  },

  title: {
    flexDirection: 'row', 
    justifyContent:'flex-start',  
    paddingTop: LAYOUT.SCREEN_HEIGHT / 50,
    paddingLeft: LAYOUT.SCREEN_HEIGHT / 25,
  },

  content: {
    flex:1, 
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
 
  inboxFrame: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: LAYOUT.SCREEN_HEIGHT / 40,
  },

  inboxLeft: {
    flex: 2,
    paddingLeft: LAYOUT.SCREEN_HEIGHT / 50,
  },

  inboxMiddle: {
    flex: 5,
  },

  inboxRight: {
    flex: 1,
    flexDirection: 'column',
  },
 
  welcome: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 5,
    fontWeight: 'bold',
    color: COLORS.menu,
  },

  instructions: {
    textAlign: 'left',
    color: COLORS.instructions,
    margin: 2,
  },
});
