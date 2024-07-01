// NewsListScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import NewsItem from './NewsItem';

const NewsListScreen = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const keys = await global.storage.getIdsForKey('news');
        console.log('Fetched keys:', keys);
        const news = await global.storage.getBatchDataWithIds({
          key: 'news',
          ids: keys,
        });
        console.log('Fetched news:', news);
        setNewsList(news);
      } catch (err) {
        console.error('Failed to fetch news:', err);
      }
    };

    fetchNews();
  }, []);

  return (
    <View style={styles.container}>
      {newsList.length > 0 ? (
        <FlatList
          data={newsList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <NewsItem title={item.title} description={item.description} />
          )}
        />
      ) : (
        <Text>No news available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default NewsListScreen;
