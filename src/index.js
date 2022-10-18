import "./styles/index.css";

const data = [
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
  },
  {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
  },
];

const imcResult = document.getElementById("container-result");
const imcCalc = document.getElementById("container-calc");
const imcDivHide = document.getElementById("result-classification");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calcBtn = document.getElementById("calc");
const clearBtn = document.getElementById("clear");
const numberImc = document.querySelector("#number-imc span");
const infoImc = document.querySelector("#info-imc span");
const backBtn = document.getElementById("back");

function classificationData(data) {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("table-data");
    const classification = document.createElement("p");
    classification.innerText = item.classification;
    const info = document.createElement("p");
    info.innerText = item.info;
    const obesity = document.createElement("p");
    obesity.innerText = item.obesity;
    div.appendChild(classification);
    div.appendChild(obesity);
    div.appendChild(info);
    imcDivHide.appendChild(div);
  });
}

function clearInputs() {
  heightInput.value = "";
  weightInput.value = "";
  numberImc.className = "";
  infoImc.className = "";
}

function validDigits(text) {
  return text.replace(/[^0-9,]/g, "");
}

function calcImc(weightInput, heightInput) {
  const imc = weightInput / (heightInput * heightInput);
  return imc.toFixed(1);
}

function showResults() {
  imcCalc.classList.toggle("hide");
  imcResult.classList.toggle("hide");
}

classificationData(data);

[heightInput, weightInput].forEach((el) => {
  el.addEventListener("input", (e) => {
    const updateValue = validDigits(e.target.value);
    e.target.value = updateValue;
  });
});

clearBtn.addEventListener("click", clearInputs);

calcBtn.addEventListener("click", (el) => {
  el.preventDefault();
  const weight = +weightInput.value.replace(",", ".");
  const height = +heightInput.value.replace(",", ".");

  if (!weightInput || !heightInput) return;

  const imc = calcImc(weight, height);

  let info;
  data.forEach((item) => {
    if (imc > item.min && imc < item.max) {
      info = item.info;
    }
  });

  if (!info) return;

  numberImc.innerText = imc;
  infoImc.innerText = info;

  switch (info) {
    case "Magreza":
      numberImc.classList.add("low");
      infoImc.classList.add("low");
      break;
    case "Normal":
      numberImc.classList.add("good");
      infoImc.classList.add("good");
      break;
    case "Sobrepeso":
      numberImc.classList.add("low");
      infoImc.classList.add("low");
      break;
    case "Obesidade":
      numberImc.classList.add("medium");
      infoImc.classList.add("medium");
      break;
    case "Obesidade grave":
      numberImc.classList.add("high");
      infoImc.classList.add("high");
      break;
  }
  showResults();
});

backBtn.addEventListener("click", () => {
  clearInputs();
  showResults();
});
