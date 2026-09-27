import {NavigationContainer} from "@react-navigation/native"
import {View , Text } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"

function HomeScreen(){
  return(
    <View>
      <Text>Home</Text>
    </View>
  )
}
function Settings(){
  return(
    <View>
      <Text>Settings</Text>
    </View>
  )
}

const Drawer = createDrawerNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Settings" component={Settings}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}