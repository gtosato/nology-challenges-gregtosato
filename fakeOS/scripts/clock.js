function getDate() {
  const today = new Date();

  let currentDay = today.getDay();
  let currentDate = today.getDate();
  let currentMonth = today.getMonth();

  let strDay = "";
  let strDate = "";
  let strMonth = "";

  switch (currentDay) {
    case 0:
      strDay = "Mon";
      break;
    case 1:
      strDay = "Tues";
      break;
    case 2:
      strDay = "Wed";
      break;
    case 3:
      strDay = "Thu";
      break;
    case 4:
      strDay = "Fri";
      break;
    case 5:
      strDay = "Sat";
      break;
    default:
      strDay = "Sun";
      break;
  }

  document.getElementById("menu__item__date").innerHTML = strDay;
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);

  let currentDay = today.getDay();
  let currentDate = today.getDate();
  let currentMonth = today.getMonth();

  document.getElementById("menu__item__clock").innerHTML = h + ":" + m;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

//getDate();
startTime();
