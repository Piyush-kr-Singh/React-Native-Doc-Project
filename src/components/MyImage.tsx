import React from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';

const MyImage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Accessible and Enhanced Images</Text>
          <Image
            style={styles.tinyLogo}
            source={{ uri: 'https://img.freepik.com/premium-photo/aigenerated-captivating-mountain-lake-view_1053688-184.jpg' }}
            alt="A mountain lake view with a beautiful sky"
            accessible={true}
            accessibilityLabel="A stunning mountain lake view with clear skies"
            blurRadius={3}
            resizeMode="cover"
          />

          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://img.lovepik.com/photo/48013/0576.jpg_wh860.jpg',
            }}
            alt="Nature with green field and mountains"
            accessible={true}
            accessibilityLabel="A wide field of green grass with mountains in the background"
            fadeDuration={500}
            resizeMode="contain"
          />

          <Image
            style={styles.logo}
            source={{
              uri: 'https://img.freepik.com/free-photo/digital-art-moon-tree-wallpaper_23-2150918811.jpg',
            }}
            alt="Hanging glowing lights in celebration"
            accessible={true}
            accessibilityLabel="A celebration scene with glowing hanging lights"
            blurRadius={2}
            resizeMode="stretch"
          // tintColor="rgba(255, 0, 0, 0.1)"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
  },
  tinyLogo: {
    marginBottom: 20,
    width: 250,
    height: 250,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MyImage;
