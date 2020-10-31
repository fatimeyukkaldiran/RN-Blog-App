import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BlogNavigator from './src/navigator/BlogNavigator';
import { View } from 'native-base';


const App = () => {
  return (
    <View style = {{flex: 1}}>
    <NavigationContainer>
        <BlogNavigator />
      </NavigationContainer>
      </View>
  );
};

export default App;