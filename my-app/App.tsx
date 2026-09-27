import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {View , Text } from "react-native"

function HomeScreen(){
  return(
    <View>
      <Text>
        Home
      </Text>
    </View>
  )
}

function SearchScreen(){
  return(
    <View>
      <Text>
        Search
      </Text>
    </View>
  )
}

function ProfileScreen(){
  return(
    <View>
      <Text>Profile</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:"red",
        tabBarInactiveTintColor:"green"
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel:"Feed"}}/>
        <Tab.Screen name="Search" component={SearchScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}