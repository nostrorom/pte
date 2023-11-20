import { AUDIO } from '../audio';

export default await AUDIO.decodeAudioData(await (await fetch('/hop.wav')).arrayBuffer());
