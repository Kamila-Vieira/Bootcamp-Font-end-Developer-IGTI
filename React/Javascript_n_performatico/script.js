window.addEventListener("load", start);

var clickArray = [];

function start() {
  const button = document.querySelector("#clickButton");
  button.addEventListener("click", handleButtonClick);
}

function handleButtonClick() {
  clickArray.push(formatedDate());
  showList();
}

function showList() {
  var list = document.querySelector("#listContainer");
  list.innerHTML = "";
  var item = "";
  for (let index = 0; index < clickArray.length; index++) {
    item += `<li>${clickArray[index]}</li>`;
  }
  list.innerHTML = item;
  document.title = clickArray.length;
}

function letPad(value, count = 2, char = "0") {
  var stringValue = value.toString();
  var newValue = value;
  if (stringValue.length < count) {
    for (var i = 0; i < count - stringValue.length; i++) {
      newValue = char + stringValue;
    }
  }
  return newValue;
}

function formatedDate() {
  var now = new Date();
  var result = "";
  result += letPad(now.getDate());
  result += "/";
  result += letPad(now.getMonth() + 1);
  result += "/";
  result += now.getFullYear();
  result += " ";
  result += letPad(now.getHours());
  result += ":";
  result += letPad(now.getMinutes());
  result += ":";
  result += letPad(now.getSeconds());
  result += ".";
  result += letPad(now.getMilliseconds(), 3);

  return result;
}
