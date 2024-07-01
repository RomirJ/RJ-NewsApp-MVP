// MainPage.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import AddNewsScreen from './AddNewsScreen';
import NewsListScreen from './NewsListScreen';
import { UserProvider } from './UserContext';

const Tab = createBottomTabNavigator();

const MainPage = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="News" component={NewsListScreen} />
          <Tab.Screen name="Add News" component={AddNewsScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default MainPage;
