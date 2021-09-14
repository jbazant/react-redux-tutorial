import { Card } from "react-native-elements";
import React from "react";
import { StyleSheet } from "react-native";
import { ArticlesContainer } from "../containers/ArticlesContainer";

export const ArticlesCard = () => (
  <Card containerStyle={styles.articles}>
    <Card.Title>Articles</Card.Title>
    <ArticlesContainer />
  </Card>
)

const styles = StyleSheet.create({
  articles: {
    flex: 1,
  },
});
