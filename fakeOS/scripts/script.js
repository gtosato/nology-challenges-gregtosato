/******************* DOCK ***************/
var finder = document.getElementById("Finder");
finder.addEventListener("mouseover", toggleDockPopup);
finder.addEventListener("mouseout", hideDockPopup);

var launchpad = document.getElementById("Launchpad");
launchpad.addEventListener("mouseover", toggleDockPopup);
launchpad.addEventListener("mouseout", hideDockPopup);

var chrome = document.getElementById("Chrome");
chrome.addEventListener("mouseover", toggleDockPopup);
chrome.addEventListener("mouseout", hideDockPopup);

var vscode = document.getElementById("VS Code");
vscode.addEventListener("mouseover", toggleDockPopup);
vscode.addEventListener("mouseout", hideDockPopup);

var calculator = document.getElementById("Calculator");
calculator.addEventListener("mouseover", toggleDockPopup);
calculator.addEventListener("mouseout", hideDockPopup);

var xcode = document.getElementById("Xcode");
xcode.addEventListener("mouseover", toggleDockPopup);
xcode.addEventListener("mouseout", hideDockPopup);

var calendar = document.getElementById("Calendar");
calendar.addEventListener("mouseover", toggleDockPopup);
calendar.addEventListener("mouseout", hideDockPopup);

var messages = document.getElementById("Messages");
messages.addEventListener("mouseover", toggleDockPopup);
messages.addEventListener("mouseout", hideDockPopup);

var bin = document.getElementById("Bin");
bin.addEventListener("mouseover", toggleDockPopup);
bin.addEventListener("mouseout", hideDockPopup);

function toggleDockPopup(e) {
  const rect = e.target.getBoundingClientRect();
  document.getElementById("dock__hover__container").style.top =
    rect.top - 55 + "px";

  document.getElementById("dock__hover__container").style.left =
    rect.left - 30 + "px";

  document.getElementById("dock__hover__text").innerHTML = e.target.id;
  document.getElementById("dock__hover__container").style.display = "block";
}

function hideDockPopup(e) {
  document.getElementById("dock__hover__container").style.display = "none";
}

/*************** DESKTOP ICONS ***************/
var finderIcon = document.getElementById("finder");
finderIcon.addEventListener("dblclick", showFinder);

var safariIcon = document.getElementById("safari");
safariIcon.addEventListener("dblclick", showSafari);

var textEditIcon = document.getElementById("textedit");
textEditIcon.addEventListener("dblclick", showTextEdit);

var btnCloseFinder = document.getElementById("btn__close");
btnCloseFinder.addEventListener("mouseover", toggleCloseButton);
btnCloseFinder.addEventListener("mouseout", hideCloseButton);
btnCloseFinder.addEventListener("click", closeFinder);

var btnCloseSafari = document.getElementById("btn__close__safari");
btnCloseSafari.addEventListener("mouseover", toggleCloseButton);
btnCloseSafari.addEventListener("mouseout", hideCloseButton);
btnCloseSafari.addEventListener("click", closeSafari);

var btnCloseTextEdit = document.getElementById("btn__close__textedit");
btnCloseTextEdit.addEventListener("mouseover", toggleCloseButton);
btnCloseTextEdit.addEventListener("mouseout", hideCloseButton);
btnCloseTextEdit.addEventListener("click", closeTextEdit);

function toggleCloseButton() {
  btnCloseFinder.src = "./images/close_btn_active.png";
  btnCloseSafari.src = "./images/close_btn_active.png";
  btnCloseTextEdit.src = "./images/close_btn_active.png";
}

function hideCloseButton() {
  btnCloseFinder.src = "./images/close_btn_inactive.png";
  btnCloseSafari.src = "./images/close_btn_inactive.png";
  btnCloseTextEdit.src = "./images/close_btn_inactive.png";
}

/******* FINDER WINDOW ********/
function showFinder(e) {
  document.getElementById("modal__container__finder").style.display = "block";
  document.getElementById("modal__container__finder").style.zIndex = "1";
  document.getElementById("modal__container__safari").style.zIndex = "0";
  document.getElementById("modal__container__textedit").style.zIndex = "0";
}

function closeFinder() {
  document.getElementById("modal__container__finder").style.display = "none";
}

/******** SAFARI WINDOW *********/
function showSafari(e) {
  document.getElementById("modal__container__safari").style.display = "block";
  document.getElementById("modal__container__safari").style.zIndex = "1";
  document.getElementById("modal__container__finder").style.zIndex = "0";
  document.getElementById("modal__container__textedit").style.zIndex = "0";
}

function closeSafari() {
  document.getElementById("modal__container__safari").style.display = "none";
}

/******** TEXTEDIT WINDOW *********/
function showTextEdit(e) {
  document.getElementById("modal__container__textedit").style.display = "block";
  document.getElementById("modal__container__textedit").style.zIndex = "1";
  document.getElementById("modal__container__finder").style.zIndex = "0";
  document.getElementById("modal__container__safari").style.zIndex = "0";
}

function closeTextEdit() {
  document.getElementById("modal__container__textedit").style.display = "none";
}

document.getElementById("dock__hover__container").style.display = "none";
document.getElementById("modal__container__finder").style.display = "none";
document.getElementById("modal__container__safari").style.display = "none";
document.getElementById("modal__container__textedit").style.display = "none";
