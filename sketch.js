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
    t.createTonebar(167.5, 140, 90, 400, r.RED, "C5"),
    t.createTonebar(262.5, 152, 90, 376, r.ORANGE, "D5"),
    t.createTonebar(357.5, 164, 90, 352, r.YELLOW, "E5"),
    t.createTonebar(452.5, 176, 90, 328, r.GREEN, "F5"),
    t.createTonebar(547.5, 188, 90, 304, r.SKYBLUE, "G5"),
    t.createTonebar(642.5, 200, 90, 280, r.BLUE, "A5"),
    t.createTonebar(737.5, 212, 90, 256, r.PURPLE, "B5"),
    t.createTonebar(832.5, 224, 90, 232, r.PINK, "C6"),
    t.createTonebar(927.5, 236, 90, 208, r.MAROON, "D6"),
    t.createTonebar(1022.5, 248, 90, 184, r.BROWN, "E6"),
  ];

  const notes = {
    A5: r.LoadSound("notes/Xyl-A5.wav"),
    B5: r.LoadSound("notes/Xyl-B5.wav"),
    C5: r.LoadSound("notes/Xyl-C5.wav"),
    C6: r.LoadSound("notes/Xyl-C6.wav"),
    D5: r.LoadSound("notes/Xyl-D5.wav"),
    D6: r.LoadSound("notes/Xyl-D6.wav"),
    E5: r.LoadSound("notes/Xyl-E5.wav"),
    E6: r.LoadSound("notes/Xyl-E6.wav"),
    F5: r.LoadSound("notes/Xyl-F5.wav"),
    G5: r.LoadSound("notes/Xyl-G5.wav"),
  };

  return {
    tonebars,
    notes,
    screen,
  };
};

const update = function (world) {
  if (r.IsKeyPressed(r.KEY_A)) {
    r.PlaySound(world.notes["C5"]);
  }
  if (r.IsKeyPressed(r.KEY_S)) {
    r.PlaySound(world.notes["D5"]);
  }
  if (r.IsKeyPressed(r.KEY_D)) {
    r.PlaySound(world.notes["E5"]);
  }
  if (r.IsKeyPressed(r.KEY_F)) {
    r.PlaySound(world.notes["F5"]);
  }
  if (r.IsKeyPressed(r.KEY_G)) {
    r.PlaySound(world.notes["G5"]);
  }
  if (r.IsKeyPressed(r.KEY_H)) {
    r.PlaySound(world.notes["A5"]);
  }
  if (r.IsKeyPressed(r.KEY_J)) {
    r.PlaySound(world.notes["B5"]);
  }
  if (r.IsKeyPressed(r.KEY_K)) {
    r.PlaySound(world.notes["C6"]);
  }
  if (r.IsKeyPressed(r.KEY_L)) {
    r.PlaySound(world.notes["D6"]);
  }
  if (r.IsKeyPressed(r.KEY_SEMICOLON)) {
    r.PlaySound(world.notes["E6"]);
  }
  //   const keys = {
  //     A
  //   };
  const key = r.GetKeyPressed();
  console.log(key);
};

const draw = function (world) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  t.drawTonebars(world.tonebars);

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
