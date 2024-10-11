import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

const MyPressable = () => {
  const [timesPressed, setTimesPressed] = useState(0);
  const [disabled, setDisabled] = useState(false);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
          Alert.alert('Button Pressed!', 'You pressed the button.'); 
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>

      <Pressable
        onPress={() => {
          Alert.alert('Disabled Button', 'This button is disabled.');
        }}
        disabled={disabled}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightgray' : disabled ? 'gray' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Disabled!' : 'Press Me (Disabled State)'}
          </Text>
        )}
      </Pressable>

      <Pressable
        onPress={() => setDisabled(!disabled)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{disabled ? 'Enable' : 'Disable'} the Button</Text>
        )}
      </Pressable>

      <Pressable
        android_ripple={{ color: 'blue' }} 
        onPress={() => {
          Alert.alert('Ripple Button Pressed!', 'You pressed the ripple button.');
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? 'Ripple Pressed!' : 'Press Me (Ripple Effect)'}</Text>
        )}
      </Pressable>

      <Pressable
        onLongPress={() => {
          Alert.alert('Long Pressed!', 'You long-pressed the button.'); 
        }}
        delayLongPress={300} 
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? 'Long Pressed!' : 'Press Me (Long Press)'}</Text>
        )}
      </Pressable>

      <Pressable
        onPress={() => {
          Alert.alert('Hit Slop Button Pressed!', 'You pressed the hit slop button.');
        }}
        hitSlop={200}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? 'Hit Slop Pressed!' : 'Press Me (Hit Slop)'}</Text>
        )}
      </Pressable>

      <Pressable
        onPress={() => {
          Alert.alert('Button Pressed!', 'You pressed the console log button.'); 
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? 'Console Log Pressed!' : 'Press Me (Console Log)'}</Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 12,
    margin: 10,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});

export default MyPressable;
