import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {HStack, Text} from 'native-base';
// Screens
import HomeScreen from '@screens/HomeScreen';
import BlogScreen from '@screens/BlogScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case 'Home':
      iconName = 'md-heart';
      break;
    case 'Blog':
      iconName = 'md-compass';
      break;
    case 'Settings':
      iconName = 'chatbubbles';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={22} />;
};

const RenderTabBarButton = ({route, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route.name)}
      style={styles.tabBarButtonContainer}>
      <View
        style={[
          styles.tabBarButton,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: navigation.isFocused() ? '#dee3f9' : '#fff',
          },
        ]}>
        <HStack space={2} alignItems="center">
          {screenOptions(route, '#789bdd')}
          {navigation.isFocused() && (
            <Text
              fontFamily="body"
              fontWeight={200}
              fontStyle="normal"
              fontSize="sm">
              {route.name}
            </Text>
          )}
        </HStack>
      </View>
    </TouchableOpacity>
  );
};

function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={props => ({
        headerShown: false,
        tabBarButton: () => <RenderTabBarButton {...props} />,
        tabBarLabelPosition: 'beside-icon',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Blog" component={BlogScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  tabBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 4,
  },
});
export default Navigator;
