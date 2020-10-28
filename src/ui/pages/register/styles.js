import { StyleSheet } from "react-native";
import { color, t } from "react-native-tailwindcss";
// import { fullWidth, fullHeight } from "@helpers";

export const styles = StyleSheet.create({
  brandName: {
    fontFamily: "Poppins-Regular",
    marginVertical: 10,
    fontSize: 26,
  },
  loginContainer: {
    padding: 16,
    borderRadius: 10,
  },
  button: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonText: {
    paddingVertical: 10,
    textAlign: "center",
    color: "white",
    backgroundColor: color.green500,
    fontFamily: "Poppins-Regular",
  },
  mb10: {
    marginBottom: 10,
  },
  text1: {
    marginVertical: 10,
    textAlign: "right",
    fontFamily: "Poppins-Regular",
  },
  text2: {
    fontFamily: "Poppins-Medium",
  },
});
