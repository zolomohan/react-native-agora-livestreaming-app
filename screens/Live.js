import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RtcEngine from 'react-native-agora';

export default function Live(props) {
  const AgoraEngine = useRef();
  const init = async () => {
    AgoraEngine.current = await RtcEngine.create(
      'c7e742d5df23478285a9dc4f4ff62407',
    );
  };

  useEffect(() => {
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
