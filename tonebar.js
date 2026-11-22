const r = require("raylib");

const createTonebar = function (x, y, width, height, color, note, key) {
  return {
    rec: { x, y, width, height },
    color,
    note,
    sound: r.LoadSound(`notes/Xyl-${note}.wav`),
    key,
    original: { x, y },
    offset: { x: 0, y: 0 },
    animationOffset: { x: 0, y: 64 },
    targetY: y - 6,
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

function reset(tonebar) {
  const { rec, original, offset } = tonebar;

  rec.y = original.y;
  offset.x = 0;
  offset.y = 0;
  tonebar.isAnimating = false;
}

const animateTonebars = function (tonebars, dt) {
  for (const tonebar of tonebars) {
    const { rec, offset, targetY } = tonebar;

    rec.x -= offset.x * dt;
    rec.y -= offset.y * dt;

    if (rec.y <= targetY) {
      reset(tonebar);
    }
  }
};

const playTonebar = function (tonebar) {
  const { key, offset, animationOffset, sound } = tonebar;

  if (r.IsKeyPressed(key)) {
    offset.x = animationOffset.x;
    offset.y = animationOffset.y;
    tonebar.isAnimating = true;

    r.PlaySound(sound);
  }
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
  animateTonebars,
};
