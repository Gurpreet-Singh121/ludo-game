import Types from '../actions/actionTypes';
import { setColours } from '../utils/moveSeed';

// movesLeft here is minimum number of moves needed to finish after coming out of the house.
const initialState = {
  houseOneCards: {
    'H1-C1': { position: 'HL-01', movesLeft: 56 },
    'H1-C2': { position: 'still', movesLeft: 56 },
    'H1-C3': { position: 'HL-14', movesLeft: 2 },
    'H1-C4': { position: 'still', movesLeft: 56 },
    'H1-Colour': 'blue'
  },
  houseTwoCards: {
    'H2-C1': { position: 'VT-12', movesLeft: 56 },
    'H2-C2': { position: 'still', movesLeft: 56 },
    'H2-C3': { position: 'VT-41', movesLeft: 2 },
    'H2-C4': { position: 'still', movesLeft: 56 },
    'H2-Colour': 'red'
  },
  houseThreeCards: {
    'H3-C1': { position: 'VB-40', movesLeft: 56 },
    'H3-C2': { position: 'still', movesLeft: 56 },
    'H3-C3': { position: 'VB-11', movesLeft: 2 },
    'H3-C4': { position: 'still', movesLeft: 56 },
    'H3-Colour': 'yellow'
  },
  houseFourCards: {
    'H4-C1': { position: 'HR-24', movesLeft: 56 },
    'H4-C2': { position: 'still', movesLeft: 56 },
    'H4-C3': { position: 'HR-11', movesLeft: 2 },
    'H4-C4': { position: 'still', movesLeft: 56 },
    'H4-Colour': 'green'
  },
  playerTurn: 'P1',
};



export default function gameData(state = initialState, action) {
  switch (action.type) {
    case Types.SET_COLOURS:
      return setColours(state, action);
    case Types.MOVE_SEED_TO_POSITION:
      return Object.assign({}, state, action.seedGroup);
    default:
      return state;
  }
}
