import { StyleSheet, View } from 'react-native';
import React from 'react';
import { BottomSheet, Button, Card, Input } from 'react-native-elements';
import { useXState } from "../hooks/useXState";

export const NewArticleForm = () => {
  const [_, sendArticle] = useXState('articlesService');
  const [current, sendForm] = useXState('articlesFormService');

  const close = () => sendForm({type: 'TOGGLE_FORM_VISIBILITY'});

  const addAction = () => {
    sendArticle({type: 'ADD_ARTICLE', title: current.context.inputText})
    close();
  };

  const typeAction = (value) => sendForm({type: 'INPUT_TEXT_CHANGE', value});

  return (
      <BottomSheet
        isVisible={current.matches('open')}
        containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
      >
        <Card>
          <Input label="Article" placeholder="XState is coming!" onChangeText={typeAction}/>
          <View style={styles.buttons}>
            <Button containerStyle={styles.button} title="Add" onPress={addAction} />
            <Button
              containerStyle={styles.button}
              title="Cancel"
              type="outline"
              onPress={close}
            />
          </View>
        </Card>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 5,
    flex: 1,
  },
});
