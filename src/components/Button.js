import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

export default function ButtonComponent(props) {
  const { label, onPress, stylesButton } = props;

  return (
    <Pressable
      style={[styles.button, stylesButton]}
      onPress={onPress}
      testID="button-component"
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#324FFA",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
