import { RetrievedEmoji } from './getEmoji.js';
import './types.js';
import 'unicode-emoji-json';

declare function getEmojis(slugs: string[]): AsyncGenerator<RetrievedEmoji, void, unknown>;

export { getEmojis };
