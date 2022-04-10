import { createMachine } from 'xstate';

export const articlesFormMachine = createMachine({
  id: 'articlesForm',
  initial: 'closed',
  states: {
    open: {
      on: { TOGGLE_FORM_VISIBILITY: 'closed' },
    },
    closed: { on: { TOGGLE_FORM_VISIBILITY: 'open' } },
  },
});
