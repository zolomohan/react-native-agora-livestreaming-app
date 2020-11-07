import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Live() {
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