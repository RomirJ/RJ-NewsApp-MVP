import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import NewsItem from './NewsItem';

const HomeScreen = () => {
  const [news, setNews] = useState([
    { id: '1', title: 'News 1', description: 'Description 1' },
    { id: '2', title: 'News 2', description: 'Description 2' }
  ]);
    // Add to HomeScreen.js
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const addNewsItem = () => {
      setNews([...news, { id: (news.length + 1).toString(), title: newTitle, description: newDescription }]);
      setNewTitle('');
      setNewDescription('');
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily News</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => <NewsItem title={item.title} description={item.description} />}
        keyExtractor={item => item.id}
      />




      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="News Title"
          value={newTitle}
          onChangeText={setNewTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="News Description"
          value={newDescription}
          onChangeText={setNewDescription}
        />
        <Button title="Add News" onPress={addNewsItem} />
      </View>
</View>
  );
};
// Add styles to HomeScreen.js

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
    inputContainer: {
      marginBottom: 16,
    },
  
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 8,
      paddingHorizontal: 8,
    }

  });
export default HomeScreen;
