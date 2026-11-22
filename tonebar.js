const r = require("raylib");

const createTonebar = function (x, y, width, height, color, note, key) {
  return {
    rec: { x, y, width, height },
    color,
    note,
    sound: r.LoadSound(`notes/Xyl-${note}.wav`),
    key,
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

const drawNote = function (rec, note) {
  const notePosition = {
    x: rec.x + 25,
    y: rec.y + rec.height / 2 - 14,
  };

  r.DrawText(note, notePosition.x, notePosition.y, 25, r.WHITE);
};

const drawTonebar = function (config) {
  const { rec, color, note } = config;

  r.DrawRectangleRounded(rec, 0.4, 720, color);
  drawSupportPins(rec);
  drawNote(rec, note);
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
