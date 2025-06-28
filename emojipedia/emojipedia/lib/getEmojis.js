import pThrottle from "p-throttle";
import { getEmoji } from "./getEmoji.js";
async function* getEmojis(slugs) {
  const throttle = pThrottle({ interval: 100, limit: 10 });
  const throttled = throttle(getEmoji);
  const pendingGetters = slugs.map(throttled);
  for (const getter of pendingGetters) {
    yield await getter;
  }
}
export {
  getEmojis
};
//# sourceMappingURL=getEmojis.js.map