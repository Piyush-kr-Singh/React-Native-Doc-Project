import React from 'react';
import { ActivityIndicator as RNActivityIndicator, StyleSheet, View } from 'react-native';

const MyActivityIndicator = () => {
  return (
    <>
      <View style={[styles.container, styles.horizontal]}>
        <RNActivityIndicator />
        <RNActivityIndicator size="large" />
        <RNActivityIndicator size="small" color="white" />
        <RNActivityIndicator size="large" color="#00ff00" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop : 10
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default MyActivityIndicator;
