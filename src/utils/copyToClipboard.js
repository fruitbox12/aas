/**
 * Copy text to clipboard
 * @param  {String} text The text you want on the system clipboard
 */
const copyToClipboard = function(text) {
   const elem = document.createElement("textarea");
   elem.value = text;
   document.body.appendChild(elem);
   elem.select();
   document.execCommand("copy");
   document.body.removeChild(elem);
};

export default copyToClipboard;
