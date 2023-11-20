// type Pretty<T> = { [K in keyof T]: T[K] } & // eslint-disable-next-line @typescript-eslint/ban-types
// {};

export const AUDIO = new AudioContext();
export const GAIN = AUDIO.createGain();
GAIN.connect(AUDIO.destination);

export default { AUDIO, GAIN };
