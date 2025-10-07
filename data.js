// Edit this file each week. Everything else is automatic.
//
// Use "DNP" for did-not-pick, or "" for blank. These won't count as wins.
// You can add more seasons later by adding keys to the seasons object,
// and you can extend weeks as far as you need.

export const seasons = {
  "2024-25": {
    // Week #: Winner name (string), or "DNP"/"" if nobody
    1: "DNP",
    2: "DNP",
    3: "Dawn",
    4: "Claudia",
    5: "Reina",
    6: "Mike",
    7: "Dawn",
    8: "Kevin",
    9: "Reina",
    10: "Dawn",
    11: "Luis",
    12: "Kevin",
    13: "Luis",
    14: "Claudia",
    15: "Mike",
    16: "Mike",
    17: "Reina",
    18: "Reina",
  },
  "2025-26": {
    1: "Luis",
    2: "Mike",
    3: "Luis",
    4: "Kevin",
    5: "PJ",
    // add more weeks as they happen, e.g.:
    // 6: "",
    // 7: "",
  }
};

// Optional: if you want to pre-fill a manual leaderboard instead of auto-calculating,
// set manualWinners to an array of [name, wins]. If left empty, the app calculates
// from `seasons` across all years.
export const manualWinners = [
  // ["Luis", 4],
  // ["Mike", 4],
  // ["Reina", 4],
  // ["Dawn", 3],
  // ["Kevin", 3],
  // ["Claudia", 2],
  // ["PJ", 1],
];
