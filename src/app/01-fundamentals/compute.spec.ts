import { compute } from './compute';

/**
 * describe() // describes a suite of tests (a group of related tests)
 * it()       // describes a spec or a test
 */

describe('compute', () => {
    it('Should return 0 if input is negative', () => {
        expect(compute(-1)).toBe(0);
    });

    it('Should return increment if input is positive', () => {
        expect(compute(5)).toBe(6);
    });
});