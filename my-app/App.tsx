import {NavigationContainer} from "@react-navigation/native"
import {View , Text } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

type HomeStackParamList ={
  Feed:undefined
  PostDetails:{
    postId:string
  }
}

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

function FeedScreen({native}:any) {
  return(
    <View>
      <Text>Feed</Text>
    </View>
  )
}

function PostDetailsScreen(){
  return(
    <View>
      <Text>Post Details</Text>
    </View>
  )
}

function HomeStackNavigator(){
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Feed" component={FeedScreen}/>
      <HomeStack.Screen name="PostDetails" component={PostDetailsScreen}/>
    </HomeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function ProfileScreen(){
  return(
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{title:"Home"}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}