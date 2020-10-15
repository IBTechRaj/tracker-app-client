import * as actions from '../store/actions/flashMessages';
import * as types  from '../store/actions/types';

describe('actions', () => {
  it('should create an action to flash a message', () => {
    const message = 'Redux testing'
    const expectedAction = {
      type: 'ADD_FLASH_MESSAGE',
      message
    }
    expect(actions.addFlashMessage(message)).toEqual(expectedAction)
  })
})