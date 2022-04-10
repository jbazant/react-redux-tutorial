import { createMachine, assign } from 'xstate';

const addWater = assign({
  amount: (context, event) => context.amount + 1,
});

function glassIsFull(context, event) {
  return context.amount >= 10;
}

const glassMachine = createMachine(
  {
    id: 'glass',
    context: {
      amount: 0,
    },
    initial: 'empty',
    states: {
      empty: {
        on: {
          FILL: {
            target: 'filling',
            actions: 'addWater',
          },
        },
      },
      filling: {
        always: {
          target: 'full',
          cond: 'glassIsFull',
        },
        on: {
          FILL: {
            target: 'filling',
            actions: 'addWater',
          },
        },
      },
      full: {},
    },
  },
  {
    actions: { addWater },
    guards: { glassIsFull },
  }
);
