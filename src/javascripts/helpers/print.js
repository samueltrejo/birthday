const printToDom = (id, printText) => {
  const div = document.getElementById(id);
  div.innerHTML = printText;
};

export default { printToDom };
