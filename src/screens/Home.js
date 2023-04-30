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

  let arrayDataRender = [];
  let account = 5;

  const loadData = async () => {
    try {
      const response = await useGetData(API_URL);
      for (let index = 0; index < account; index++) {
        arrayDataRender.push(response[index]);
      }

      setProducts(arrayDataRender);
      return;
    } catch (error) {
      console.error(error);
    }
  };

  const productsFiltered = products.filter(
    (product) => product.is_redemption === false
  );

  return (
    <View style={styles.container}>
      <HeaderHome />
      <PointsHeader products={productsFiltered} />
      <Moviments products={products} loadData={loadData} />
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
