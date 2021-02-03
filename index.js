import ZestIcons from "./zest";

function createIconElement(uid, options) {
  if (!(uid in ZestIcons)) {
    throw new Error("Invalid UID for icon: " + uid);
  }

  var options = options || {};
  var size = options.size || 24;
  var color = options.color || "#000";
  var className = options.className || "";
  var style = options.valign ? "valign:" + options.valign : "";
  var paths = ZestIcons[uid].paths;
  var div = document.createElement("div");

  div.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" class="${className}" style="${style}"><g fill="${color}">${paths}</g></svg>`;

  return div.children[0];
}

var el = document.getElementById("example");
var icon = createIconElement("cool-face", {
  color: "#f09",
  size: 48,
  valign: "middle",
});
el.appendChild(icon)
