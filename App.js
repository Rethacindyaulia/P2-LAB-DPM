import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>RETHA CINDY AULIA</Text>
      <View style={styles.flexContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerText: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna biru
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  box1: {
    backgroundColor: '#F08080', // Warna bebas untuk kotak 1
    width: 100,
    height: 100
  },
  box2: {
    backgroundColor: '#DB7093', // Warna bebas untuk kotak 2
    width: 100,
    height: 100
  }
});

export default App;
