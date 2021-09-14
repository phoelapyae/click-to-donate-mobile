import React from 'react';
import {StyleSheet, View, ScrollView, StatusBar, Image} from 'react-native';
import {Text, Avatar, Box, HStack, VStack} from 'native-base';
import {useQuery} from 'react-query';
import {useFetchBlogs} from '@hooks';
import moment from 'moment';
import {teaser} from '@utils';
import AppBar from '@components/AppBar';

const BlogScreen = () => {
  const {isLoading, error, data: posts} = useQuery('blogs', useFetchBlogs);

  const renderBlogPosts = (post, i) => {
    return (
      <Box bgColor="#fff" p={3} mb={4} key={i}>
        <HStack alignItems="center">
          <Image
            source={require('../assets/images/com.c2donate.app_1.png')}
            style={styles.avatarImage}
          />

          <VStack ml={2}>
            <Text fontFamily="heading" fontWeight={700} fontStyle="normal">
              Click 2 Donate
            </Text>
            <Text
              fontFamily="body"
              fontWeight={200}
              fontStyle="normal"
              fontSize="sm">
              {moment(post.createdAt).format('MMM DD, h:mm a')}
            </Text>
          </VStack>
        </HStack>
        <VStack pt={4} pb={4}>
          <Text
            fontFamily="mono"
            fontWeight={500}
            fontStyle="normal"
            fontSize={13}>
            {teaser(post.content, 96, '...')}
          </Text>
        </VStack>
      </Box>
    );
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <AppBar name="Explore" />

      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error</Text>
      ) : (
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          {posts.data.map((post, i) => renderBlogPosts(post, i))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
export default BlogScreen;
