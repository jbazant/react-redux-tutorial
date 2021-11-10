import { StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import { BottomSheet, Button, Card, Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { closeNewArticlesForm, setLoading } from '../actions/newArticlesForm';
import { addArticle } from '../actions/articles';

export const NewArticleForm = () => {
  const isOpen = useSelector((state) => state.getIn(['form', 'isOpen']));
  const isLoading = useSelector((state) => state.getIn(['form', 'isLoading']));

  const dispatch = useDispatch();
  const addArticleCallback = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const response = await fetch('jirko dej mi pls url', {
        method: 'GET',
      });
      const hopefullyAnArticle = response.json();
      //dispatch(addArticle(hopefullyAnArticle));
    } catch (e) {
    } finally {
      dispatch(setLoading(false));
    }
  }, []);

  const closeFormCallback = useCallback(() => {
    dispatch(closeNewArticlesForm());
  },[]);

  return (
    <BottomSheet isVisible={isOpen} containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}>
      <Card>
        <Input label="Article" placeholder="Redux is coming!" />
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
            onPress={() => dispatch(closeNewArticlesForm())}
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
