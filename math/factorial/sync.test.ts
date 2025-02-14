import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { factorialSync } from "./mod.ts";

describe("factorialSync", () => {
  it("works with number inputs", () => {
    const n = 5;
    const { result } = factorialSync({ n });
    expect(result).toBe(120n);
  });

  it("works with bigint inputs", () => {
    const n = 5n;
    const { result } = factorialSync({ n });
    expect(result).toBe(120n);
  });
});
