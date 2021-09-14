import React from 'react';
import {HStack, IconButton, Text, Box, Icon, StatusBar} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function AppBar({name}) {
  return (
    <>
      <Box safeAreaTop backgroundColor="#6200ee" />

      <HStack
        bg="#fff"
        px={4}
        py={3}
        justifyContent="space-between"
        alignItems="center">
        <HStack space={4} alignItems="center">
          <Text
            color="black"
            fontSize={20}
            fontFamily="heading"
            fontWeight={700}
            fontStyle="normal">
            {name || 'Home'}
          </Text>
        </HStack>
        <HStack space={2}>
          <IconButton
            icon={
              <Icon
                as={<MaterialIcons name="favorite" />}
                size="sm"
                color="black"
              />
            }
          />
          {/* <IconButton
            icon={<Icon as={<Icon name="search" />} color="white" size="sm" />}
          /> */}
          {/* <IconButton
            icon={
              <Icon as={<Icon name="more-vert" />} size="sm" color="white" />
            }
          /> */}
        </HStack>
      </HStack>
    </>
  );
}

export default AppBar;
