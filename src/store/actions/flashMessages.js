import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './types';

export function addFlashMessage(message) {
  // console.log(message);
  return {
    type: ADD_FLASH_MESSAGE,
    message,
  };
}

export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id,
  };
}