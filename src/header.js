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
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import COLORS from './common/colors';
import * as LAYOUT from './common/styles';

export default class HeadBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
        <View>
            <Header
                leftComponent={<HeaderLeft toggle={this.props.toggle} />}
                centerComponent={{ text: 'Inbox', style: { color: '#fff', fontSize: 20, fontWeight: 'bold'} }}
                rightComponent={<HeaderRight />}
                backgroundColor={COLORS.info}
            /> 
        </View>
        );
    }
}

class HeaderLeft extends Component {
    render() {
        return (
            <Icon.Button
                name='bars'
                backgroundColor='transparent'
                onPress={this.props.toggle}
            />  
        );
  }
}

class HeaderRight extends Component {

    render() {
        return (
            <Icon.Button
                name='search'
                backgroundColor='transparent'
            />   
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
