import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function HeaderHome() {
  return (
    <View>
      <Text style={styles.welcome}>¡Bienvenido de vuelta!</Text>
      <Text style={styles.name}>Ruben Rodriguez</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 22,
    fontWeight: "bold",
  },

  name: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: "300",
  },
});
