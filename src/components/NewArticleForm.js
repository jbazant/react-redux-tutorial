import { StyleSheet, View } from 'react-native';
import React from 'react';
import { BottomSheet, Button, Card, Input } from 'react-native-elements';

export const NewArticleForm = ({ isVisible, setVisible }) => {
  return (
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
      >
        <Card>
          <Input label="Article" placeholder="Redux is coming!"/>
          <View style={styles.buttons}>
            <Button containerStyle={styles.button} title="Add" onPress={() => setVisible(false)} />
            <Button
              containerStyle={styles.button}
              title="Cancel"
              type="outline"
              onPress={() => setVisible(false)}
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
