<script lang="ts">
	import { AUDIO, GAIN } from '$lib';

	import don from '$lib/don';
	import ka from '$lib/ka';

	const tempo = 120;

	function play(buffer: AudioBuffer, vol: number, start: number) {
		const startTime = AUDIO.currentTime + start;
		const source = AUDIO.createBufferSource();
		source.buffer = buffer;

		const localGAIN = AUDIO.createGain();
		localGAIN.gain.setValueAtTime(vol / 100, startTime);
		localGAIN.gain.exponentialRampToValueAtTime(0.001, startTime - 0.1);

		source.connect(GAIN);
		source.start(startTime);
	}

	function getSound(n: typeof KA | typeof DON) {
		return n === DON ? don.buffer : ka.buffer;
	}

	class Tone {
		sound: AudioBuffer;
		val: number;
		vol: number;

		constructor(sound: typeof KA | typeof DON, val: number = 1, vol: number = 100) {
			this.sound = getSound(sound);
			this.val = val;
			this.vol = vol;
		}
	}

	let currentTime = 0;

	$: console.log(currentTime);

	function playSong(song: Note[]) {
		currentTime = 0;
		song.forEach((note: Note) => {
			const { sound, val, vol } = new Tone(...note);

			play(sound, vol, currentTime);

			currentTime += (val / tempo) * 60;
		});
	}

	const KA = 'ka';
	const DON = 'don';

	type Note = [typeof KA | typeof DON, val?: number, vol?: number];

	const DO_KO_DON: Note[] = [[DON, 0.5], [DON, 0.5], [DON]];
	const DODON: Note[] = [
		[DON, 0.5],
		[DON, 0.5]
	];

	const YOHAP: Note[] = [[KA], [KA], [DON], [DON], [KA], [KA]];

	const MONK: Note[] = [
		...YOHAP,
		[DON, 0.5],
		[DON],
		...YOHAP,
		...DODON,
		[KA],
		[DON, 0.5],
		[DON, 1],
		...DO_KO_DON,
		...DO_KO_DON,
		...DO_KO_DON,
		[DON],
		...DODON
	];
</script>

<div class="flex flex-col p-12 gap-y-12">
	<button
		class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
		on:click={() => {
			playSong(MONK);
		}}
	>
		MONK
	</button>
	<button
		class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
		on:click={() => {
			playSong(MONK);
		}}
	>
		KIHON
	</button>
</div>
