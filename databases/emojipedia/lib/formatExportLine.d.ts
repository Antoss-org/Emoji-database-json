import { EmojiV1TechnicalInformation } from './types.js';
import 'unicode-emoji-json';

declare function formatExportLine({ currentCldrName, slug, title, }: Pick<EmojiV1TechnicalInformation, "currentCldrName" | "slug" | "title">): string;

export { formatExportLine };
