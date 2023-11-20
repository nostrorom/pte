import { AUDIO } from '../audio';

export default await AUDIO.decodeAudioData(await (await fetch('/ka.wav')).arrayBuffer());
