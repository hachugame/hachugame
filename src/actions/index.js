
export const START_GAME = 'START_GAME';
export const RUNNING_GAME = 'RUNNING_GAME';
export const STOP_GAME = 'STOP_GAME';
export const GAME_OVER = 'GAME_OVER';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const MOVE_LEFT = 'MOVE_LEFT';
export const ADD_SCORE = 'ADD_SCORE';
export const ADD_FALLER = 'ADD_FALLER';
export const MOVE_FALLER = 'MOVE_FALLER';

export const gameOver = () => ({
	type: GAME_OVER,
});
export const moveRight = () => ({
	type: MOVE_RIGHT,
});
export const moveLeft = () => ({
	type: MOVE_LEFT,
});
export const moveCharacter = (direction) => (
  function (dispatch, getState) {
    const { gameStatus } = getState();

    const collisionCheck = false;

    if (gameStatus === 'GAME_OVER') {
      return;
    }

    switch (direction) {
      case 'left':
        if (collisionCheck === false) {
          dispatch(moveLeft());
        }
        return;
      case 'right':
        if (collisionCheck === false) {
          dispatch(moveRight());
        }
        return;
      default:
        return;
    }
  }
);
