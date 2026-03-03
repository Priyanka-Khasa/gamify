const games = [
  {
    name: "Neon Drift",
    genre: "Racing",
    mode: "Solo",
    vibe: "speed future reflex",
    description: "High-speed city racing with glowing tracks, time trials, and chase missions."
  },
  {
    name: "Kingdom Tactix",
    genre: "Strategy",
    mode: "Solo",
    vibe: "war planning conquest",
    description: "Grid-based battles where positioning, upgrades, and timing decide the war."
  },
  {
    name: "Pixel Raiders",
    genre: "Arcade",
    mode: "Co-op",
    vibe: "retro blaster action",
    description: "Fast arcade combat with wave survival, boss fights, and local team play."
  },
  {
    name: "Mystic Tiles",
    genre: "Puzzle",
    mode: "Solo",
    vibe: "calm logic patterns",
    description: "A polished tile-matching brain game built around combos and elegant visual feedback."
  },
  {
    name: "Street Clash Arena",
    genre: "Fighting",
    mode: "Versus",
    vibe: "combat duel combo",
    description: "1v1 fighter with signature moves, timing windows, and character-specific finishers."
  },
  {
    name: "Shadow Heist",
    genre: "Stealth",
    mode: "Solo",
    vibe: "sneak cyber infiltration",
    description: "Break into secured towers, avoid patrols, and steal data without being detected."
  },
  {
    name: "Farm Loop",
    genre: "Simulation",
    mode: "Casual",
    vibe: "cozy management growth",
    description: "Relaxed farming progression with crafting, harvesting loops, and soft progression."
  },
  {
    name: "Skyline Survivors",
    genre: "Action",
    mode: "Co-op",
    vibe: "survival rooftop monsters",
    description: "Fight through rooftop invasions, gather gear, and survive escalating waves together."
  },
  {
    name: "Quiz Circuit",
    genre: "Trivia",
    mode: "Party",
    vibe: "knowledge fast fun",
    description: "A quiz-based party game with timed rounds, streak bonuses, and category battles."
  },
  {
    name: "Orb Runner",
    genre: "Platformer",
    mode: "Solo",
    vibe: "jump reflex flow",
    description: "Momentum-based platforming with shifting gravity and score-focused routes."
  },
  {
    name: "Galaxy Merchant",
    genre: "Simulation",
    mode: "Solo",
    vibe: "trade exploration economy",
    description: "Build routes, manage cargo, and expand a space-trading empire across sectors."
  },
  {
    name: "Dungeon Relay",
    genre: "Adventure",
    mode: "Co-op",
    vibe: "quest teamwork fantasy",
    description: "Team-based dungeon runs with role switching, loot sharing, and escalating danger."
  }
];

const filters = ["All", ...new Set(games.map((game) => game.genre))];
const gameGrid = document.getElementById("gameGrid");
const filterRow = document.getElementById("filterRow");
const searchInput = document.getElementById("searchInput");

let activeFilter = "All";

function renderFilters() {
  filterRow.innerHTML = "";

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.className = `filter-btn${filter === activeFilter ? " active" : ""}`;
    button.type = "button";
    button.textContent = filter;
    button.addEventListener("click", () => {
      activeFilter = filter;
      renderFilters();
      renderGames();
    });
    filterRow.appendChild(button);
  });
}

function renderGames() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleGames = games.filter((game) => {
    const matchesFilter = activeFilter === "All" || game.genre === activeFilter;
    const haystack = `${game.name} ${game.genre} ${game.mode} ${game.vibe}`.toLowerCase();
    return matchesFilter && haystack.includes(query);
  });

  gameGrid.innerHTML = "";

  if (visibleGames.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No games match this search yet. Try another genre or keyword.";
    gameGrid.appendChild(empty);
    return;
  }

  visibleGames.forEach((game, index) => {
    const card = document.createElement("article");
    card.className = "game-card";
    card.style.animationDelay = `${index * 60}ms`;
    card.innerHTML = `
      <div class="card-top">
        <span class="genre-badge">${game.genre}</span>
        <span class="meta-chip">${game.mode}</span>
      </div>
      <h3>${game.name}</h3>
      <p>${game.description}</p>
      <div class="meta-row">
        ${game.vibe
          .split(" ")
          .map((item) => `<span class="meta-chip">${item}</span>`)
          .join("")}
      </div>
    `;
    gameGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", renderGames);

renderFilters();
renderGames();
