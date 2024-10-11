import React from 'react';
import { Text, Button, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import MyActivityIndicator from './src/components/MyActivityIndicator';
import MyButtons from './src/components/MyButtons';
import MyFlatList from './src/components/MyFlatList';
import MyImage from './src/components/MyImage';
import MyImageBackground from './src/components/MyImageBackground';
import MyKeyboardAvoidingView from './src/components/MyKeyboardAvoidingView';
import MyModal from './src/components/MyModal';
import MyPressable from './src/components/MyPressable';
import MyRefreshControl from './src/components/MyRefreshControl';
import MyScrollView from './src/components/MyScrollView';
import MySectionList from './src/components/MySectionList';
import MyStatusBar from './src/components/MyStatusBar';
import MySwitch from './src/components/MySwitch';
import MyTouchableHighlight from './src/components/MyTouchableHighlight';
import MyDrawerLayout from './src/components02/MyDrawerLayout';
import MyTouchableNativeFeedback from './src/components02/MyTouchableNativeFeedback';


type RootStackParamList = {
  Home: undefined;
  ActivityIndicator: undefined;
  Buttons: undefined;
  FlatList : undefined;
  Image : undefined;
  ImageBackground : undefined;
  KeyboardAvoidingView : undefined;
  Modal : undefined;
  Pressable : undefined;
  RefreshControl : undefined;
  ScrollView : undefined;
  SectionList : undefined;
  StatusBar : undefined;
  Switch : undefined;
  TouchableHighlight : undefined;
  DrawerLayout : undefined;
  TouchableNativeFeedback: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: { navigation: HomeScreenProps }): React.JSX.Element {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Navigate to Components</Text>

        <View style={styles.view}>
          <Button title="Go to Activity Indicator"
            onPress={() => navigation.navigate('ActivityIndicator')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to Buttons"
            onPress={() => navigation.navigate('Buttons')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to FlatLists"
            onPress={() => navigation.navigate('FlatList')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to Images"
            onPress={() => navigation.navigate('Image')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to ImageBackground"
            onPress={() => navigation.navigate('ImageBackground')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to KeyboardAvoidingView"
            onPress={() => navigation.navigate('KeyboardAvoidingView')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to Modal"
            onPress={() => navigation.navigate('Modal')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to Pressable"
            onPress={() => navigation.navigate('Pressable')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to RefreshControl"
            onPress={() => navigation.navigate('RefreshControl')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to ScrollView"
            onPress={() => navigation.navigate('ScrollView')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to SectionList"
            onPress={() => navigation.navigate('SectionList')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to StatusBar"
            onPress={() => navigation.navigate('StatusBar')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to Switch"
            onPress={() => navigation.navigate('Switch')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to TouchableHighlight"
            onPress={() => navigation.navigate('TouchableHighlight')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to DrawerLayout"
            onPress={() => navigation.navigate('DrawerLayout')}
          />
        </View>

        <View style={styles.view}>
          <Button
            title="Go to TouchableNativeFeedback"
            onPress={() => navigation.navigate('TouchableNativeFeedback')}
          />
        </View>

      </View>
    </View>
    </ScrollView>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="ActivityIndicator" component={MyActivityIndicator} options={{ title: 'Activity Indicator' }} />
        <Stack.Screen name="Buttons" component={MyButtons} options={{ title: 'Buttons' }} />
        <Stack.Screen name="FlatList" component={MyFlatList} options={{ title: 'FlatList' }} />
        <Stack.Screen name="Image" component={MyImage} options={{ title: 'Image' }} />
        <Stack.Screen name="ImageBackground" component={MyImageBackground} options={{ title: 'ImageBackground' }} />
        <Stack.Screen name="KeyboardAvoidingView" component={MyKeyboardAvoidingView} options={{ title: 'KeyboardAvoidingView' }} />
        <Stack.Screen name="Modal" component={MyModal} options={{ title: 'Modal' }} />
        <Stack.Screen name="Pressable" component={MyPressable} options={{ title: 'Pressable' }} />
        <Stack.Screen name="RefreshControl" component={MyRefreshControl} options={{ title: 'RefreshControl' }} />
        <Stack.Screen name="ScrollView" component={MyScrollView} options={{ title: 'ScrollView' }} />
        <Stack.Screen name="SectionList" component={MySectionList} options={{ title: 'SectionList' }} />
        <Stack.Screen name="StatusBar" component={MyStatusBar} options={{ title: 'StatusBar' }} />
        <Stack.Screen name="Switch" component={MySwitch} options={{ title: 'Switch' }} />
        <Stack.Screen name="TouchableHighlight" component={MyTouchableHighlight} options={{ title: 'TouchableHighlight' }} />
        <Stack.Screen name="DrawerLayout" component={MyDrawerLayout} options={{ title: 'DrawerLayout' }} />
        <Stack.Screen name="TouchableNativeFeedback" component={MyTouchableNativeFeedback} options={{ title: 'TouchableNativeFeedback' }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom : 30,
  },
  view: {
    alignItems: 'center',
    marginBottom: 10,
    color: 'black',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
