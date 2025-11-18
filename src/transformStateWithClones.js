'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const results = [];

  const newState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProperties(newState, action.extraData);
        results.push({ ...newState });
        break;

      case 'removeProperties':
        removeProperties(newState, action.keysToRemove);
        results.push({ ...newState });
        break;

      case 'clear':
        clearProperties(newState);
        results.push({ ...newState });
        break;
    }
  }

  return results;
}

function addProperties(state, extraData) {
  Object.assign(state, extraData);
}

function removeProperties(state, keysToRemove) {
  for (const key of keysToRemove) {
    delete state[key];
  }
}

function clearProperties(state) {
  for (const key in state) {
    delete state[key];
  }
}
module.exports = transformStateWithClones;
