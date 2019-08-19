import success from './successReducer';
import { actionTypes } from '../actions';

it("returns default initial state of 'false' when no action is passed", () => {
  const newState = success();
  expect(newState).toBe(false);
});

it("returns state of true upon receiving an action of type 'CORRECT_GUESS'", () => {
  const newState = success(undefined, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});
