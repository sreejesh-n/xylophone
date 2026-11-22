const r = require("raylib");

const createTonebar = function (x, y, width, height, color, note, key) {
  return {
    rec: { x, y, width, height },
    color,
    note,
    sound: r.LoadSound(`notes/Xyl-${note}.wav`),
    key,
    restPos: y,
    offset: { x: 0, y: 0 },
    animationOffset: { x: 0, y: 42 },
    maxHeight: y - 4,
    isAnimating: false,
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

const drawXylophone = function (tonebars) {
  for (const tonebar of tonebars) {
    drawTonebar(tonebar);
  }
};

const animateTonebar = function (tonebar) {
  const dt = r.GetFrameTime();

  tonebar.rec.x -= tonebar.offset.x * dt;
  tonebar.rec.y -= tonebar.offset.y * dt;

  if (tonebar.rec.y <= tonebar.maxHeight) {
    tonebar.rec.y = tonebar.restPos;
    tonebar.offset.x = 0;
    tonebar.offset.y = 0;
    tonebar.isAnimating = false;
  }
};

const playTonebar = function (tonebar) {
  if (r.IsKeyPressed(tonebar.key)) {
    tonebar.isAnimating = true;
    tonebar.offset.x = tonebar.animationOffset.x;
    tonebar.offset.y = tonebar.animationOffset.y;

    r.PlaySound(tonebar.sound);
  }
  animateTonebar(tonebar);
};

const playTonebars = function (tonebars) {
  for (const tonebar of tonebars) {
    playTonebar(tonebar);
  }
};

module.exports = {
  createTonebar,
  drawXylophone,
  playTonebars,
};
