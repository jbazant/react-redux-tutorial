import { StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { BottomSheet, Button, Card, Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {closeNewArticlesForm, findArticleOnServer, setLoading} from '../actions/newArticlesForm';

export const NewArticleForm = () => {
  const isOpen = useSelector((state) => state.getIn(['form', 'isOpen']));
  const isLoading = useSelector((state) => state.getIn(['form', 'isLoading']));

  const [articlePrefix, setArticlePrefix] = useState('');

  const dispatch = useDispatch();
  const addArticleCallback = useCallback(() => dispatch(findArticleOnServer(articlePrefix)), [articlePrefix]);

  const closeFormCallback = useCallback(() => {
    dispatch(closeNewArticlesForm());
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
