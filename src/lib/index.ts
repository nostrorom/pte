export const AUDIO = new AudioContext();
export const GAIN = AUDIO.createGain();
GAIN.connect(AUDIO.destination);

export default { AUDIO, GAIN };
