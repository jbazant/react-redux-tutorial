import * as React from 'react';
import { ScrollView } from "react-native";
import { Article } from "./Article";

// todo flat list!
export const Articles = () => (
  <ScrollView>
    <Article title={"text 1"} />
    <Article title={"text 1"} />
    <Article title={"text 1"} />
  </ScrollView>
);
