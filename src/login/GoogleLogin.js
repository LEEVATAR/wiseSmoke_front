import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

// 495386511482-55tgacguhoag5a1aktni980q8knqco41.apps.googleusercontent.com // 구글 web 아이디
// 495386511482-ggcgq3mc214kgc60prrvdphf9jsunsfs.apps.googleusercontent.com // ios 아이디
// 495386511482-homka73t59afr96ckeh7c6uiccfjbahi.apps.googleusercontent.com // android 아이디

WebBrowser.maybeCompleteAuthSession();

const GoogleLogin = () => {

  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "495386511482-55tgacguhoag5a1aktni980q8knqco41.apps.googleusercontent.com",
    iosClientId: "495386511482-ggcgq3mc214kgc60prrvdphf9jsunsfs.apps.googleusercontent.com",
    androidClientId: "495386511482-homka73t59afr96ckeh7c6uiccfjbahi.apps.googleusercontent.com"
  });

  React.useEffect(() => {
    if(response?.type === "success"){
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken])

  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const userInfo = await response.json();
    setUser(userInfo);
  }

  const ShowUserInfo = () => {
    if(user) {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}}></Image> 
          <Text style={{fontSize: 20, fontWeight: 'bold', }}>{user.name}</Text>
        </View>
      )
    }
  }

  return (
    <View style={Styles.container}>
      {user && <ShowUserInfo />}
      {user === null && 
        <>
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
          style={Styles.button}
        >
          <Text style={Styles.buttonText}>구글 로그인</Text>
        </TouchableOpacity>
        </>
      }  
    </View>
  )
}

export default GoogleLogin;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },    
});
