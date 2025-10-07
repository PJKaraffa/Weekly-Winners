import { seasons, manualWinners } from "./data.js";

const DNP_VALUES = new Set(["", "DNP", "dnp", null, undefined]);

// ----- Render Weeks Table -----
function renderWeeks() {
  const container = document.getElementById("weeks");

  // Collect all season names and all week numbers that exist in any season
  const seasonNames = Object.keys(seasons);
  const allWeeks = [...new Set(
    seasonNames.flatMap(season => Object.keys(seasons[season]).map(Number))
  )].sort((a,b)=>a-b);

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Header
  const headRow = document.createElement("tr");
  headRow.appendChild(th("WEEK"));
  seasonNames.forEach(season => headRow.appendChild(th(season)));
  thead.appendChild(headRow);

  // Rows by week
  allWeeks.forEach(weekNum => {
    const tr = document.createElement("tr");
    tr.appendChild(td(`Week ${weekNum}`));
    seasonNames.forEach(season => {
      const winner = seasons[season]?.[weekNum] ?? "";
      tr.appendChild(td(winner || "—", winner ? "" : "small"));
    });
    tbody.appendChild(tr);
  });

  table.append(thead, tbody);
  container.replaceChildren(table);
}

// ----- Compute Winners (auto) -----
function computeWinnersFromSeasons() {
  const counts = new Map();
  for (const year of Object.keys(seasons)) {
    const weeks = seasons[year];
    for (const [w, name] of Object.entries(weeks)) {
      if (DNP_VALUES.has(name)) continue;
      counts.set(name, (counts.get(name) || 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([name, wins]) => ({ name, wins }))
    .sort((a, b) => b.wins - a.wins || a.name.localeCompare(b.name));
}

// ----- Render Winners Table -----
function renderWinners() {
  const container = document.getElementById("winners");
  const rows = manualWinners.length
    ? manualWinners.map(([name, wins]) => ({ name, wins }))
    : computeWinnersFromSeasons();

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const headRow = document.createElement("tr");
  headRow.appendChild(th("Name"));
  headRow.appendChild(th("Wins", "right"));
  thead.appendChild(headRow);

  rows.forEach(r => {
    const tr = document.createElement("tr");
    tr.appendChild(td(r.name));
    tr.appendChild(td(r.wins, "right"));
    tbody.appendChild(tr);
  });

  table.append(thead, tbody);
  container.replaceChildren(table);
}

// ----- Helpers -----
function th(text, cls=""){ const e=document.createElement("th"); e.textContent=text; if(cls) e.className=cls; return e; }
function td(text, cls=""){ const e=document.createElement("td"); e.textContent=text; if(cls) e.className=cls; return e; }

// ----- Init -----
renderWeeks();
renderWinners();
