import assert from 'node:assert';
import { describe, it } from 'node:test';
import { average, sum } from '../src/index.js';

describe('sum', () => {
  it('should sum all numbers', () => {
    assert.strictEqual(sum([1, 2, 3, 4]), 10);
  });

  it('should return 0 for empty array', () => {
    assert.strictEqual(sum([]), 0);
  });
});

describe('average', () => {
  it('should calculate average', () => {
    assert.strictEqual(average([1, 2, 3, 4]), 2.5);
  });
});
