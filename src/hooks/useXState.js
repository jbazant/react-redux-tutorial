import { useContext } from "react";
import { useActor } from "@xstate/react";
import { MachinesContext } from "../models/MachinesContext";

export function useXState(key) {
  const context = useContext(MachinesContext);
  return useActor(context[key]);
}
