import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderHome from "../components/HeaderHome";
import PointsHeader from "../components/PointsHeader";
import Moviments from "../components/Moviments";
import { useGetData } from "../hooks/useGetData";
import { API_URL } from "../utils/constants";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      await loadData();
    })();
  }, []);

  const loadData = async () => {
    try {
      const response = await useGetData(API_URL);
      setProducts(response);
      return;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderHome />
      <PointsHeader />
      <Moviments products={products} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    flexDirection: "column",
  },
});
