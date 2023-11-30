import type { Song } from '$lib/types';

import { ツ, ド, ホ, ヨ, _ } from '$lib';

const ヨ_ホ = [_(), ヨ(), ホ()];

const ド_ド = [ド(), ド(1, 130)];

const DO_ド = [ド(0.5, 80), ド(1, 130)];

const TSE_KE = [ツ(0.5), ツ()];

const DO_ド_SU_ド = [ド(0.5, 100), ド(0.5, 12), _(0.5), ド(1, 150)];

const DO_KO_ド = [ド(0.5), ド(0.5, 80), ド()];

const CRESCENDO_LONG = [
	ツ(),
	ツ(),
	ツ(),
	ツ(),
	ド(1, 50),
	ド(1, 80),
	ド(),
	ド(1, 120),
	ツ(),
	ツ(),
	ツ(),
	ツ(),
	ド(1, 50),
	ド(1, 80),
	ド(),
	ド(1, 120),
];

const CRESCENDO_COURT = [ツ(), ツ(), ド(), ド(1, 120), ツ(), ツ(), ド(0.5), ド(0.5, 120)];

const song: Song = [
	[[_()]],
	[ヨ_ホ, ド_ド, ヨ_ホ, DO_ド],
	[ヨ_ホ, ド_ド, ヨ_ホ, DO_ド, [ホ()], DO_ド, [_()]],
	[DO_KO_ド, DO_KO_ド, DO_KO_ド, [ド()], DO_ド],
	[[_()], TSE_KE, [_()], TSE_KE, [_()], TSE_KE, [_()], DO_ド],
	[[_()], TSE_KE, [_()], TSE_KE, [_()], TSE_KE, [_()], DO_ド],
	[[_()], DO_ド_SU_ド, [_()], DO_ド_SU_ド, [_()]],
	[CRESCENDO_LONG, CRESCENDO_LONG],
	[CRESCENDO_COURT, CRESCENDO_COURT],
	[
		[_()],
		DO_ド,
		[_()],
		DO_ド,
		[_()],
		DO_ド,
		[_()],
		DO_ド,
		[_()],
		DO_ド,
		[_()],
		DO_ド,
		[_()],
		DO_ド,
		[_(), ド(0.5, 80), ド(1, 150)],
	],
];

export default song;
