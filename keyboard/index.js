/* eslint-disable no-console */

'use strict';

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

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
    const keyBtn = document.createElement('button');
    keyBtn.className = 'btn';
    keyBtn.innerText = el;
    keyboard.appendChild(keyBtn);
    //keyBtn.dataset.code = `${}`;
});

keyboard.addEventListener('click', e => {
    console.log(`This key ${e.code} (${e.key})`);
});

document.addEventListener('keydown', (event) => {
    const keyBtn = event.key;
  
    if (keyBtn === 'Control') {
      // not alert when only Control key is pressed.
      return;
    }
  
    if (event.ctrlKey) {
      // Хотя event.key это не 'Control' (например, нажата клавиша 'a'),
      // то всё же event.ctrlKey может быть true, если ударживается клавиша Ctrl.
      console.log(`Combination of ctrlKey + ${keyBtn}`);
    } else {
        console.log(`Key pressed ${keyBtn}`);
    }
  }, false);
  
  document.addEventListener('keyup', (event) => {
    const keyBtn = event.key;
  
    // Как только пользователь отпустит клавишу Ctrl, то она больше не будет активной.
    // Поэтому event.ctrlKey = false.
    if (keyBtn === 'Control') {
        console.log('Control key was released');
    }
  }, false);

  keyboard.addEventListener('click', (e) => {
    console.log(
      "Key Pressed: " + String.fromCharCode(e.code) + "\n"
      + "charCode: " + e.code + "\n"
      + "SHIFT key pressed: " + e.shiftKey + "\n"
      + "ALT key pressed: " + e.altKey + "\n"
    );
  });
  
  

// function init() {
//     let out = '';
//      // eslint-disable-next-line no-plusplus
//     for (let i = 0; i < keys.length; i++) {
//         if (i === 12 || i === 23) {
//             out += '<div class="clearfix"></div>';
//         }
//         out += '<div class="btn" data = "' + keys[i] + '" >'
//         + String.fromCharCode(keys[i]) + '</div>';
//     }
//     document.querySelector('.keyboard').innerText = out;
// }

// init();

// document.addEventListener('keydown', e => {
//     console.log(`This press ${e.code} (${e.key})`);
// });

// document.addEventListener('keyup', e => {
//     console.log(`This stop ${e.code} (${e.key})`);
// });

// keyboard.addEventListener('click', e => {
//     console.log(`This ${e.code} (${e.key})`);
// });



//if(obj[val]) else(e.toUpperCase)

// document.addEventListener('keydown', e => {
//     if (e.code === 'KeyZ' && (e.ctrlKey || e.metaKey)) {
//     console.log('Stop all');
//     }
// });

// document.addEventListener('keydown', e => {
//     console.log(`This ${e.code} (${e.key})`);
//     console.log(e.repeat);
// });

    // document.addEventListener('keydown', e => {
    //     console.log(e.code);
    //     console.log(e.key);
    //     document.querySelector('keyboard_key[data=", ' + e.key + ', "]').classList.add('active');
    // });

// eslint-disable-next-line func-names
// document.addEventListener('keydown', (e) => {
//         if (e.code == 'KeyZ' && (e.ctrlKey || e.metaKey)) {
//             alert('Отменить!');
//         }
//     });
