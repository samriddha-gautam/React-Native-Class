import { View, Text, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


type Skill = {
  id: number;
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

export default function App() {
  return (
    <SafeAreaProvider style={{flex:1, margin:10}}>
      <ScrollView>
        {/* Block-1 */}
        <View>
          <Text>Samriddha Gautam</Text>
          <Text>Mobile Developer</Text>
        </View>
        <View>
          <Text>Skills:</Text>
          {skills.map((skill) => (
            <View key={skill.id}>
              <Text> - {skill.name}</Text>
            </View>
          ))}
        </View>
        
      </ScrollView>
    </SafeAreaProvider>
  );
}
