import { Image, StyleSheet, Text, View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";

export default function CameraScreen({}) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);
    const navigation = useNavigation();
  
    useEffect(() => {
      (async () => {
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === "granted");
      })();
    }, []);
    const takePicture = async () => {
        if (cameraRef) {
          try {
            const data = await cameraRef.current.takePictureAsync();
            console.log(data);
            setImage(data.uri);
            navigation.navigate('ImagePreview', { imageUri: data.uri });
          } catch (e) {
            console.log(e);
          }
        }
      };
      if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      }

      return (
        <View style={styles.container}>
          <Camera
            style={styles.camera}
            type={type}
            flashMode={flash}
            ref={cameraRef}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 30,
              }}
            >
              <Button
                icon={"retweet"}
                onPress={() => {
                  setType(
                    type === CameraType.back ? CameraType.front : CameraType.back
                  );
                }}
              />
              <Button
                icon={"flash"}
                color={
                  flash === Camera.Constants.FlashMode.off ? "gray" : "#f1f1f1"
                }
                onPress={() => {
                  setFlash(
                    flash === Camera.Constants.cameraRef.off
                      ? Camera.Constants.FlashMode.on
                      : Camera.Constants.FlashMode.off
                  );
                }}
              />
            </View>
          </Camera>
    
          <View>
            <Button
              title={"Take a picture"}
              icon="camera"
              onPress={takePicture}
            />
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        paddingBottom: 25,
      },
      camera: {
        flex: 1,
        borderRadius: 20,
      },
    });
    