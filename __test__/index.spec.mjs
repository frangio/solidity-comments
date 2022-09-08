import test from "ava";

import { analyze } from "../index.js";

test("returns no comments", (t) => {
  t.deepEqual(
    analyze(`pragma solidity 1.2.3;`),
    {
      comments: [],
    }
  );
});

test("returns one comment", (t) => {
  t.deepEqual(
    analyze(`// abc`),
    {
      comments: [
        {
          start: 0,
          end: 6,
          text: '// abc',
        },
      ],
    }
  );
});

test("returns one comment until newline", (t) => {
  t.deepEqual(
    analyze(`
      // abc
      import "ok.sol";
      `),
    {
      comments: [
        {
          start: 7,
          end: 13,
          text: '// abc',
        },
      ],
    }
  );
});
