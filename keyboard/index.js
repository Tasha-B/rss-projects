/* eslint-disable no-console */

'use strict';

const bodyElement = document.body;
const childs = bodyElement.childNodes;
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
console.log(childs);

const area = document.createElement('textarea');
area.classList.add('area');
area.placeholder = 'Oatmeal, sir!';
container.appendChild(area);
area.addEventListener('keydown', e => {
    console.log(e);
    if (e.code === 50) {
        e.preventDefault();
    }
    });

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
container.appendChild(keyboard);
keyboard.addEventListener('keydown', e => {
  console.log(e);
  if (e.code === 50) {
      e.preventDefault();
  }
  });

const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete',
'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
'ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'DEL',
'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'];

const keysShifted = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', 'DEL',
'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'Shift',
'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'];

const ruKeys = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'DEL',
'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift',
'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'];

const ruKeysShifted = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'Х', 'Ъ', 'DEL',
'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Ж', 'Э', 'Enter',
'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Б', 'Ю', ',', '▲', 'Shift',
'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'];

keys.forEach((el) => {
    let keyBtn = document.createElement('button');
    keyBtn.className = 'btn';
    keyBtn.innerText = el;
    //keyBtn.setAttribute('data-code', 'keyCodes[]');
    keyboard.appendChild(keyBtn);
  });

//------------------------------------------------------------

document.addEventListener('keydown', (e) => {
  const keyBtn = e.key;
  if (keyBtn === 'Control') {
    return;
  }
  if (e.ctrlKey) {
    console.log(`Combination of ctrlKey + ${e.code}`);
  } else {
    console.log(`Key pressed ${e.code} (${e.key})`);
  }
}, false);

document.addEventListener('keydown', (e) => {
  keys = document.querySelectorAll('.key');
  for (let i = 0; i < keys.length; i += 1) {
    if (keyboard.shift) {
      keys[i].textContent = keyboard.keysShifted[i];
    } else {
      keys[i].textContent = keyboard.down[i]; 
    };
  };
});


// function init() {
//     let out = '';
//     for (let i = 0; i < keys.length; i += 1) { 
//         out += '<div class="btn" data = "' + keys[i] + '" >'
//         + String.fromCharCode(keys[i]) + '</div>';
//     }
//     document.querySelector('.keyboard').innerText = out;
// }

// init();

document.addEventListener('keydown', e => {
  if (e.code === 'ShiftLeft' && (e.shiftKey)) {
  console.log('Stop all');
  keyBtn.innerText = keysShifted[j];
  }
});

document.addEventListener('keydown', e => {
    if (e.code === 'KeyZ' && (e.ctrlKey || e.metaKey)) {
    console.log('Stop all');
    }
});

document.addEventListener('keydown', e => {
     console.log(`This ${e.code} (${e.key})`);
    console.log(e.repeat);
});
