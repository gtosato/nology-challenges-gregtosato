/* CREATE EVENTS FOR TOP MENU */
var menuApple = document.getElementById("apple_icon");
menuApple.addEventListener("mouseover", displayMenu);

var menuFinder = document.getElementById("menu__finder");
menuFinder.addEventListener("mouseover", displayMenu);

var menuFile = document.getElementById("menu__file");
menuFile.addEventListener("mouseover", displayMenu);

var menuEdit = document.getElementById("menu__edit");
menuEdit.addEventListener("mouseover", displayMenu);

var menuView = document.getElementById("menu__view");
menuView.addEventListener("mouseover", displayMenu);

var menuGo = document.getElementById("menu__go");
menuGo.addEventListener("mouseover", displayMenu);

var menuWindow = document.getElementById("menu__window");
menuWindow.addEventListener("mouseover", displayMenu);

var menuHelp = document.getElementById("menu__help");
menuHelp.addEventListener("mouseover", displayMenu);

var desktopClick = document.getElementById("desktop");
desktopClick.addEventListener("click", hideDropdownMenu);

function displayMenu(e) {
  // apple, finder, file, edit, view, go, window, help

  const appleItems = [
    "About This Mac",
    "System Preferences",
    "App Store",
    "Recent Items",
    "Force Quit Finder",
    "Sleep",
    "Restart...",
    "Shut Down...",
    "Lock Screen",
    "Log Out Greg Tosato...",
  ];
  const finderItems = [
    "About Finder",
    "Preferences...",
    "Empty Bin...",
    "Services",
    "Hide Finder",
    "Hide Others",
    "Show All",
  ];

  const fileItems = [
    "New Finder Window",
    "New Folder",
    "New Folder with Selection",
    "New Smart Folder",
    "New Tab",
    "Open",
    "Open With",
    "Close Window",
  ];

  const editItems = [
    "Undo Rename",
    "Redo",
    "Cut",
    "Copy",
    "Paste Item",
    "Select All",
  ];

  const viewItems = ["as Icons", "as List", "as Columns", "as Gallery"];

  const goItems = ["Back", "Forward", "Select Startup Disk"];

  const windowItems = [
    "Minimise",
    "Zoom",
    "Tile Window to Left of Screen",
    "Tile Window to Right of Screen",
  ];

  const helpItems = [
    "macOS Help",
    "See What's New in macOS",
    "New to Mac? Learn the Basics",
  ];

  const rect = e.target.getBoundingClientRect();
  document.getElementById("menu__dropdown").style.top = rect.top + 24 + "px";
  document.getElementById("menu__dropdown").style.left = rect.left - 10 + "px";

  const selectedMenu = e.target.id;

  switch (selectedMenu) {
    case "apple_icon":
      buildMenu(appleItems);
      break;

    case "menu__finder":
      buildMenu(finderItems);
      break;

    case "menu__file":
      buildMenu(fileItems);
      break;

    case "menu__edit":
      buildMenu(editItems);
      break;

    case "menu__view":
      buildMenu(viewItems);
      break;

    case "menu__go":
      buildMenu(goItems);
      break;

    case "menu__window":
      buildMenu(windowItems);
      break;

    case "menu__help":
      buildMenu(helpItems);
      break;
  }
  document.getElementById("menu__dropdown").style.display = "block";
}

function buildMenu(menuItems) {
  let myHtml = "<ul id='menu__dropdown__text'>";

  for (i = 0; i < menuItems.length; i++) {
    myHtml += "<li>" + menuItems[i] + "</li>";
  }
  myHtml += "</ul>";

  document.getElementById("menu__dropdown").innerHTML = myHtml;
}

function hideDropdownMenu() {
  document.getElementById("menu__dropdown").style.display = "none";
}

document.getElementById("menu__dropdown").style.display = "none";
