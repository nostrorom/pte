import type { Song, Channel, Word } from '$lib/types';

import { ツ, ド, ホ, ヨ, _ } from '$lib';

const r: Channel = 'R';
const l: Channel = 'L';

const ヨ_ホ: Word = [ヨ(), ホ()];

const ド_ド: Word = [ド(r), ド(l, 1, 130)];

const ドド: Word = [ド(r, 0.5, 80), ド(l, 1, 130)];

const ツ_ク: Word = [ツ(r, 0.5), ツ(l)];

const ドド__ド: Word = [ド(r, 0.5, 100), ド(l, 1, 12), ド(r, 1, 150)];

const ド_コ_ド: Word = [ド(r, 0.5), ド(l, 0.5, 80), ド(r)];

const CRESCENDO_LONG: Word = [
	ツ(r),
	ツ(l),
	ツ(r),
	ツ(l),
	ド(r, 1, 50),
	ド(l, 1, 80),
	ド(r),
	ド(l, 1, 120),
	ツ(r),
	ツ(l),
	ツ(r),
	ツ(l),
	ド(r, 1, 50),
	ド(l, 1, 80),
	ド(r, 0.5),
	ド(l, 0.5, 120),
];

const CRESCENDO_COURT: Word = [
	ツ(r),
	ツ(l),
	ド(r),
	ド(l, 1, 120),
	ツ(r),
	ツ(l),
	ド(r, 0.5),
	ド(l, 0.5, 120),
];

export const MONK: Song = {
	MONK: [
		[
			[_],
			[ヨ_ホ, ド_ド, ヨ_ホ, ドド],
			[ヨ_ホ, ド_ド, ヨ_ホ, ドド, [ホ()], ドド, _],
			[ド_コ_ド, ド_コ_ド, ド_コ_ド, [ド(r)], ドド],
			[_, ツ_ク, _, ツ_ク, _, ツ_ク, _, ドド],
			[_, ツ_ク, _, ツ_ク, _, ツ_ク, _, ドド],
			[_, ドド__ド, _, ドド__ド, _],
			[CRESCENDO_LONG, CRESCENDO_LONG],
			[CRESCENDO_COURT, CRESCENDO_COURT],
			[
				_,
				ドド,
				_,
				ドド,
				_,
				ドド,
				_,
				ドド,
				_,
				ドド,
				_,
				ドド,
				_,
				ドド,
				_,
				[ド(r, 0.5, 80), ド(l, 1, 150)],
			],
		],
	],
};
