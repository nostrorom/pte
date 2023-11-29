import type { Song } from '$lib/types';

import { ツ, ド, ホ, ヨ, _ } from '$lib';

const ヨ_ホ = [_(), ヨ(), ホ()];

const DON_DON = [ド(), ド(1, 130)];

const DO_DON = [ド(0.5, 80), ド(1, 130)];

const TSE_KE = [ツ(0.5), ツ()];

const DO_DO_SU_DO = [ド(0.5, 100), ド(0.5, 12), _(0.5), ド(1, 150)];

const DO_KO_DON = [ド(0.5), ド(0.5, 80), ド()];

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
	[ヨ_ホ, DON_DON, ヨ_ホ, DO_DON],
	[ヨ_ホ, DON_DON, ヨ_ホ, DO_DON, [ホ()], DO_DON, [_()]],
	[DO_KO_DON, DO_KO_DON, DO_KO_DON, [ド()], DO_DON],
	[[_()], TSE_KE, [_()], TSE_KE, [_()], TSE_KE, [_()], DO_DON],
	[[_()], TSE_KE, [_()], TSE_KE, [_()], TSE_KE, [_()], DO_DON],
	[[_()], DO_DO_SU_DO, [_()], DO_DO_SU_DO, [_()]],
	[CRESCENDO_LONG, CRESCENDO_LONG],
	[CRESCENDO_COURT, CRESCENDO_COURT],
	[
		[_()],
		DO_DON,
		[_()],
		DO_DON,
		[_()],
		DO_DON,
		[_()],
		DO_DON,
		[_()],
		DO_DON,
		[_()],
		DO_DON,
		[_()],
		DO_DON,
		[_(), ド(0.5, 80), ド(1, 150)],
	],
];

export default song;
