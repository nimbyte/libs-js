/**
 * @module @nimbyte/math
 *
 * A math utility library for Deno that provides various mathematical functions.
 * Supports both synchronous and asynchronous computations using Web Workers.
 *
 * Features:
 * - Factorial calculations (sync and async)
 * - Future support for prime checks, GCD, and more
 *
 * @example
 * ```ts
 * import { factorial } from "@nimbyte/math";
 *
 * const { result } = await factorial({ n: 5 });
 * ```
 */

export * from "./factorial/mod.ts";
