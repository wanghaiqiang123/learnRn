import React from 'react'
import { View, Navigator, StyleSheets, Text, TouchableOpacity, Image } from 'react-native'

export const View1 = ({props}) => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 20}}>
        常见布局1
      </Text>
      <View style={styles.example}>
        <View style={styles.header}>
          <TouchableOpacity
            key={'go=Back'}
            activeOpacity={0.75}
            style={styles.goBack}
            onPress={this.props.leftIconAction}
          >
            <Image source={'../source/ic_back_dark.png'} style={{width: 20, height: 20}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheets.create({
  container: {
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
