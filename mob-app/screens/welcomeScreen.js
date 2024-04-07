import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome </Text>
      <Text style={styles.title2}>To</Text>
      <Text style={styles.name}>Oiliness Detector</Text>
      
      <Pressable style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("Home")}
        >
          GO TO HOME
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    
  },
  name: {
    fontSize: 65,
    marginBottom: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title2: {
    fontSize: 65,
    fontWeight: "bold",
    marginBottom: 10,
  },
  
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
