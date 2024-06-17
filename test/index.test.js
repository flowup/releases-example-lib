import assert from 'node:assert';
import { describe, it } from 'node:test';
import { average, sort, sum } from '../src/index.js';

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

  it('should throw for empty array', () => {
    assert.throws(
      () => average([]),
      'Cannot calculate average for empty array'
    );
  });
});

describe('sort', () => {
  it('should sort numbers in ascending order by default', () => {
    assert.deepEqual(sort([4, 2, 1, 3]), [1, 2, 3, 4]);
  });

  it('should sort numbers in descending order if specified', () => {
    assert.deepEqual(sort([4, 2, 1, 3], 'desc'), [4, 3, 2, 1]);
  });
});
