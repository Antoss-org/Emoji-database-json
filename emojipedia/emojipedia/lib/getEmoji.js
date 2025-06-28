import { gql, request } from "graphql-request";
import { getEmojipediaSlug } from "./getEmojipediaSlug.js";
async function getEmoji(slug) {
  try {
    const emojipediaSlug = getEmojipediaSlug(slug);
    return {
      found: true,
      info: await getTechnicalInformation(emojipediaSlug),
      slug: emojipediaSlug
    };
  } catch {
    return {
      found: false,
      slug
    };
  }
}
async function getTechnicalInformation(slug) {
  const response = await request(
    "https://emojipedia.org/api/graphql",
    gql`
			query ($slug: Slug!, $lang: Language) {
				emoji_v1(slug: $slug, lang: $lang) {
					...emojiDetailsResource
				}
			}

			fragment shortCodeResource on Shortcode {
				code
				vendor {
					slug
					title
				}
			}

			fragment emojiResource on Emoji {
				alsoKnownAs
				appleName
				code
				codepointsHex
				currentCldrName
				description
				id
				modifiers
				slug
				shortcodes {
					...shortCodeResource
				}
				title
			}

			fragment emojiDetailsResource on Emoji {
				...emojiResource
				components {
					...emojiResource
				}
				emojiVersion {
					date
					name
					slug
					status
				}
				shortcodes {
					code
					source
					vendor {
						slug
						title
					}
				}
				type
				version {
					date
					description
					name
					slug
					status
				}
			}
		`,
    { lang: "EN", slug }
  );
  return response.emoji_v1;
}
export {
  getEmoji
};
//# sourceMappingURL=getEmoji.js.map