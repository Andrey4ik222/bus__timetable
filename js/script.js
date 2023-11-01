const transport = [
  {
    name: "Bus",
    number: 146,
    direction: "Falenica",
    time: ["6:15", "6:45", "7:15", "7:45", "8:45"],
  },
  {
    name: "Bus",
    number: 144,
    direction: "Falenica",
    time: ["6:15", "6:45", "7:15", "7:45", "8:45"],
  },
  {
    name: "Tram",
    number: 1,
    direction: "Banacha",
    time: [
      "6:11",
      "6:31",
      "6:51",
      "7:11",
      "7:31",
      "7:51",
      "8:01",
      "8:21",
      "8:41",
    ],
  },
  {
    name: "Metro",
    number: 1,
    direction: "Kabaty",
    time: [
      "5:00 - 6:53 (every 9 min)",
      "6:54 - 21:11 (every 6 min)",
      "21:12 - 23:10 (every 7 min)",
      "23:11 - 0:10 (every 8 min)",
    ],
  },
];
const footerList = document.querySelectorAll(".footer-list")[0];

const btnBus = document.querySelectorAll(".button__bus")[0];
const btnTram = document.querySelectorAll(".button__tram")[0];
const btnMetro = document.querySelectorAll(".button__metro")[0];

const numberTransport = document.querySelectorAll(".number-transport")[0];

function showBus(event) {
  numberTransport.innerHTML = "";

  transport.forEach(({ name, number }) => {
    if (name === "Bus") {
      const buttonNumber = document.createElement("button");
      buttonNumber.classList.add("number-transport__button");
      buttonNumber.innerHTML = number;
      numberTransport.append(buttonNumber);
    }
  });
}

function showTram(event) {
  numberTransport.innerHTML = "";

  transport.forEach(({ name, number }) => {
    if (name === "Tram") {
      const buttonNumber = document.createElement("button");
      buttonNumber.classList.add("number-transport__button");
      buttonNumber.innerHTML = number;
      numberTransport.append(buttonNumber);
    }
  });
}

function showMetro(event) {
  numberTransport.innerHTML = "";

  transport.forEach(({ name, number }) => {
    if (name === "Metro") {
      const buttonNumber = document.createElement("button");
      buttonNumber.classList.add("number-transport__button");
      buttonNumber.innerHTML = number;
      numberTransport.append(buttonNumber);
    }
  });
}
btnBus.addEventListener("click", showBus);
btnTram.addEventListener("click", showTram);
btnMetro.addEventListener("click", showMetro);
