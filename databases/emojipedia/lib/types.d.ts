import * as unicode_emoji_json from 'unicode-emoji-json';

type UnicodeEmojiJson = typeof unicode_emoji_json;
type UnicodeEmojiEntry = UnicodeEmojiJson[keyof UnicodeEmojiJson];
interface EmojiV1TechnicalInformation {
    alsoKnownAs: string[];
    appleName: string;
    code: string;
    codepointsHex: string[];
    components: EmojiComponent[];
    currentCldrName: null | string;
    description: string;
    emojiVersion: EmojiVersion;
    id: string;
    shortcodes: EmojiShortcode[];
    slug: string;
    title: string;
    type: string;
    version: EmojiVersion;
}
interface EmojiComponent {
    alsoKnownAs: string[];
    appleName: string;
    code: string;
    codepointsHex: string[];
    currentCldrName: string;
    description: string;
    id: string;
    shortcodes: ComponentShortcode[];
    slug: string;
    title: string;
}
interface ComponentShortcode {
    code: string;
    vendor: ComponentVendor;
}
interface ComponentVendor {
    slug: string;
    title: string;
}
interface EmojiShortcode {
    code: string;
    source: string;
    vendor: EmojiVendor;
}
interface EmojiVendor {
    slug: string;
    title: string;
}
interface EmojiVersion {
    date: number;
    name: string;
    slug: string;
    status: number;
}
interface EmojiVersion {
    date: number;
    description: string;
    name: string;
    slug: string;
    status: number;
}

export type { ComponentShortcode, ComponentVendor, EmojiComponent, EmojiShortcode, EmojiV1TechnicalInformation, EmojiVendor, EmojiVersion, UnicodeEmojiEntry, UnicodeEmojiJson };
