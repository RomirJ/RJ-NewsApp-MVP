// AddNewsScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddNewsScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const handleUpload = () => {
    if (title.trim() === '' || description.trim() === '') {
      Alert.alert('Error', 'Please enter both title and description');
      return;
    }

    const newsItem = { title, description };

    // Simulate uploading news to a backend or storage
    global.storage.save({
      key: 'news',
      id: new Date().toISOString(),
      data: newsItem,
    }).then(() => {
      console.log('News saved:', newsItem);
      Alert.alert('Success', 'News uploaded successfully');
      navigation.navigate('News');
    }).catch(err => {
      console.error('Failed to save news:', err);
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Upload News" onPress={handleUpload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});

export default AddNewsScreen;
