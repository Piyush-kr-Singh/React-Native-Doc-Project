import React, { useState } from 'react';
import { Animated, StyleSheet, Text, Pressable, View, Modal } from 'react-native';

const MyModal = () => {
  const [modalVisible, setModalVisible] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
  });
  
  const [translateY] = useState(new Animated.Value(-500)); // Initial position for top modal animation

  const showModal = (modal : string) => {
    if (modal === 'modal2') {
      setModalVisible({ ...modalVisible, [modal]: true });
      showTopModal(); // Animate the top modal when it opens
    } else {
      setModalVisible({ ...modalVisible, [modal]: true });
    }
  };

  const hideModal = (modal : string) => {
    if (modal === 'modal2') {
      hideTopModal(); // Hide and animate the top modal
    } else {
      setModalVisible({ ...modalVisible, [modal]: false });
    }
  };

  // Function to show the top modal with animation
  const showTopModal = () => {
    Animated.spring(translateY, {
      toValue: 0, // Move to the visible position
      useNativeDriver: true,
    }).start();
  };

  // Function to hide the top modal with animation
  const hideTopModal = () => {
    Animated.spring(translateY, {
      toValue: -200, // Move out of view
      useNativeDriver: true,
    }).start(() => {
      setModalVisible({ ...modalVisible, modal2: false }); // Set modal visibility to false after animation
    });
  };

  return (
    <View style={styles.centeredView}>
      {/* Modal 1: Slide from Bottom */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible.modal1}
        onRequestClose={() => hideModal('modal1')}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello from the Bottom!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => hideModal('modal1')}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Modal 2: Slide from Top */}
      <Modal
        transparent={true}
        visible={modalVisible.modal2}
        onRequestClose={() => hideModal('modal2')}
      >
        <View style={styles.overlay}>
          <Animated.View style={[styles.modalView, { transform: [{ translateY }] }]}>
            <Text style={styles.modalText}>Hello from the Top!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => hideModal('modal2')}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>

      {/* Modal 3: Fade In */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible.modal3}
        onRequestClose={() => hideModal('modal3')}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello with Fade In!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => hideModal('modal3')}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Buttons to show modals */}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => showModal('modal1')}
      >
        <Text style={styles.textStyle}>Show Modal from Bottom</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => showModal('modal2')}
      >
        <Text style={styles.textStyle}>Show Modal from Top</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => showModal('modal3')}
      >
        <Text style={styles.textStyle}>Show Fade In Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    justifyContent: 'flex-start', // Align to the top for sliding in
  },
  modalView: {
    marginTop: 22,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
  },
  buttonOpen: {
    backgroundColor: 'blue',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default MyModal;
