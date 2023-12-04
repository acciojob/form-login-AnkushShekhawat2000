function getFormvalue() {
  // Write your code here
  let x = document.getElementById("form1");
  let name = "";

  for (let i = 0; i < x.length; i++) {
    if (x.elements[i].type !== "submit") {
      name += x.elements[i].value + " ";
    }
  }

  alert(name.trim());
}
