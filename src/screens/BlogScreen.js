import React from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar} from 'react-native';
import {useQuery} from 'react-query';
import {useFetchBlogs} from '@hooks';
import {teaser} from '@utils';

const BlogScreen = () => {
  const {isLoading, error, data: posts} = useQuery('blogs', useFetchBlogs);

  const renderBlogPosts = (post, i) => {
    return (
      <View style={styles.blogCard} key={i}>
        <Text>{teaser(post.content, 96, '...')}</Text>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error</Text>
      ) : (
        <ScrollView style={styles.container}>
          {posts.data.map((post, i) => renderBlogPosts(post, i))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  blogCard: {
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
});
export default BlogScreen;
