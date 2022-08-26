import HomeAdmin from './screens/admin/homeAdmin';
import HomeEmployee from './screens/employee/homeEmployee';
import Authentification from './screens/auth/authentication';
import { useLogin } from './context';
import DrawerNavigator from './drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <NavigationContainer>

    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen component={Authentification} name='Auth' />
    </Stack.Navigator>

    </NavigationContainer>
  );
};

const MainNavigator = () => {
  const { loggedin } = useLogin()
  return ( loggedin ? <DrawerNavigator /> : <StackNavigator />


  );
};
export default MainNavigator;