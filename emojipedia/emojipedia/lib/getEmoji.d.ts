import { EmojiV1TechnicalInformation } from './types.js';
import 'unicode-emoji-json';

type RetrievedEmoji = RetrievedEmojiMissing | RetrievedEmojiSuccess;
interface RetrievedEmojiBase {
    slug: string;
}
interface RetrievedEmojiMissing extends RetrievedEmojiBase {
    found: false;
}
interface RetrievedEmojiSuccess extends RetrievedEmojiBase {
    found: true;
    info: EmojiV1TechnicalInformation;
}
declare function getEmoji(slug: string): Promise<RetrievedEmoji>;

export { type RetrievedEmoji, type RetrievedEmojiBase, type RetrievedEmojiMissing, type RetrievedEmojiSuccess, getEmoji };
