chrome.app.runtime.onLaunched.addListener(function() {
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 1000;
  var height = 750;

  chrome.app.window.create("./index.html",{
    innerBounds: {
      height: height,
      width: width
    }
  });
});
