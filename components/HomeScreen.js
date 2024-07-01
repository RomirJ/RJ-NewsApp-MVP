import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { UserContext } from './UserContext';
import './storage'; // Make sure the path is correct

const HomeScreen = () => {
  const { name, setName } = useContext(UserContext);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    // Load the name from storage when the component mounts
    global.storage.load({
      key: 'userName',
    }).then(storedName => {
      setName(storedName);
    }).catch(err => {
      console.warn(err.message);
      switch (err.name) {
        case 'NotFoundError':
          // Handle case where name has not yet been saved
          break;
        case 'ExpiredError':
          // Handle case where the stored data has expired
          break;
      }
    });
  }, []);

  const changeName = () => {
    setName(newName);
    setNewName('');
    // Save the new name to storage
    global.storage.save({
      key: 'userName', // Note: Do not use underscore, use camelCase instead
      data: newName,
      expires: 1000 * 3600 * 24,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {name}!</Text>
      <TextInput
        style={styles.input}
        placeholder="Change Name"
        value={newName}
        onChangeText={setNewName}
      />
      <Button title="Change Name" onPress={changeName} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
