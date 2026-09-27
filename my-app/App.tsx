import { View, Text, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


type Skill = {
  id: number
  name: string;
};

const skills: Skill[] = [
  {
    id: 1,
    name: "Typescripts",
  },
  {
    id: 2,
    name: "React",
  },
  {
    id: 3,
    name: "React Native",
  },
];

type HomeStackParamList ={
  Feed:undefined
  PostDetails:{
    postId:string
    title:string
  }
}

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

function FeedScreen({navigation}:any) {
  return(
    <View>
      <Button title="View Post" onPress={()=> navigation.navigate("PostDetails", {postId:"43", title:"My first Post"})}/>
    </View>
  )
}


function PostDetailsScreen({route , navigation}:any){
  const {postId, title} = route.params;
  return(
    <View>
      <Text>Post:{title}</Text>
      <Text>Id: {postId}</Text>
    <Button title="Go Back" onPress={()=>navigation.goBack()}/>

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