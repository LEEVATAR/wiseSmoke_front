import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import NaverLogin from './NaverLogin';
import KakaoLogin from './KakaoLogin';
import GoogleLogin from './GoogleLogin';

const Stack = createStackNavigator();

export default function Login() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Naver" component={NaverLogin} />
        <Stack.Screen name="Kakao" component={KakaoLogin} />
        <Stack.Screen name="Google" component={GoogleLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text> 위에는 로고를 넣을겁니다. </Text>

      <TouchableOpacity style={styles.naverLoginButton} onPress={() => navigation.navigate('Naver')}>
        <Image source={require('../image/naver.png')} style={styles.loginButtonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.kakaoLoginButton} onPress={() => navigation.navigate('Kakao')}>
        <Image source={require('../image/kakao.png')} style={styles.loginButtonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleLoginButton} onPress={() => navigation.navigate('Google')}>
        <Image source={require('../image/google.png')} style={styles.loginButtonImage} />
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  naverLoginButton: { // 버튼은 클릭 시 이벤트 및 이미지 액자
    marginBottom: 12,
  },
  kakaoLoginButton: {
    marginBottom: 12,
  },
  googleLoginButton: {
    marginBottom: 12,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButtonImage: {
    borderRadius: 8, // 둥근 효과
    width: 170, // 이미지 너비 조절
    height: 40, // 이미지 높이 조절
  }
});
