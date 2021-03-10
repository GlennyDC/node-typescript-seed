// Provide correct source map support for the tanspiled TS
import "source-map-support/register";

import { sleep, sum } from "./utils";

(async (): Promise<void> => {
  await sleep(1000);
  console.log(sum(1, 3));
})();
