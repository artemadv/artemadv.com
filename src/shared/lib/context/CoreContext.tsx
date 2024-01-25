import { createContext } from 'react';

const defaultValues = {
    origin: '',
};

export type CoreContext = typeof defaultValues;
export const CoreContext = createContext(defaultValues);
