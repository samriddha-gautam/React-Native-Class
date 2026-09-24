import { Platform, View, Text, StyleSheet, Dimensions } from "react-native";

export default function App() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
        <Text style={styles.headerText}>Contact</Text>
        <Text style={styles.headerText}>About</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.container]}>
          <View style={styles.box}>
            <Text style={styles.viewText}>1</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.viewText}>2</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.viewText}>3</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.box}>
            <Text style={styles.viewText}>a</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.viewText}>b</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.viewText}>c</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.viewText}>This is the card contents</Text>
      </View>
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === "android" ? 44 : 24,
    flexDirection:"row",
    justifyContent:'space-evenly'
  },
  headerText:{
    fontWeight:900,
    fontSize:21,
    color:'red'
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  container: {
    flex: 1,
    marginTop: 50,
  },
  container2: {
    flex: 1,
    marginTop: 50,
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: "steelblue",
    margin: 5,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  viewText: {
    color: "#ffffff",
    fontWeight: "900",
    fontSize: 24,
  },
  card: {
    width: screenWidth * 0.9,
    height: "50%",
    borderRadius: 15,
    padding: 16,
    backgroundColor: "green",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
