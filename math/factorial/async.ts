import { MathWorker } from "../math-worker.ts";
import type { FactorialParams, FactorialResult } from "./types.ts";

/**
 * Computes the factorial of a given number using either synchronous or asynchronous execution.
 *
 * - `factorialSync({ n: number | bigint }): { result: bigint }` - Synchronously computes the factorial.
 * - `factorial({ n: number | bigint }): Promise<{ result: bigint }>` - Asynchronously computes the factorial using a Web Worker.
 *
 * @param {{ n: number | bigint }} params - An object containing the number for which to compute the factorial. Accepts both number and bigint.
 * @returns {{ result: bigint }} - An object containing the factorial result as a `bigint`.
 *
 * @example
 * ```ts
 * import { factorialSync, factorial } from "@nimbyte/math";
 *
 * console.log(factorialSync({ n: 10 })); // { result: 3628800n }
 *
 * factorial({ n: 10 }).then(console.log); // { result: 3628800n }
 * ```
 */
export function factorial(params: FactorialParams): Promise<FactorialResult> {
  const workerURL = new URL("worker.ts", import.meta.url);
  const worker = new MathWorker<FactorialParams, FactorialResult>(workerURL, {
    type: "module",
  });
  return worker.run(params);
}
