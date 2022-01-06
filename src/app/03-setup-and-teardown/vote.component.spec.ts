import { VoteComponent } from './vote.component'; 

// describe('VoteComponent', () => {
//   it('it should increment totalVotes when upvoted', () => {
//     // Triple AAA structure (Arrange, Act, Assert)
//     // Arrange
//     const component = new VoteComponent();
//     // Act
//     component.upVote();
//     // Assert
//     expect(component.totalVotes).toBe(1);
//   });

//   it('it should decrement totalVotes when downvoted', () => {
//     // ALWAYS START WITH A CLEAN STATE (EACH TEST SHOULD RUN IN ISOLATION WITH AFFECTING OR BEING AFFECTED BY OTHER TESTS)
//     const component = new VoteComponent();
    
//     component.downVote();
    
//     expect(component.totalVotes).toBe(-1);
//   });
// });


describe('VoteComponent', () => {
  let component: VoteComponent;

  // ALWAYS START WITH A CLEAN STATE (EACH TEST SHOULD RUN IN ISOLATION WITH AFFECTING OR BEING AFFECTED BY OTHER TESTS)
  beforeEach(() => {
    // Arrange
    component = new VoteComponent();
  });

  afterEach(() => {
    // any clean up code after each test
    // (Set up code)
  });

  beforeAll(() => {
    // executed once before all tests
    // (Tear down code)
  });

  afterAll(() => {
    // executed once after all tests
  });

  it('it should increment totalVotes when upvoted', () => {
    // Act
    component.upVote();
    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('it should decrement totalVotes when downvoted', () => {
    // Act
    component.downVote();
    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});