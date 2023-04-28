import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";

export default function Products(props) {
  const { product } = props;
  const navigation = useNavigation();

  moment.locale("es");
  const dt = product.createdAt;

  const goToProduct = () => {
    navigation.navigate("Product", { id: product.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToProduct}>
      <View style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.containerInfo}>
          <Text style={styles.name}>{product.product}</Text>
          <Text style={styles.date}>{moment(dt).format("LL")}</Text>
        </View>
        <View style={styles.points}>
          <Text style={styles.pointsText}>{product.points}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    height: 80,
    flexDirection: "row",
    marginBottom: 10,
    display: "flex",
    justifyContent: "space-between",
  },

  image: {
    bottom: 2,
    right: 2,
    width: 70,
    height: 70,
    borderRadius: 10,
  },

  containerInfo: {
    height: "80%",
    marginTop: "auto",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },

  name: {
    fontWeight: "bold",
    fontSize: 15,
  },

  date: {
    alignSelf: "flex-end",
  },

  points: {
    height: "100%",
    width: 80,
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  pointsText: {
    fontWeight: "bold",
  },
});
