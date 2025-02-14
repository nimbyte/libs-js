import type { FactorialParams, FactorialResult } from "./types.ts";
import { factorialSync } from "./sync.ts";

addEventListener("message", (event: MessageEvent<FactorialParams>) => {
  const params: FactorialParams = event.data;
  const result: FactorialResult = factorialSync(params);
  postMessage(result);
});
