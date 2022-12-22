let item = document.getElementsByClassName('item');
let input = document.getElementsByClassName('input')[0];
let list = document.getElementsByClassName('list')[0];
input.addEventListener('input', (e) => {
  let inputValue = e.target.value;
  let passwordValidationConditions = [];
  let num = 0;
  passwordValidationConditions.push(/.{8}/.test(inputValue));
  passwordValidationConditions.push(/\d/.test(inputValue));
  passwordValidationConditions.push(/[A-Z]/.test(inputValue));
  passwordValidationConditions.push(/[a-z]/.test(inputValue));
  passwordValidationConditions.push(/\W/.test(inputValue));
  input.classList.add('input-active');
  passwordValidationConditions.forEach((el, id) => {
    if (el) {
      item[id].classList.add('item-valid');
      num++;
      console.log(num)
    } else {
      item[id].classList.remove('item-valid');
    }
    if (num === item.length) {
      input.classList.add('input-valid')
      list.classList.add('list-valid')
    }
  })
})

