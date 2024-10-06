import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Screen_02({ navigation }) {
  return (
    <View style={styles.container}>
      
      
      <View style={styles.style3}>
        <TouchableOpacity
          style={{
            backgroundColor: "#33CCFF",
            borderRadius: 10,
            width: '95%',
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Screen_01")}
        >
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Return !</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  style1: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  style2: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  style3: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
