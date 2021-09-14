import * as React from 'react';
import { Button, ListItem } from 'react-native-elements';

export const Article = ({ title, index, deleteArticleByIndex }) => (
  <ListItem.Swipeable
    bottomDivider
    rightContent={
      <Button
        title="Delete"
        icon={{ name: 'delete', color: 'white' }}
        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
        onPress={() => deleteArticleByIndex(index)}
      />
    }
  >
    <ListItem.Title>{title}</ListItem.Title>
  </ListItem.Swipeable>
);
