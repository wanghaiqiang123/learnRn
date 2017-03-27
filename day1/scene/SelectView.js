import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import View1 from './View1'

export default class SelectView extends React.Component {
  constructor (props) {
    super(props)
    this._sceneChange.bind(this)
  }
  componentDidMount () {
    console.log(this.props)
  }
  _sceneChange = () => {
    this.props.navigator.push({
      name: 'View1',
      component: View1
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Button
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          onPress={this._sceneChange} title="竖排列表"></Button>
        <Button onPress={this._sceneChange} title="横排列表"></Button>
        <Button onPress={this._sceneChange} title="九宫格"></Button>
        <Button onPress={this._sceneChange} title="tab"></Button>
        <Button onPress={this._sceneChange} title="多面板"></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
