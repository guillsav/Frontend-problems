import './style.css';

document.getElementById('app').innerHTML = `
<h1>Simple Lib</h1>
<div>
  Use SimpleLib to change the color of the text or the color of the box.
</div>
`;

class SimpleLib {
    // Your code goes here.
}

// Tests
const _$ = new SimpleLib();

_$('.hello')
    .addClass('dark')
    .removeClass('bold');

_$('.world').addClass('bg-green');
