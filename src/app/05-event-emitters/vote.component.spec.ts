import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes = null;
    // since event emitters are observables, we can subscribe to them
    component.voteChanged.subscribe(newTotalVotes => totalVotes = newTotalVotes);
    
    component.upVote();
    
    // expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1);
  });
});