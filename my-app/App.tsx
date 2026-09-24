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

const screenWidth = Dimensions.get("window").width;

type Skill = {
  id:number , 
  name:string
}

const skills : Skill[] =[
  {
    id:1,
    name:'Typescript'
  },
  {
    id:2,
    name:'PostgresSQl'
  },
  {
    id:3,
    name:'React Native'
  },
]

export default function App(){
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder}/>
        <View>
            <Text style={styles.name}>Samriddha Gautam</Text>
            <Text style={styles.role}>Software Engineer</Text>
        </View>
      </View>
      <View style={styles.skillsRow}>
        {skills.map((skill)=>(
          <View key={skill.id} style={styles.skillsBadge}>
             <Text style={styles.skillText}>{skill.name}</Text> 
          </View>
        ))}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    width:screenWidth * 0.9,
    marginTop:60,
    alignSelf:'center',
    padding:16,
    backgroundColor:'#ebdbc1',
    borderRadius:16
  },
  header:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:16,
  },
  avatarPlaceholder:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:"lightgray",
    marginRight:12
  },
  name:{
    fontSize:18,
    fontWeight:'bold'
  },
  role:{
    fontSize:14,
    color:"gray"
  },
  skillsRow:{
    flexDirection:'row',
    justifyContent:'center',
    flexWrap:'wrap'
  },
  skillsBadge:{
    backgroundColor:"#b5a892",
    paddingVertical:4,
    paddingHorizontal:10,
    borderRadius:5,
    marginLeft:10,
    marginBottom:8

  },
  skillText:{
    color:"yellow",
    fontSize:12,
    fontWeight:"bold"
  }
})