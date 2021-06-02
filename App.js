import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import PDFReader from "rn-pdf-reader-js";

export default function App() {
  const source = {
    uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
    cache: true,
  };
  //const source = require('./test.pdf');  // ios only
  //const source = {uri:'bundle-assets://test.pdf'};

  //const source = {uri:'file:///sdcard/test.pdf'};
  //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <PDFReader
          source={{
            uri: source.uri,
          }}
          onError={() => {
            console.log("onError");
          }}
          onLoadEnd={() => {
            console.log("onLoadEnd");
          }}
          onLoad={() => {
            console.log("onLoad");
          }}
          withScroll={true}
          withPinchZoom={true}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: "column",
  },
});
