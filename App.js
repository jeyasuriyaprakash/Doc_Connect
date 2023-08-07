import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startpage from './Screens/Startpage';
// import Homepage from './Screens/Homepage';
import BottomNavigation from './Screens/BottomNavigation';
// import Appointment2 from './Screens/Appointment2';
import TopNavigation from './Screens/TopNavigation';
import Login from './Screens/Login';
import PatientDetails from './Screens/PatientDetails';
import CancelAppointment from './Screens/CancelAppointment';
import ProfileView from './Screens/ProfileView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

   
  <NavigationContainer>
    
    <Stack.Navigator screenOptions={{ headerShown: false }}>

     <Stack.Screen name='Startpage' component={Startpage}/>
     <Stack.Screen name='Login' component={Login}/>
     <Stack.Screen name='PatientDetails' component={PatientDetails}/>
     <Stack.Screen name='CancelAppointment' component={CancelAppointment} />

   {/* <Stack.Screen name='Homepage' component={Homepage}/>   */}
 
    <Stack.Screen name='BottomNavigation' component={BottomNavigation}/>
    <Stack.Screen name='TopNavigation' component={TopNavigation} />
    <Stack.Screen name='ProfileView' component={ProfileView} />

    </Stack.Navigator>

  </NavigationContainer>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
