import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View,Text , Button } from "react-native"

type RootStackParamList = {
  Home:undefined
  Details:undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function HomeScreen({navigation}:any) {
  return(
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={()=>navigation.navigate("Details")}/>
    </View>
  )
} 

function DetailsScreen(){
  return(
    <View>
      <Text>Details Screen</Text>
    </View>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}