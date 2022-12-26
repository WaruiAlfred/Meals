import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <CategoriesScreen />
    </Fragment>
  );
}

const styles = StyleSheet.create({});
