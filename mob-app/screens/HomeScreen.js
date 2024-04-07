import { Image, Pressable, StyleSheet, Text, View } from "react-native";
const homeImage = require("../assets/img1.jpg")

export default function HomeScreen ({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skin Type Detector</Text>
      <Image source={homeImage} style={styles.image}/>
      <Text style={styles.description}>This application will instantly analyze facial oiliness, receive
        personalized skincare tips, and track progress for healthier skin.</Text>
        <Pressable style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("camera")}
        >
          TAKE A PHOTO
        </Text>
        </Pressable>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FAD5A5'
  },
  title: {
    color: '#355E3B',
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 15
  },
  image: {
    width: '100%',
    height: '55%',
  },
  description: {
    marginTop: 20,
    fontSize: 25
  },
  button: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#355E3B",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
})