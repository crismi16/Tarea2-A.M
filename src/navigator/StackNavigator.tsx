import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';

export type RootStackParamList = {
  Screen1:undefined,
  Screen2:undefined,
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Screen1' screenOptions={{gestureEnabled:true}}>
      <Stack.Screen name="Screen1" options={{headerShown:false}} component={Screen1} />
      <Stack.Screen name="Screen2" options={{headerShown:false}} component={Screen2} />
    </Stack.Navigator>
  );
}