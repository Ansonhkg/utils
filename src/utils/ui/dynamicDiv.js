/**
 * Dynamically changes a div height when it reaches footer
 * or hide it when it's covered by footer
 * @param { String } headerId
 * @param { String } targetId
 * @param { String } footerId
 * @param { Boolean } debug
 */
module.exports = (headerId, targetId, footerId, debug = false) => {
  var offsetTop = window.scrollY;
  var pageHeight = document.body.clientHeight;
  var headerHeight = document.getElementById(headerId).clientHeight;
  var targetBox = document.getElementById(targetId);
  var footerHeight = document.getElementById(footerId).clientHeight;

  var targetBoxHeight = targetBox.clientHeight;

  var targetBoxMarginTop = window.getComputedStyle(targetBox).marginTop;
  targetBoxMarginTop = parseInt(targetBoxMarginTop.match(/\d+/g, "")[0]);

  // header + targetBox's margin-top
  var targetBoxPageHeight = headerHeight + targetBoxMarginTop;

  var touchesFooter =
    pageHeight -
      offsetTop -
      footerHeight -
      targetBoxPageHeight -
      targetBoxHeight <
    0;

  if (touchesFooter) {
    var newHeight = pageHeight - offsetTop - footerHeight - targetBoxPageHeight;
    targetBox.style.height = `${newHeight}px`;
    targetBox.style.zIndex = "-1";
    if (debug) {
      console.log({
        newHeight: newHeight,
        touches: true
      });
    }
    return {
      newHeight: newHeight,
      touches: true
    };
  }

  if (!touchesFooter) {
    var newHeight = pageHeight - offsetTop - footerHeight - targetBoxPageHeight;
    targetBox.style.height = `${newHeight}px`;
    targetBox.style.zIndex = "auto";
    if (debug) {
      console.log({
        newHeight: newHeight,
        touches: false
      });
    }
    return {
      newHeight: newHeight,
      touches: false
    };
  }
};
