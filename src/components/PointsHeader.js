import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";

export default function PointsHeader(props) {
  const { products } = props;
  const [pointsData, setPointsData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    (() => {
      loadPointsData();
    })();
  }, [products]);
  let pointsArray = [];
  let totalData = 0;

  const loadPointsData = () => {
    for (const product of products) {
      pointsArray.push(product.points);
      totalData += product.points;
      setTotal(totalData);
    }

    setPointsData([...pointsData, ...pointsArray]);
  };

  totalFormatted = total.toLocaleString("en");

  return (
    <>
      <Text style={styles.yourPoints}>TUS PUNTOS</Text>
      <View style={styles.container}>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsTitle}>Diciembre</Text>
          <View style={styles.points}>
            <Text style={styles.pointsText}>
              {totalFormatted == 0 ? (
                <ActivityIndicator
                  size="large"
                  style={styles.spinner}
                  color="#AEAEAE"
                />
              ) : (
                `${totalFormatted} pts`
              )}
            </Text>
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

  spinner: {
    marginBottom: Platform.OS === "android" ? 30 : 0,
  },
});
