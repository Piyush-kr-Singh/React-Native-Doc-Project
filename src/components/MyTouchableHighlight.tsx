import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

const MyTouchableHighlight = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(prevCount => prevCount + 1);
  const decreaseCount = () => setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0)); // Prevent going below 0
  const increaseCountWithoutFeedback = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      {/* TouchableWithoutFeedback area to increase count */}
      <TouchableWithoutFeedback onPress={increaseCountWithoutFeedback} accessibilityRole="none">
        <View style={styles.buttonWithoutFeedback}>
          <Text style={styles.text}>Touch Here (No Feedback)</Text>
        </View>
      </TouchableWithoutFeedback>

      {/* Increase Count Button using TouchableOpacity */}
      <TouchableOpacity onPress={increaseCount} style={styles.button} accessibilityRole="button">
        <View>
          <Text style={styles.text}>Increase Count</Text>
        </View>
      </TouchableOpacity>

      {/* Decrease Count Button using TouchableOpacity */}
      <TouchableOpacity onPress={decreaseCount} style={styles.decreaseButton} accessibilityRole="button">
        <View>
          <Text style={styles.text}>Decrease Count</Text>
        </View>
      </TouchableOpacity>

      {/* Display Count */}
      <View style={styles.countContainer} accessibilityRole="summary">
        <Text style={styles.countText}>Count: {count}</Text>
      </View>

      {/* Link Example */}
      <TouchableOpacity onPress={() => {}} style={styles.linkButton} accessibilityRole="link">
        <View>
          <Text style={styles.text}>Visit Website</Text>
        </View>
      </TouchableOpacity>

      {/* Adjustable Slider (Just a placeholder in this case) */}
      <TouchableOpacity onPress={() => {}} style={styles.adjustableButton} accessibilityRole="adjustable">
        <View>
          <Text style={styles.text}>Adjustable Slider</Text>
        </View>
      </TouchableOpacity>

      {/* Image Button Example */}
      <TouchableOpacity onPress={() => {}} style={styles.imageButton} accessibilityRole="imagebutton">
        <View>
          <Text style={styles.text}>Image Button</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  buttonWithoutFeedback: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 20,
    height: 59,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    padding: 10,
    height: 59,
    marginBottom: 20,
  },
  decreaseButton: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    height: 59,
    marginBottom: 20,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 25,
  },
  countText: {
    color: 'blue',
    fontSize: 25,
  },
  linkButton: {
    alignItems: 'center',
    backgroundColor: '#B0C4DE',
    padding: 10,
    marginBottom: 20,
    height: 59,
  },
  adjustableButton: {
    alignItems: 'center',
    backgroundColor: '#FFD700',
    padding: 10,
    marginBottom: 20,
    height: 59,
  },
  imageButton: {
    alignItems: 'center',
    backgroundColor: '#98FB98',
    padding: 10,
    height: 59,
  },
});

export default MyTouchableHighlight;
