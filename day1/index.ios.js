/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * 实现一些常见布局
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Navigator
} from 'react-native';

export default class day1 extends Component {
  _sceneChange () {
    this.props.navigator.push({
      name: 'scene'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          onPress={this._sceneChange} title="竖排列表"></Button>
        <Button style={styles.button} onPress={this._sceneChange} title="横排列表"></Button>
        <Button style={styles.button} onPress={this._sceneChange} title="九宫格"></Button>
        <Button style={styles.button} onPress={this._sceneChange} title="tab"></Button>
        <Button style={styles.button} onPress={this._sceneChange} title="多面板"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('day1', () => day1);
