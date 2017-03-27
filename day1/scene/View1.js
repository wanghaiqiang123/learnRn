import React from 'react'
import {
  View,
  Navigator,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  ListView,
  TouchableOpacity
} from 'react-native'
import Img from '../source/ic_back_dark.png'

export default class View1 extends React.Component {

  constructor (props) {
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4']),
      index: 5
    };
  }

  leftIconAction = () => {
    this.props.navigator.pop()
  }

  loadMore = () => {
    let arr = []
    this.state.index += 1
    alert(this.state.index)
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
          <View><Text style={{fontSize: 15, marginLeft: 15}}>常见布局1</Text></View>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.75}
          onPress={this.loadMore}
        >
          <Text style={styles.buttonText}>加载更多</Text>
        </TouchableOpacity>
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
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
  button: {
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    backgroundColor: 'white',
  },
  goBack: {
    marginLeft: 15
  }
})
