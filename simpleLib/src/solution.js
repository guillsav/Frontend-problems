import './style.css';

document.getElementById('app').innerHTML = `
<h1>SimpleLib</h1>
<div>
  Use SimpleLib to change the color of the text or the color of the box.
</div>
`;

class SimpleLib {
    addClass(name) {
        if (this.elem) {
            this.elem.classList.add(name);
        }
        return this;
    }

    removeClass(name) {
        if (this.elem) {
            this.elem.classList.remove(name);
        }
        return this;
    }
    constructor(element) {
        this.elem = element;

        return selector => {
            this.elem = document.querySelector(selector);

            return {
                elem: this.elem,
                addClass: this.addClass,
                removeClass: this.removeClass
            };
        };
    }
}

const _$ = new SimpleLib();
_$('.hello').addClass('dark');
_$('.world').addClass('bg-green');
