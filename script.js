// Threes Spawning Algorithm

// General Spawning
// Starting from before the 9 start tiles are added, there is a deck of 12 cards. That deck contains 4 1s, 4 2s, and 4 3s (the 9 start tiles take from the deck). Every move, one of the cards in the deck is chosen and placed onto the board. That card is not replaced. When the whole deck becomes empty, then a new deck will be generated that contains 4 1s, 4 2s, and 4 3s. When a card in the deck is placed down on the board, it can only spawn on the opposite side that moved (eg, you move left then it spawns on the right column) AND it can only spawn a row/column that had tiles that were moved.

// Bonus Spawning
// The bonus cards are part of a separate deck. Bonus spawns will range from 6 to 1/8th of the highest tile on the board. Essentially, bonus spawns won't come until your high card is 48. When your high card is 48, the only bonus spawn you can get is 6. When it is 96, you can get 6 and 12. When it is 192, you can get 6, 12, and 24. And so on. But here is where things get complicated. As soon as the game starts, there is a set of 21 moves. In each set of 21 moves, only one bonus spawn can occur. This means that it is impossible for 3 bonus spawns to occur in a row. In addition, for two bonus spawns in a row to happen, the first must be at the end of a set of 21 moves and the second at the beginning of the new set. In the "next" tile at the top, it will show the bonus spawn next, but in a set of 3. When your high card is 48, it can only show 6. When it is 96, it can only show 6 and 12. When it is 192, it can only show 6, 12, and 24. But past that, there are more than 3 in the bonus card deck. For that, three adjacent tiles will be picked randomly and displayed. Then one of them is picked to spawn. It is important that the set of 3 is determined first, then the card is picked from that set of 3. Also, with the 21 card set, the first 21 card set cannot have any bonus cards. After that set, if the high card is less than 48 then the following 21 card set will not have a bonus spawn. If it is then that and the following sets will have spawns.

var currentSet = 0;
var numMoves = 0;
var hasBonusSpawns = false;
var currentTile = 24;

function step() {
  numMoves += 1;
  if (numMoves % 21 == 0) {
    currentSet += 1;
    currentTile += 6;
  }

  if ((currentSet >= 1) && (currentTile >= 48)) {
     hasBonusSpawns = true;
  }
}