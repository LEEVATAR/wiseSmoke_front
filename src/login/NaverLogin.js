import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const NV_APP_ID = 'i90dwXdfWfTQaPy11Qqq';
const NV_SERCET_ID = 'dxyna27e4T';
const REDIRECT_URI = 'http://localhost:19006/';
const STATE_STRING = "wiseSmoke";
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const NaverLogin = () => {

  // function NaverLoginWebView (data) {
  //   const exp = "code=";
  //   var condition = data.indexOf(exp);    
  //   if (condition != -1) {
  //     var authorize_code = data.substring(condition + exp.length);
  //     console.log(authorize_code);
  //   };
  // }

  return (
    <View style={Styles.container}>      
      <WebView
        style={{ flex: 1 }}
        originWhitelist={['*']}
        scalesPageToFit={false}
        source={{
          uri: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NV_APP_ID}&redirect_uri=${encodeURIComponent(
            REDIRECT_URI
          )}&state=${STATE_STRING}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
      />
    </View>
  )
}

export default NaverLogin;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
  },    
});