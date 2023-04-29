import { View, Text, StyleSheet } from "react-native";

export default function Symbol(props) {
  const { isTrueOrFalse } = props;
  return (
    <>
      {isTrueOrFalse ? (
        <Text style={[styles.isFalse, styles.text]}>-</Text>
      ) : (
        <Text style={[styles.isTrue, styles.text]}>+</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },

  isTrue: {
    color: "green",
  },

  isFalse: {
    color: "red",
  },
});
