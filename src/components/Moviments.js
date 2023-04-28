import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Products from "./Products";

export default function Moviments(props) {
  const { products } = props;

  return (
    <View>
      <Text style={styles.yourMoviments}>TUS MOVIMIENTOS</Text>
      <FlatList
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Products product={item} />}
        keyExtractor={(product) => String(product.id)}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
