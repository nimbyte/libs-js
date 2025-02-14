# @nimbyte/math

A high-performance math library for Deno, featuring Web Worker support for asynchronous computations.

## Features

- **Synchronous & Asynchronous Support** – Compute factorials either on the main thread or using Web Workers.
- **BigInt Support** – Works with large numbers beyond JavaScript's `Number.MAX_SAFE_INTEGER`.
- **Extensible** – More math functions coming soon!

## Installation

```sh
deno add jsr:@nimbyte/math
```

## Usage

### Compute Factorial

#### Asynchronous (Uses Web Workers)

```ts
import { factorial } from "@nimbyte/math";

const { result } = await factorial({ n: 5 });
console.log(result);
// Output: 120n
```

#### Synchronous

```ts
import { factorialSync } from "@nimbyte/math";

const { result } = factorialSync({ n: 5 });
console.log(result);
// Output: 120n
```

## API

### `factorial(n: number | bigint): Promise<{ result: bigint }>`

Computes the factorial asynchronously using a Web Worker.

### `factorialSync(n: number | bigint): { result: bigint }`

Computes the factorial synchronously on the main thread.

## Roadmap

- More math functions (e.g., `gcd`, `lcm`, `power`, `modInverse`)
- Performance optimizations
- Additional number theory utilities

## License

MIT
