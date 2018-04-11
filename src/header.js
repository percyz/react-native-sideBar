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
                centerComponent={<HeaderMiddle />}
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

class HeaderMiddle extends Component {
    render() {
        return (
            <View style={styles.headerMiddleView}>
                <Text style={styles.headerMiddleText}>
                    Inbox
                </Text>
            </View> 
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

  headerMiddleView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems:'center',
    marginLeft : -LAYOUT.SCREEN_WIDTH / 3,
  },

  headerMiddleText: {
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold', 
  },

});
