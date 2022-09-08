# Test project

This is a project to test the `solidity-comments` using every file of the [`smart-contract-sanctuary`](https://github.com/tintinweb/smart-contract-sanctuary).

It extracts the imports and version pragmas using both `solidity-comments` and `@solidity-parser/parser`, and compares the results.

## Installation

First, install this npm module:

```bash
yarn install
```

Then, build `solidity-comments` running this at the root of the repository:

```bash
yarn build
```

Finally, clone the `smart-contract-sanctuary`.

## Running the test

The test takes hours to complete, so it's recommended to run multiple workers.

You can run each of them with

```bash
yarn ts-node index.ts <path-to-sanctuary> <number-of-workers> <worker-id>
```

For example, you can run 4 workers with

```bash
yarn ts-node index.ts ../../../smart-contract-sanctuary 4 0 > errors.0.txt &
yarn ts-node index.ts ../../../smart-contract-sanctuary 4 1 > errors.1.txt &
yarn ts-node index.ts ../../../smart-contract-sanctuary 4 2 > errors.2.txt &
yarn ts-node index.ts ../../../smart-contract-sanctuary 4 3 > errors.3.txt &
```
