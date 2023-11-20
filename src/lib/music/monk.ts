import type { Partition, Note } from '$lib/player/types';

const YO_HOP: Note[] = [
	['yo', 1],
	['hop', 1],
];

const DON_DON: Note[] = [
	['don', 1, 100],
	['don', 1, 150],
];

const DO_DON: Note[] = [
	['don', 0.5, 80],
	['don', 1, 150],
];

const TSE_KE: Note[] = [
	['don', 0.5, 15],
	['don', 1, 15],
];

const DO_DO_SU_DO: Note[] = [
	['don', 0.5, 100],
	['don', 0.5, 120],
	['_', 0.5],
	['don', 1.5, 160],
];

const DO_KO_DON: Note[] = [['don', 0.5, 80], ['don', 0.5], ['don']];

const CRESCENDO_LONG: Note[] = [
	['don', 1, 15],
	['don', 1, 15],
	['don', 1, 15],
	['don', 1, 15],
	['don', 1, 50],
	['don', 1, 60],
	['don', 1, 100],
	['don', 1, 120],
	['don', 1, 15],
	['don', 1, 15],
	['don', 1, 15],
	['don', 1, 15],
	['don', 1, 50],
	['don', 1, 80],
	['don', 0.5, 100],
	['don', 0.5, 120],
];
const CRESCENDO_COURT: Note[] = [
	['don', 1, 15],
	['don', 1, 15],
	['don', 1, 100],
	['don', 1, 120],
	['don', 1, 15],
	['don', 1, 15],
	['don', 0.5, 100],
	['don', 0.5, 120],
];
const p = [
	[['_', 1]],
	YO_HOP,
	DON_DON,
	YO_HOP,
	DO_DON,
	YO_HOP,
	DON_DON,
	YO_HOP,
	DO_DON,
	[['hop']],
	DO_DON,
	[['_', 1]],
	DO_KO_DON,
	DO_KO_DON,
	DO_KO_DON,
	[['don']],
	DO_DON,
	[['_', 1]],
	TSE_KE,
	[['_', 1]],
	TSE_KE,
	[['_', 1]],
	TSE_KE,
	[['_', 1]],
	DO_DON,
	[['_', 1]],
	TSE_KE,
	[['_', 1]],
	TSE_KE,
	[['_', 1]],
	TSE_KE,
	[['_', 1]],
	DO_DON,
	[['_', 1]],
	DO_DO_SU_DO,
	[['_', 1]],
	DO_DO_SU_DO,
	[['_', 1]],
	CRESCENDO_LONG,
	CRESCENDO_LONG,
	CRESCENDO_COURT,
	CRESCENDO_COURT,
	[['_', 1]],
	DO_DON,
	[['_', 0.5]],
	DO_DON,
	[['_', 0.5]],
	DO_DON,
	[['_', 0.5]],
	DO_DON,
	[['_', 0.5]],
	DO_DON,
	[['_', 0.5]],
	DO_DON,
	[['_', 0.5]],
	[
		['don', 0.5, 100],
		['don', 1, 180],
	],
] satisfies Partition;

export default p.flat();
