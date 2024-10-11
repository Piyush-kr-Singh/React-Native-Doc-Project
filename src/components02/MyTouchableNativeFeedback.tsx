import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  StatusBar,
} from 'react-native';

const MyTouchableNativeFeedback = () => {
  const [rippleColor, setRippleColor] = useState(randomHexColor());
  const [rippleOverflow, setRippleOverflow] = useState(false);
  const [useForeground, setUseForeground] = useState(
    TouchableNativeFeedback.canUseNativeForeground()
  ); // Check if foreground ripple is supported

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() => {
          setRippleColor(randomHexColor());
          setRippleOverflow(!rippleOverflow);
        }}
        background={TouchableNativeFeedback.Ripple(
          rippleColor,
          rippleOverflow,
          30 
        )}
        useForeground={useForeground} 
        hasTVPreferredFocus={true} 
        nextFocusDown={1}
        nextFocusUp={2} 
        nextFocusLeft={3} 
        nextFocusRight={4} 
        nextFocusForward={5} 
      >
        <View style={styles.touchable}>
          <Text style={styles.text}>TouchableNativeFeedback</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const randomHexColor = () => {
  return '#000000'.replace(/0/g, function () {
    return Math.round(Math.random() * 16).toString(16);
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  touchable: {
    flex: 0.5,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
  },
  text: { alignSelf: 'center', fontSize: 16 },
});

export default MyTouchableNativeFeedback;
