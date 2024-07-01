// AboutScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from './UserContext';

const AboutScreen = () => {
  const { name } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.description}>
        Logged in as {name}. This app provides daily news updates. Stay informed with the latest news articles.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
  },
});

export default AboutScreen;
