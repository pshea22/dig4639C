import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class Detail extends React.Component {
  static navigationOptions = {
    header: null,
  };
  static navigationOptions = {
    title: 'Details',
  };

  render() {
            const {navigate} = this.props.navigation;

        const otherParam = this.props.navigation.getParam('otherParam', 'some default value');

    return (
      <ScrollView style={styles.container}>
                            <Text> {JSON.stringify(otherParam)}</Text>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
