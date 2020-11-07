import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native';
import RtcEngine from 'react-native-agora';

async function requestCameraAndAudioPermission() {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ]);
    if (
      granted['android.permission.RECORD_AUDIO'] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted['android.permission.CAMERA'] ===
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log('You can use the cameras & mic');
    } else {
      console.log('Permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

export default function Live(props) {
  const AgoraEngine = useRef();
  const init = async () => {
    AgoraEngine.current = await RtcEngine.create(
      'c7e742d5df23478285a9dc4f4ff62407',
    );
  };

  useEffect(() => {
    if (Platform.OS === 'android') requestCameraAndAudioPermission();
    init();
    return () => {
      AgoraEngine.current.destroy();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Live</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
