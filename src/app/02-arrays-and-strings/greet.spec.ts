import { greet } from './greet';

describe('greet', () => {
    it('it should include the name in the message', () => {
        
        // Tests should not be fragile
        // expect(greet('TestName')).toBe('Welcome TestName');
        
        // This test is better as it is not fragile
        expect(greet('TestName')).toContain('TestName');
    });
});