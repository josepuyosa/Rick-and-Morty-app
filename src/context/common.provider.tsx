import React, { useState } from 'react';
import { initialState, CommonContext } from './common.context';

export const CommonProvider = ({ children }: { children: React.ReactNode }) => {
    const [character, setCharacter] = useState(initialState);
    const value = {
        character,
        setCharacter
    }
    return <CommonContext.Provider value={value}>{children}</CommonContext.Provider>;
};
