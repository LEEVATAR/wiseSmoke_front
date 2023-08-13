import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NaverLogin = () => {
  return (
    <View style={styles.container}>
      <Text>This is a new page!</Text>
    </View>
  );
};


export default NaverLogin;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
