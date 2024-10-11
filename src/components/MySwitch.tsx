import React, { useState } from 'react';
import {Text, View, Switch, StyleSheet } from 'react-native';

const MySwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [bgColor, setBgColor] = useState('white'); // State for background color

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setBgColor(previousState => (previousState === 'white' ? 'black' : 'white')); // Toggle background color
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Text style={styles.text}>{bgColor} mode </Text>
      <Switch
        trackColor={{ false: '#3a07f0', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    transform: [{ scale: 1.7 }], 
  },
  text : {
    color : 'aqua',
    fontSize : 35
  }
});

export default MySwitch;
