import type { FactorialParams, FactorialResult } from "./types.ts";

export function factorialSync({ n }: FactorialParams): FactorialResult {
  let bigN = typeof n === "number" ? BigInt(n) : n;
  let result = 1n;

  while (bigN > 0n) {
    result *= bigN;
    bigN--;
  }

  return { result };
}
