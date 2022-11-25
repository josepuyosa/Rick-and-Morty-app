import { createContext, Dispatch } from 'react';

export interface IInitialState {
    character: any;
    setCharacter: (x: any) => void;
}
export const initialState: IInitialState = {
    character: null,
    setCharacter: () => { }
};

export const CommonContext = createContext({
    ...initialState
});
