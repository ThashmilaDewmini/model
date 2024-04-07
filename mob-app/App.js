import WelcomeScreen from "./app/screens/welcomeScreen"
import HomeScreen from "./app/screens/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ImagePreviewScreen } from "./app/screens/ImagePreviewScreen";
import CameraScreen from "./app/screens/CameraScreen";

const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome' >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="camera" component={CameraScreen}/>
        <Stack.Screen name="ImagePreview" component={ImagePreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


