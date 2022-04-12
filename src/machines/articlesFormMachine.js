import { assign, createMachine } from 'xstate';

const setInputText = assign({
  inputText: (_, {value}) => value,
});

const clearInputText = assign({
  inputText: () => '',
});

export const articlesFormMachine = createMachine({
  id: 'articlesForm',
  initial: 'closed',
  context: {
    inputText: '',
  },
  states: {
    open: {
      on: {
        TOGGLE_FORM_VISIBILITY: {
          target: 'closed',
          actions: ['clearInputText']
        },
        INPUT_TEXT_CHANGE: {
          target: 'open',
          actions: ['setInputText']
        }
      },

    },
    closed: { on: { TOGGLE_FORM_VISIBILITY: 'open' } },
  },
}, {
  actions: {setInputText, clearInputText}
});
