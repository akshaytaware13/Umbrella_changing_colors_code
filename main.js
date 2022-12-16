function calculate(columnFirst, columnSecond, columnThird) {
  var columnFirst = document.getElementById('firstColumn').value;
  var columnSecond = document.getElementById('secondColumn').value;
  var columnThird = document.getElementById('thirdColumn').value;
  var columnFourth = document.getElementById('fourthColumn').value;
  var wynik;

  if (columnThird == 0) {
    wynik = parseInt(columnFirst) + parseInt(columnSecond);
  } else {
    wynik = (parseInt(columnFirst) + parseInt(columnSecond)) * parseInt(columnThird);
  }
  return wynik;
}

let select = document.querySelectorAll("select");


select.forEach(function (element,) {
  element.addEventListener("change", function () {
    // console.log(this)
    let listOption = this.options[this.selectedIndex].id;
    this.style.backgroundColor = listOption;
    if (listOption == "black" || listOption == "blue") {
      this.style.color = "white";
    } else {
      this.style.color = "black";
    }
    showResult();

  })
})

function myFunction(color) {

  switch (color) {
   
    case 1: document.getElementById("color_box").style.backgroundColor = "green";
      break;
    case 2: document.getElementById("color_box").style.backgroundColor = "red";
      break;
    case 3: document.getElementById("color_box").style.backgroundColor = "silver";
      break;
    case 4: document.getElementById("color_box").style.backgroundColor = "blue";
      break;
    case 5: document.getElementById("color_box").style.backgroundColor = "skyblue";
      break;
    case 6: document.getElementById("color_box").style.backgroundColor = "yellow";
      break;
    default: "Invalid Color";
  }

}


function showResult() {
  let calculationResult = calculate();
  let columnFourth = document.getElementById('select').value;
  let digitCount = calculationResult.toString().length;
  if (digitCount >= 4 && digitCount < 8) {
    document.getElementById("result").innerHTML = "Result is: " + calculate() / 1000 + " kOhms and the tolerance is: " + columnFourth + "%";
  } else if (digitCount >= 7 && digitCount <= 9) {
    document.getElementById("result").innerHTML = "Result is: " + calculate() / 1000000 + " MOhms and the tolerance is: " + columnFourth + "%";
  } else {
    document.getElementById("result").innerHTML = "Result is: " + calculate() + " Ohms and the tolerance is: " + columnFourth + "%";
  }
}
