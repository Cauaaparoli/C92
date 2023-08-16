import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DiscoverScreen from './screens/Discover';

const Stack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='DiscoverScreen' component={DiscoverScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}