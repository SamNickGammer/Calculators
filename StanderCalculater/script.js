function valueButton(e) {
  display.value += e.value;
}
function Clear() {
  display.value = '';
}
function Calculate() {
  display.value = eval(display.value);
}
