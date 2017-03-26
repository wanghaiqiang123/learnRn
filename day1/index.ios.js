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
  View,
  Navigator,
  Text
} from 'react-native';
import SelectView from './scene/SelectView'

export default class Day1 extends Component {

  _configureScene = route => {
    if (route.sceneConfig) return route.sceneConfig

    return {
      ...Navigator.SceneConfigs.PushFromRight,
      gestures: {}    // 禁用左滑返回手势
    }
  }

  _renderScene = (route, navigator) => {
    let Component = route.component
    return <Component navigator={navigator}{...route.passProps}/>
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
            initialRoute={{name: 'SelectView', component: SelectView}}
            renderScene={this._renderScene}
            configureScene={this._configureScene}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('day1', () => Day1);
