import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

const MyImageBackground = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
        accessible={true} // Mark as accessible
        accessibilityLabel="React logo background"
      >
        <Text style={styles.text}>Inside Text</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default MyImageBackground;
