import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const AllRoute = () => <Text></Text>;

const CurrentRoute = () => <Text></Text>;

const CompletedRoute = () => <Text></Text>;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'all', title: 'All' },
      { key: 'current', title: 'Current' },
      { key: 'complete', title: 'Complete' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    all: AllRoute,
   current: CurrentRoute,
    complete: CompletedRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}