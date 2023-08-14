import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const GOOGLE_CLIENT_ID = '1009493733246-1kc1to0l3v088lele9ckk70d6jkssdvh.apps.googleusercontent.com'; // 구글 클라이언트 아이디
const REDIRECT_URI = 'http://localhost:19006/'; // 리디렉션 URL
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const GoogleLogin = () => {

  function GoogleLoginWebView (data) {
    // 구글 로그인 처리 코드 작성
  }

  return (
    <View style={Styles.container}>      
      <WebView
        style={{ flex: 1 }}
        originWhitelist={['*']}
        scalesPageToFit={false}
        source={{
          uri: `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=wiseSmoke&scope=openid`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={event => { GoogleLoginWebView(event.nativeEvent["url"]); }}
      />
    </View>
  )
}

export default GoogleLogin;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
  },    
});
