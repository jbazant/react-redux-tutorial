import { Card } from "react-native-elements";
import { Articles } from "./Articles";
import React from "react";
import { StyleSheet } from "react-native";

export const ArticlesCard = () => (
  <Card containerStyle={styles.articles}>
    <Card.Title>Articles</Card.Title>
    <Articles />
  </Card>
)

const styles = StyleSheet.create({
  articles: {
    flex: 1,
  },
});
