/**
 * Depend on "html2canvas": "^1.0.0-rc.5",
 * **/

/**
 * @param { String } divId Id of the div #my-chart
 * @param { String } filename filename of the image
 */

module.exports = (divId, filename) => {
  // print screen
  const html2canvas = require("html2canvas");

  var a = document.createElement("a");
  document.body.appendChild(a);
  a.classList.add("hidden");

  var element = document.getElementById(divId);

  html2canvas(element).then(function(canvas) {
    canvas.toBlob(blob => {
      let file = new Blob([blob], { type: "application/octet-stream" });

      // IE FIX
      if (
        (window.navigator && window.navigator.msSaveOrOpenBlob) ||
        navigator.appVersion.toString().indexOf(".NET") > 0
      ) {
        window.navigator.msSaveOrOpenBlob(file, filename + ".jpg");
      } else {
        let blobURL = URL.createObjectURL(file);
        a.href = blobURL;
        a.download = filename + ".jpg";
        a.click();
        window.URL.revokeObjectURL(blobURL);
      }
    });
  });
};
