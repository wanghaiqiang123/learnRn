import React from 'react'
import { View, Navigator, StyleSheet, Text, TouchableOpacity, Image, ScrollView, ListView } from 'react-native'
import Img from '../source/ic_back_dark.png'

export default class View1 extends React.Component {

  constructor (props) {
    super(props)
  }

  leftIconAction = () => {
    this.props.navigator.pop()
  }

  render () {
    return (
      <View style={styles.example}>
        <View style={styles.header}>
          <TouchableOpacity
            key={'go=Back'}
            activeOpacity={0.75}
            style={styles.goBack}
            onPress={this.leftIconAction}
          >
            <Image source={Img} style={{width: 20, height: 20}} />
          </TouchableOpacity>
          <Text style={{flex: 1}}>常见布局1</Text>
        </View>
        <ScrollView style={styles.content}>
          {
            () => {
              let components = []
              for (let i = 0; i < 20; i++) {
                components.push(
                  <ListView><Text>常见布局1</Text></ListView>
                )
              }
              return components
            }
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  example: {

  },
  header: {
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    backgroundColor: 'white'
  },
  goBack: {

  }
})
