import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const MyRefreshControl = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [bgColor, setBgColor] = React.useState('white'); 

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setBgColor('yellow'); 
    setTimeout(() => {
      setRefreshing(false);
      setBgColor('white'); 
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text style={styles.text}>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: 'black', 
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyRefreshControl;
