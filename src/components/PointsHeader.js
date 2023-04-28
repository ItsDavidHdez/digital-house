import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function PointsHeader() {
  return (
    <>
      <Text style={styles.yourPoints}>TUS PUNTOS</Text>
      <View style={styles.container}>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsTitle}>Diciembre</Text>
          <View style={styles.points}>
            <Text style={styles.pointsText}>10,00.00 pts</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  yourPoints: {
    marginTop: 25,
    color: "gray",
    fontWeight: "bold",
    fontSize: 14,
  },
  container: {
    padding: 24,
  },
  pointsContainer: {
    paddingVertical: 8,
    borderColor: "#324ffa",
    borderRadius: 6,
    backgroundColor: "#324ffa",
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    height: 150,
  },

  pointsTitle: {
    margin: 15,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },

  points: {
    marginBottom: 10,
  },

  pointsText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    alignItems: "center",
    alignSelf: "center",
  },
});
