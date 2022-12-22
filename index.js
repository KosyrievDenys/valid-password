let item = document.getElementsByClassName('item');
let input = document.getElementsByClassName('input')[0];
let list = document.getElementsByClassName('list')[0];
input.addEventListener('input', (e) => {
  let inputValue = e.target.value;
  let isValid = [];
  let num = 0;
  isValid.push(/.{8}/.test(inputValue));
  isValid.push(/\d/.test(inputValue));
  isValid.push(/[A-Z]/.test(inputValue));
  isValid.push(/[a-z]/.test(inputValue));
  isValid.push(/\W/.test(inputValue));
  input.classList.add('input-active')
  if (inputValue.length === 0) input.classList.add('input-empty');
  else input.classList.remove('input-empty');
  isValid.forEach((el, id) => {
    if (el) {
      item[id].classList.add('item-valid');
      num++;
    } else {
      item[id].classList.remove('item-valid');
    }
    if (num === item.length) {
      input.classList.add('input-valid')
      list.classList.add('list-valid')
    } else {
      input.classList.remove('input-valid');
      list.classList.remove('list-valid');
    }
  })
})

