const r = require("raylib");

const createTonebar = function (x, y, width, height, color, note) {
  return {
    rec: { x, y, width, height },
    color,
    note,
  };
};

const drawSupportPins = function (rec) {
  const centerX = rec.x + rec.width / 2;
  const pins = {
    top: {
      x: centerX,
      y: rec.y + rec.height * 0.12,
    },
    bottom: {
      x: centerX,
      y: rec.y + rec.height * 0.88,
    },
  };

  r.DrawCircleV(pins.top, 10, r.WHITE);
  r.DrawCircleV(pins.bottom, 10, r.WHITE);
};

const drawTonebar = function (config) {
  const { rec, color, note } = config;

  r.DrawRectangleRounded(rec, 0.4, 720, color);
  drawSupportPins(rec);
  r.DrawText(note, rec.x + 25, rec.y + rec.height / 2 - 14, 25, r.WHITE);
};

const drawTonebars = function (tonebars) {
  for (const tonebar of tonebars) {
    drawTonebar(tonebar);
  }
};

module.exports = {
  createTonebar,
  drawTonebars,
};
