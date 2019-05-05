import { combineReducers } from 'redux';

import gameConstants from '../gameConstants.js';
import * as actions from '../actions/index.js';

const { pixelsToMove } = gameConstants;

function gameStatus(state = 'IDLE', action) {
	switch (action.type) {
  	case actions.START_GAME:
    case actions.RUNNING_GAME:
      return 'PLAYING';
  	case actions.GAME_OVER:
  		return 'GAME_OVER';
  	default:
  		return state;
	}
}

function currentCharacter(state = {}, action) {
	switch (action.type) {
	case actions.START_GAME:
		return {
			offsetX: 0,
		};
	case actions.MOVE_RIGHT:
		return Object.assign({}, state, { offsetX: state.offsetX + pixelsToMove });
	case actions.MOVE_LEFT:
		return Object.assign({}, state, { offsetX: state.offsetX - pixelsToMove });
	default:
		return state;
	}
}

const hachuApp = combineReducers({
	gameStatus,
  currentCharacter,
});

export default hachuApp;
