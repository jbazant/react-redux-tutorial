import { StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { BottomSheet, Button, Card, Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { closeForm } from "../reducers/articlesSlice";

export const NewArticleForm = () => {
  const isOpen = useSelector((state) => state.articles.form.isOpen);
  const isLoading = useSelector((state) => state.articles.form.isLoading);

  const [articlePrefix, setArticlePrefix] = useState('');

  const dispatch = useDispatch();

  // TODO 05-toolkit - rewrite using createAsyncThunk https://redux-toolkit.js.org/api/createAsyncThunk
  const addArticleCallback = useCallback(() => {}, []);

  const closeFormCallback = useCallback(() => {
    dispatch(closeForm());
  }, []);

  return (
    <BottomSheet isVisible={isOpen} containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}>
      <Card>
        <Input label="Article" placeholder="Redux is coming!" onChangeText={setArticlePrefix} />
        <View style={styles.buttons}>
          <Button
            containerStyle={styles.button}
            title="Add"
            onPress={addArticleCallback}
            loading={isLoading}
          />
          <Button
            containerStyle={styles.button}
            title="Cancel"
            type="outline"
            onPress={closeFormCallback}
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
