import React from 'react';
import { MachinesContext } from '../models/MachinesContext';
import { articlesMachine } from '../machines/articlesMachine';
import { useInterpret } from '@xstate/react';
import { articlesFormMachine } from "../machines/articlesFormMachine";

export const MachinesProvider = ({ children }) => {
  const articlesService = useInterpret(articlesMachine);
  const articlesFormService = useInterpret(articlesFormMachine);

  return (
    <MachinesContext.Provider
      value={{ articlesService, articlesFormService }}>
      {children}
    </MachinesContext.Provider>
  );
};
