import { describe, it, expect } from 'vitest';
import * as id3 from '../src/index';

describe('id3-wasm', () => {
  it('should export hasId3v2Tag function', () => {
    expect(id3.hasId3v2Tag).toBeInstanceOf(Function);
  });
});
