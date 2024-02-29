const battery = document.querySelector(".battery");
const showPower = document.querySelector("h3");
const liquidBattery = document.querySelector(".liquid");
const chargingElm = document.querySelector(".charging");

window.onload = () => {
  if (navigator.getBattery) {
    window.navigator.getBattery().then((batteryInfo) => {
      getbatteryInfo(batteryInfo);
    });
  }
};
function getbatteryInfo(i) {
  isChar();
  i.addEventListener("chargingchange", () => {
    isChar();
  });
  let power = i.level * 100;
  let statusColor;
  if (power > 80 && power) {
    statusColor = "#71fb85";
  } else if (power >= 50 && power < 80) {
    statusColor = "#fbf271";
  } else if (power >= 20 && power < 50) {
    statusColor = "#fba471";
  } else {
    statusColor = "#fb7171";
  }
  showPower.style.color = statusColor;
  showPower.innerHTML = power + "%";
  liquidBattery.style.height = power + "%";
  liquidBattery.style.backgroundColor = statusColor;
  battery.style.display = "inline-block";
  function isChar() {
    if (i.charging) {
      chargingElm.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px">
        <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
      دستگاه در حال شارژ است `;
      chargingElm.style.color = "#71fb85";
    } else {
      chargingElm.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21" />
      </svg>
      
      دستگاه در حال شارژ نیست `;
      chargingElm.style.color = "#fb7171";
    }
  }
}

// inline-block
// liquidBattery.style.height =
// i.level * 100 + "%"
