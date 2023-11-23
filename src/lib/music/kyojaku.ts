import don from '$lib/buffers/don';
import type { Partition, Note } from '$lib/player/types';

type C = Note[];

const _: C = [['_', 0.5]];
const __: C = [['_', 1]];

const YO_hop: C = [..._, ['yo', 1], ['hop', 1]];
const hop: C = [['hop', 1]];

const DON: C = [['don', 1, 100]];

const DON_DON: C = [
	['don', 1, 100],
	['don', 1, 150],
];

const DO_DON: C = [
	['don', 0.5, 80],
	['don', 1, 150],
];

const TSU_KU: C = [
	['don', 0.5, 10],
	['don', 0.5, 10],
];
const TSU_DO: C = [
	['don', 0.5, 10],
	['don', 0.5, 100],
];

const sore: C = [['sore', 1, 100]];

const DO: C = [['don', 0.5, 100]];

const TSU_KU_DON: C = [...TSU_KU, ...DON];

const TSU_KU_TSU_KU_DO: C = [...TSU_KU, ...TSU_KU, ...DO];
const TSU_DO_TSU_KU_DO: C = [...TSU_DO, ...TSU_KU, ...DO];
const TSU_DO_TSU_DO_DO: C = [...TSU_DO, ...TSU_DO, ...DO];

const KA_RA_KA: C = [
	['ka', 0.5, 60],
	['ka', 0.5, 60],
	['ka', 0.5, 60],
];

const DO_DO_SU_DO: C = [
	['don', 0.5, 100],
	['don', 0.5, 120],
	['_', 0.5],
	['don', 1.5, 160],
];

const DO_KO_DON: C = [['don', 0.5], ['don', 0.5], ['don']];

const r = (p: C[], x: number) => [...Array(x).keys()].map(() => p.flat()).flat();

// console.log(	...r([DON, TSU_KU_TSU_KU_DON], 8),)

const p = [
	// YO_hop,
	// r([DON, TSU_KU, TSU_KU, DON], 4),
	// r([DON, TSU_DO, TSU_DO, DON, DON, TSU_DO, TSU_KU, DON], 3),
	// ...[DON, TSU_DO, TSU_DO, DON, DON, TSU_DO, TSU_KU, DO, DO, DON],
	// r([TSU_KU_DON], 7),
	// DON,
	// DON,
	// r([TSU_KU_DON], 3),
	// DON,
	// DON,
	// r([TSU_KU_DON], 3),
	// DON,
	// DON,
	// r([TSU_KU, TSU_KU, DON, sore, DON], 3),
	// TSU_KU,
	// TSU_KU,
	// DON,
	// DO,
	// KA_RA_KA,
	// DO,
	// KA_RA_KA,
	// DON,
	// r([__, __, DON, DON], 4),
	// KA_RA_KA,
	// DON,
	// KA_RA_KA,
	// DON,
	// r([__, __, DON, DON], 3),
	// __,
	// __,
	// DO_KO_DON,
	// r([TSU_KU_DON], 3),
	// DON,
	// DON,
	// r([TSU_KU_DON], 3),
	// DON,
	// __,
	// [['don', 1, 10]],
	// __,
	// [['don', 1, 10]],
	// __,
	// [['don', 1, 10]],
	// __,
	// [['don', 1, 10]],
	// DON,
	// [['don', 1, 10]],
	// __,
	// [['don', 1, 10]],
	// __,
	// [['don', 1, 10]],
	// __,
	// [['don', 1, 10]],
	// DON,
	// ...[__, __, __, DON, __, __, __, DON, DON],
	// ...[__, __, DON, __, __, __, DON, DON, DON],
	// ...[TSU_KU, DON, TSU_KU, DON, TSU_KU, DON],
	// DON,
	// DON,
	// ...[TSU_KU, DON, TSU_KU, DON, TSU_KU, DON, DON],
	// ...[__, __, __, __, __, __, __, __, __],
	_,
	DO_KO_DON,
	r([TSU_DO, TSU_DO, DO_KO_DON, TSU_DO, TSU_KU, DO_KO_DON], 2),
	r([TSU_DO, TSU_DO, DON, DON, TSU_DO, TSU_KU, DO_KO_DON], 2),
	...[TSU_KU, DON, hop, DON, hop],
	...[DO, DO, TSU_KU, DON],
	...[TSU_KU, DON, DON],
	...[TSU_KU, DON, hop, DON, hop],
	...[TSU_KU, DON, hop, DON, hop],
	...[DO, DO, TSU_KU, DON],
] satisfies Partition;

export default p.flat(1);
