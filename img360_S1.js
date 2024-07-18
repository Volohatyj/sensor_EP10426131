var keyshotXR;

function initKeyShotXR() {
  var nameOfDiv = "360Viewer_S1";
  var folderName = "img/S1";
  var viewPortWidth = 768;
  var viewPortHeight = 768;
  var backgroundColor = "#000000";
  var uCount = 18;
  var vCount = 8;
  var uWrap = true;
  var vWrap = false;
  var uMouseSensitivity = -0.05;
  var vMouseSensitivity = 0.05625;
  var uStartIndex = 2;
  var vStartIndex = 4;
  var minZoom = 1;
  var maxZoom = 1;
  var rotationDamping = 0.96;
  var downScaleToBrowser = true;
  var addDownScaleGUIButton = false;
  var downloadOnInteraction = false;
  var imageExtension = "jpg";
  var showLoading = true;
  var loadingIcon = "../../esy_v2.png"; // Set to empty string for default icon.
  var allowFullscreen = true; // Double-click in desktop browsers for fullscreen.
  var uReverse = false;
  var vReverse = false;
  var hotspots = {};
  var isIBooksWidget = false;
  
  keyshotXR = new keyshotXR(nameOfDiv,folderName,viewPortWidth,viewPortHeight,backgroundColor,uCount,vCount,uWrap,vWrap,uMouseSensitivity,vMouseSensitivity,uStartIndex,vStartIndex,minZoom,maxZoom,rotationDamping,downScaleToBrowser,addDownScaleGUIButton,downloadOnInteraction,imageExtension,showLoading,loadingIcon,allowFullscreen,uReverse,vReverse,hotspots,isIBooksWidget);
}

window.onload = initKeyShotXR;