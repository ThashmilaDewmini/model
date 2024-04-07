import { useState } from "react";
import axios from 'axios';
import { Image, Linking, Pressable, StyleSheet, Text, View } from "react-native";

export function ImagePreviewScreen({ route , navigation }) {
    const { imageUri } = route.params;
    const [prediction, setPrediction] = useState(null);
    // Perform prediction logic here based on imageUri
    // Set prediction result to a state variable

    const handlePredication = async () => {
      try{
        const response = await fetch("http://127.0.0.1:8000/predict", {
          method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageUri }),
        });
         // Check if the request was successful (status code 200)
      if (response.ok) {
        // Extract prediction result from the response
        const data = await response.json();
        const { skinType } = data;

        // Update state with the prediction result
        setPrediction(skinType);
      } else {
        // Handle error response (e.g., display error message to user)
        console.error("Error predicting skin type:", response.status);
      }
      }catch (error){
        console.error("Error predicting skin type:", error);
        // Handle error (e.g., display error message to user)
      }  
    }
    const handleGoToClinic = () => {
      // Open the chatbot URL in the device's default browser
      Linking.openURL("https://www.kommunicate.io/livechat-demo?appId=a2e1a0508408a6ca7f2ec85f5a9a0ff2&botIds=ai-doctor-ukw7m&assignee=ai-doctor-ukw7m&languageCode=en");
    };
  
    return (
      <View style={styles.container}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <Text style={styles.predication}>Predication:  {prediction ? prediction : "Not yet predicted"}</Text>
        <Pressable style={styles.button} onPress={handlePredication}>
        <Text style={styles.buttonText}>Predict Skin Type</Text>
      </Pressable>
        {/* <Text>{predictionResult}</Text> */}
        <Pressable style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={handleGoToClinic}
        >
          GO TO CLINIC
        </Text>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ECFFDC'
    },
    image: {
      flex: 1,
      resizeMode: 'contain',
      marginTop: 10,
      width: '75%', // Ensure image takes up full width
      height: 'auto', // Ensure image takes up full height
    },
    predication: {
      justifyContent: 'center',
      fontSize: 25,
      marginTop: 10,
      
    },
    button: {
      marginTop: 50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: "#355E3B",
      marginBottom: 65
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
    },
  });