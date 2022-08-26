import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeAdmin from './screens/admin/homeAdmin';
import HomeEmployee from './screens/employee/homeEmployee';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeAdmin} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}