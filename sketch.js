const r = require("raylib");
const t = require("./tonebar");

const running = function () {
  return !r.WindowShouldClose();
};

const setup = function () {
  const screen = { width: 1280, height: 720 };
  const title = "Xylophone";
  const FPS = 240;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, title);
  r.InitAudioDevice();
  r.SetTargetFPS(FPS);

  const tonebars = [
    t.createTonebar(167.5, 140, 90, 400, r.RED, "C5", r.KEY_A),
    t.createTonebar(262.5, 152, 90, 376, r.ORANGE, "D5", r.KEY_S),
    t.createTonebar(357.5, 164, 90, 352, r.YELLOW, "E5", r.KEY_D),
    t.createTonebar(452.5, 176, 90, 328, r.GREEN, "F5", r.KEY_F),
    t.createTonebar(547.5, 188, 90, 304, r.SKYBLUE, "G5", r.KEY_G),
    t.createTonebar(642.5, 200, 90, 280, r.BLUE, "A5", r.KEY_H),
    t.createTonebar(737.5, 212, 90, 256, r.PURPLE, "B5", r.KEY_J),
    t.createTonebar(832.5, 224, 90, 232, r.PINK, "C6", r.KEY_K),
    t.createTonebar(927.5, 236, 90, 208, r.MAROON, "D6", r.KEY_L),
    t.createTonebar(1022.5, 248, 90, 184, r.BROWN, "E6", r.KEY_SEMICOLON),
  ];

  return {
    tonebars,
    screen,
  };
};

const update = function (world) {
  t.playTonebars(world.tonebars);
};

const draw = function (world) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  t.drawXylophone(world.tonebars);

  r.EndDrawing();
};

const teardown = function () {
  r.CloseAudioDevice();
  r.CloseWindow();
};

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};
