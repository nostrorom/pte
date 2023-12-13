import type { Word } from '$lib';

const silence = (duration = 1) => ({ duration, type: 'silence' as const });

export const _5: Word = [silence(1)];
export const _: Word = [silence(1)];
export const __: Word = [silence(2)];
export const ___: Word = [silence(3)];
