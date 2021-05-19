import { alert, Stack } from '@pnotify/core';

const myStack = new Stack({
  dir1: 'up',
  maxOpen: 1,
  context: document.querySelector('.err-message'),
});

export default function alertMessage(typeMessage, textMessage) {
  return alert({
    text: textMessage,
    icon: false,
    stack: myStack,
    type: typeMessage,
    delay: 500,
    mouseReset: false,
    closer: false,
    sticker: false,
    closerHover: false,
    stickerHover: false,
  });
}
