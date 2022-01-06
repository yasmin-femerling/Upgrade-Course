import { Name } from "..";

export type DirectionType = 'up' | 'down' | 'left' | 'right';

export type SimpleNameType = Omit<Name,'title'>;