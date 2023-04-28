import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useGetData } from "../hooks/useGetData";
import { API_URL } from "../utils/constants";
import ButtonComponent from "../components/Button";

export default function Product(props) {
  const [product, setProduct] = useState([]);
  const {
    navigation,
    route: { params },
  } = props;

  useEffect(() => {
    (async () => {
      try {
        const response = await useGetData(`${API_URL}/${params.id}`);
        setProduct(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [params]);

  if (!product) return null;

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Nombre del producto</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.details}>Detalles del producto:</Text>
        <Text style={styles.shopped}>Comprado el {product.createdAt}</Text>
        <Text style={styles.shop}>Con esta compra acomulaste:</Text>
        <Text style={styles.points}>{product.points} puntos</Text>
      </View>
      <ButtonComponent label="Aceptar" onPress={onPress} />
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

  image: {
    bottom: 2,
    right: 2,
    width: 350,
    height: 350,
    alignSelf: "center",
    borderRadius: 10,
    paddingVertical: 45,
    paddingHorizontal: 25,
    marginVertical: "auto",
  },

  textContainer: {
    marginTop: 30,
  },

  details: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 25,
  },

  shopped: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 25,
  },

  shop: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 35,
  },

  points: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 25,
  },
});
