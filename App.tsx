import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 32,
          marginTop: 4,
          fontFamily: 'Chalkboard SE',
          color: '#0f1d61',
        }}
      >
        Home
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginTop: 20,
          // fontFamily: 'ArialMT',
        }}
      >
        This is テキスト
      </Text>
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#526eff',
          borderRadius: 6,
          position: 'absolute',
          bottom: 64,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>
          送信
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
