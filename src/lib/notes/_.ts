import type { Note } from '$lib';

export default ((duration = 1) => ({ duration, type: 'silence' as const })) satisfies Note;
