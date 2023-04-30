import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import ButtonComponent from "./Button";

export default function Moviments(props) {
  const { products, loadData } = props;
  const [isWon, setIsWon] = useState(false);
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [isTotal, setIsTotal] = useState(true);

  const dataWithFalseFilters = products.filter(
    (product) => product.is_redemption === true
  );

  const dataWithTrueFilters = products.filter(
    (product) => product.is_redemption === false
  );

  const handlerWon = () => {
    setIsWon(true);
    setIsTotal(false);
    return;
  };

  const handlerRedeemed = () => {
    setIsRedeemed(true);
    setIsTotal(false);
    return;
  };

  const handlerTotal = () => {
    setIsTotal(true);
    setIsRedeemed(false);
    setIsWon(false);
  };

  const handlerRenderData = () => {
    if (isWon) {
      return dataWithTrueFilters;
    } else if (isRedeemed) {
      return dataWithFalseFilters;
    } else {
      return products;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.yourMoviments}>TUS MOVIMIENTOS</Text>
      <FlatList
        data={handlerRenderData()}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Products product={item} />}
        keyExtractor={(product) => String(product.id)}
        contentContainerStyle={styles.flatListContentContainer}
      />
      <View style={styles.buttonComponent}>
        {!isTotal ? (
          <ButtonComponent
            label="Todos"
            onPress={handlerTotal}
            stylesButton={styles.allButton}
          />
        ) : (
          <>
            <ButtonComponent
              label="Ganados"
              onPress={handlerWon}
              stylesButton={styles.button}
            />
            <ButtonComponent
              label="Canjeados"
              onPress={handlerRedeemed}
              stylesButton={styles.button}
            />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "65%",
  },

  button: {
    width: "48%",
  },

  allButton: {
    width: "100%",
  },

  yourMoviments: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 40,
  },

  flatListContentContainer: {
    marginTop: Platform.OS === "android" ? 30 : 0,
  },

  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },

  buttonComponent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
});
