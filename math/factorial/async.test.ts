import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { factorial } from "./mod.ts";

describe("factorial", () => {
  it("works with number inputs", async () => {
    const n = 5;
    const { result } = await factorial({ n });
    expect(result).toBe(120n);
  });

  it("works with bigint inputs", async () => {
    const n = 5n;
    const { result } = await factorial({ n });
    expect(result).toBe(120n);
  });
});
