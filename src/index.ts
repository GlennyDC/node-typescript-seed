// Provide correct source map support for the tanspiled TS
import "source-map-support/register";

import { sleep } from "./utils";

(async (): Promise<void> => {
  await sleep(1000);
})();
