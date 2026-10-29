function trVal(t, v) {
  const map = {
    "Today": "common.today",
    "Tomorrow": "common.tomorrow",
    "This week": "common.this_week",
    "Next week": "common.next_week",
    "Weekends": "common.weekends",
    "All": "common.all",
    "All levels": "common.all_levels",
    "Beginner": "common.beginner",
    "Intermediate": "common.intermediate",
    "Advanced": "common.advanced",
    "Free": "common.free",
    "Paid": "common.paid",
    "Just now": "log.just_now",
    "Earlier": "common.earlier",
    "Easy": "log.easy",
    "Steady": "log.steady",
    "Hard": "log.hard",
    "All out": "log.allout"
  };
  if (map[v]) return t(map[v]);
  if (typeof sportThemes !== "undefined" && sportThemes[v]) return t("sport." + v);
  return v;
}
function trDate(t, str) {
  if (!str) return str;
  const days = { Mon: "day.mon", Tue: "day.tue", Wed: "day.wed", Thu: "day.thu", Fri: "day.fri", Sat: "day.sat", Sun: "day.sun" };
  const months = { Jan: "mon.jan", Feb: "mon.feb", Mar: "mon.mar", Apr: "mon.apr", May: "mon.may", Jun: "mon.jun", Jul: "mon.jul", Aug: "mon.aug", Sep: "mon.sep", Oct: "mon.oct", Nov: "mon.nov", Dec: "mon.dec" };
  return str.replace(/\b(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\b/g, (x) => t(days[x])).replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g, (x) => t(months[x]));
}
function trTitle(t, title) {
  if (!title) return title;
  const key = "evt." + title;
  const out = t(key);
  return out === key ? title : out;
}
function DiscoverTab({ openEvent, nav, location, openLocation }) {
  const t = useT();
  const [view, setView] = React.useState("list");
  const [filters, setFilters] = React.useState({
    sport: "All",
    level: "All",
    price: "All",
    when: "This week",
    maxDist: 5
  });
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [offline, setOffline] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const [recents, setRecents] = React.useState(["Padel", "Ciutadella", "Yoga"]);
  const searchInput = React.useRef(null);
  const searchActive = focused || query.trim().length > 0;
  const coldCity = !!(location && location.city && location.city !== "Barcelona");
  const searchResults = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return mockEvents.filter((e) => {
      const hay = [
        e.title,
        e.sport,
        t("sport." + e.sport),
        e.host,
        e.loc
      ].filter(Boolean).join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [query, t]);
  const recordRecent = (term) => {
    const v = (term || "").trim();
    if (!v) return;
    setRecents((prev) => [v, ...prev.filter((r) => r.toLowerCase() !== v.toLowerCase())].slice(0, 6));
  };
  const runSearch = (term) => {
    setQuery(term);
    recordRecent(term);
  };
  const openFromSearch = (id) => {
    recordRecent(query);
    openEvent(id);
  };
  const cancelSearch = () => {
    setQuery("");
    setFocused(false);
    if (searchInput.current) searchInput.current.blur();
  };
  React.useEffect(() => {
    const id = setTimeout(() => setLoading(false), 750);
    return () => clearTimeout(id);
  }, []);
  React.useEffect(() => {
    const goOff = () => setOffline(true);
    const goOn = () => setOffline(false);
    window.addEventListener("offline", goOff);
    window.addEventListener("online", goOn);
    if (typeof navigator !== "undefined" && navigator.onLine === false) setOffline(true);
    return () => {
      window.removeEventListener("offline", goOff);
      window.removeEventListener("online", goOn);
    };
  }, []);
  const refresh = () => {
    setOffline(!navigator.onLine ? true : false);
    setLoading(true);
    setTimeout(() => setLoading(false), 750);
  };
  const filteredEvents = React.useMemo(() => {
    return mockEvents.filter((e) => {
      if (filters.sport !== "All" && e.sport !== filters.sport) return false;
      if (filters.level !== "All" && e.level !== filters.level && e.level !== "All levels") return false;
      if (filters.price === "Free" && e.price !== "Free") return false;
      if (filters.price === "Paid" && e.price === "Free") return false;
      const dist = parseFloat(e.distance);
      if (dist > filters.maxDist) return false;
      return true;
    });
  }, [filters]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { padding: "54px 20px 0", background: "var(--paper)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 } }, /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 30, fontWeight: 200, letterSpacing: "-0.03em" } }, t("disc.title")), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    background: "var(--mint2)",
    borderRadius: 999,
    padding: 3,
    border: "0.5px solid var(--hair)"
  } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setView("list"), style: {
    padding: "7px 11px",
    borderRadius: 999,
    border: "none",
    background: view === "list" ? "var(--paper)" : "transparent",
    color: "var(--ink)",
    cursor: "pointer",
    boxShadow: view === "list" ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
    display: "flex",
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.list, { size: 16 })), /* @__PURE__ */ React.createElement("button", { onClick: () => setView("map"), style: {
    padding: "7px 11px",
    borderRadius: 999,
    border: "none",
    background: view === "map" ? "var(--paper)" : "transparent",
    color: "var(--ink)",
    cursor: "pointer",
    boxShadow: view === "map" ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
    display: "flex",
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.map, { size: 16 })))), location && openLocation && /* @__PURE__ */ React.createElement("button", { onClick: openLocation, style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "6px 12px 6px 6px",
    borderRadius: 999,
    marginBottom: 12,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 20,
    height: 20,
    borderRadius: 999,
    background: "var(--mint)",
    color: "var(--forest)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.pin, { size: 11, stroke: "var(--forest)" })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 400, whiteSpace: "nowrap" } }, location.city), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)", whiteSpace: "nowrap" } }, "\xB7 ", location.radius, "km"), /* @__PURE__ */ React.createElement(Icons.chevron_down, { size: 12, stroke: "var(--ink-3)" })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", { style: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 14px",
    borderRadius: 14,
    background: "var(--paper-2)",
    border: "0.5px solid " + (searchActive ? "var(--forest)" : "var(--hair-2)"),
    transition: "border 0.2s ease"
  } }, /* @__PURE__ */ React.createElement(Icons.search, { size: 18, stroke: searchActive ? "var(--forest)" : "var(--ink-3)" }), /* @__PURE__ */ React.createElement(
    "input",
    {
      ref: searchInput,
      value: query,
      onChange: (e) => setQuery(e.target.value),
      onFocus: () => setFocused(true),
      onKeyDown: (e) => {
        if (e.key === "Enter") runSearch(query);
      },
      placeholder: t("disc.search_ph"),
      style: {
        flex: 1,
        background: "none",
        border: "none",
        outline: "none",
        fontFamily: "inherit",
        fontSize: 14,
        color: "var(--ink)"
      }
    }
  ), query ? /* @__PURE__ */ React.createElement("button", { onClick: () => {
    setQuery("");
    if (searchInput.current) searchInput.current.focus();
  }, style: {
    background: "var(--hair)",
    border: "none",
    cursor: "pointer",
    width: 18,
    height: 18,
    borderRadius: 999,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--ink-2)"
  } }, /* @__PURE__ */ React.createElement(Icons.close, { size: 11, stroke: "var(--ink-2)", sw: 2.2 })) : /* @__PURE__ */ React.createElement("button", { onClick: () => setFilterOpen(true), style: {
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: "var(--ink-2)"
  } }, /* @__PURE__ */ React.createElement(Icons.filter, { size: 18 }))), searchActive && /* @__PURE__ */ React.createElement("button", { onClick: cancelSearch, style: {
    background: "none",
    border: "none",
    cursor: "pointer",
    flexShrink: 0,
    fontFamily: "inherit",
    fontSize: 14,
    color: "var(--forest)",
    padding: "4px 2px"
  } }, t("common.cancel"))), !searchActive && /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 8,
    overflowX: "auto",
    paddingBottom: 12,
    scrollbarWidth: "none",
    marginLeft: -4,
    marginRight: -4,
    paddingLeft: 4,
    paddingRight: 4
  } }, /* @__PURE__ */ React.createElement(
    FilterPill,
    {
      label: filters.sport === "All" ? t("disc.any_sport") : trVal(t, filters.sport),
      active: filters.sport !== "All",
      onClick: () => setFilterOpen(true)
    }
  ), /* @__PURE__ */ React.createElement(
    FilterPill,
    {
      label: trVal(t, filters.when),
      active: true,
      onClick: () => setFilterOpen(true)
    }
  ), /* @__PURE__ */ React.createElement(
    FilterPill,
    {
      label: filters.level === "All" ? t("disc.any_level") : trVal(t, filters.level),
      active: filters.level !== "All",
      onClick: () => setFilterOpen(true)
    }
  ), /* @__PURE__ */ React.createElement(
    FilterPill,
    {
      label: filters.price === "All" ? t("disc.any_price") : trVal(t, filters.price),
      active: filters.price !== "All",
      onClick: () => setFilterOpen(true)
    }
  ), /* @__PURE__ */ React.createElement(FilterPill, { label: `< ${filters.maxDist}km`, active: true, onClick: () => setFilterOpen(true) }))), searchActive ? /* @__PURE__ */ React.createElement(
    SearchPanel,
    {
      query,
      results: searchResults,
      recents,
      onTerm: runSearch,
      onClearRecents: () => setRecents([]),
      onOpenEvent: openFromSearch
    }
  ) : view === "list" ? /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "8px 20px 20px" } }, /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, marginBottom: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 } }, /* @__PURE__ */ React.createElement("h4", { style: { whiteSpace: "nowrap" } }, t("disc.browse_by_sport")), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)" } }, Object.keys(sportThemes).length)), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 10,
    overflowX: "auto",
    paddingBottom: 4,
    scrollbarWidth: "none",
    marginLeft: -20,
    marginRight: -20,
    paddingLeft: 20,
    paddingRight: 20
  } }, Object.keys(sportThemes).map((s) => {
    const isOn = filters.sport === s;
    return /* @__PURE__ */ React.createElement("button", { key: s, onClick: () => setFilters({ ...filters, sport: isOn ? "All" : s }), style: {
      flexShrink: 0,
      width: 96,
      padding: 0,
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      color: "var(--ink)",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      opacity: filters.sport !== "All" && !isOn ? 0.55 : 1,
      transition: "opacity 0.2s ease"
    } }, /* @__PURE__ */ React.createElement(SportPhoto, { sport: s, height: 96, radius: 14, w: 240 }, isOn && /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      borderRadius: 14,
      border: "2.5px solid var(--forest)",
      background: "oklch(0.32 0.06 150 / 0.18)"
    } }), /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      bottom: 6,
      left: 8,
      right: 8,
      color: "#fff",
      fontSize: 12,
      fontWeight: 400,
      textShadow: "0 1px 6px rgba(0,0,0,0.4)"
    } }, t("sport." + s))));
  }))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em", margin: "20px 0 12px" } }, coldCity ? /* @__PURE__ */ React.createElement(React.Fragment, null, location.city) : /* @__PURE__ */ React.createElement(React.Fragment, null, filteredEvents.length, " ", filteredEvents.length === 1 ? t("disc.event_near") : t("disc.events_near"), filters.sport !== "All" && /* @__PURE__ */ React.createElement(React.Fragment, null, " \xB7 ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--forest)" } }, trVal(t, filters.sport))))), offline && /* @__PURE__ */ React.createElement("div", { style: { marginLeft: -20, marginRight: -20 } }, /* @__PURE__ */ React.createElement(OfflineBanner, { onRetry: refresh })), coldCity ? /* @__PURE__ */ React.createElement(
    ColdCityState,
    {
      city: location.city,
      onHost: () => nav("create_event"),
      onExplore: () => openLocation && openLocation()
    }
  ) : loading ? /* @__PURE__ */ React.createElement(EventListSkeleton, { count: 4 }) : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, filteredEvents.map((e) => /* @__PURE__ */ React.createElement(EventListCard, { key: e.id, event: e, onClick: () => openEvent(e.id) })), filteredEvents.length === 0 && /* @__PURE__ */ React.createElement("div", { style: {
    padding: 24,
    textAlign: "center",
    color: "var(--ink-3)",
    fontSize: 13,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16
  } }, t("disc.no_results"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setFilters({ sport: "All", level: "All", price: "All", when: "This week", maxDist: 5 }),
      style: {
        background: "none",
        border: "none",
        marginTop: 8,
        padding: 0,
        color: "var(--forest)",
        fontSize: 13,
        fontWeight: 400,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    },
    t("disc.clear_filters")
  )))) : /* @__PURE__ */ React.createElement(MapView, { events: filteredEvents.length ? filteredEvents : mockEvents, openEvent }), /* @__PURE__ */ React.createElement("button", { onClick: () => nav("create_event"), style: {
    position: "absolute",
    right: 16,
    bottom: 96,
    zIndex: 50,
    width: 56,
    height: 56,
    borderRadius: 999,
    background: "var(--forest)",
    color: "var(--paper)",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 20px rgba(40, 80, 60, 0.3)"
  } }, /* @__PURE__ */ React.createElement(Icons.plus, { size: 24, stroke: "var(--paper)", sw: 2 })), filterOpen && /* @__PURE__ */ React.createElement(FilterSheet, { filters, setFilters, onClose: () => setFilterOpen(false) }));
}
function SearchPanel({ query, results, recents, onTerm, onClearRecents, onOpenEvent }) {
  const t = useT();
  const hasQuery = query.trim().length > 0;
  const popular = ["Padel", "Running", "Yoga", "Climbing", "Cycling", "Football"];
  if (!hasQuery) {
    return /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 24px" } }, recents.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 } }, /* @__PURE__ */ React.createElement("h4", null, t("disc.recent")), /* @__PURE__ */ React.createElement("button", { onClick: onClearRecents, style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 12,
      color: "var(--ink-3)",
      padding: 4
    } }, t("common.clear"))), /* @__PURE__ */ React.createElement("div", null, recents.map((r, i) => /* @__PURE__ */ React.createElement("button", { key: r + i, onClick: () => onTerm(r), className: "tap", style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 4px",
      background: "none",
      border: "none",
      borderBottom: i < recents.length - 1 ? "0.5px solid var(--hair)" : "none",
      cursor: "pointer",
      fontFamily: "inherit",
      color: "var(--ink)",
      textAlign: "left"
    } }, /* @__PURE__ */ React.createElement(Icons.clock, { size: 16, stroke: "var(--ink-3)" }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: 14 } }, r), /* @__PURE__ */ React.createElement(Icons.arrow_left, { size: 14, stroke: "var(--ink-3)", style: { transform: "rotate(135deg)" } }))))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: recents.length ? 26 : 8, marginBottom: 12 } }, t("disc.popular")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 } }, popular.map((s) => /* @__PURE__ */ React.createElement("button", { key: s, onClick: () => onTerm(t("sport." + s)), style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "7px 14px 7px 7px",
      borderRadius: 999,
      background: "var(--paper)",
      border: "0.5px solid var(--hair-2)",
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 13,
      color: "var(--ink)"
    } }, sportTile(s, 24), t("sport." + s)))));
  }
  return /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "8px 20px 20px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em", margin: "4px 0 12px" } }, results.length, " ", results.length === 1 ? t("disc.result") : t("disc.results")), results.length > 0 ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, results.map((e) => /* @__PURE__ */ React.createElement(EventListCard, { key: e.id, event: e, onClick: () => onOpenEvent(e.id) }))) : /* @__PURE__ */ React.createElement("div", { style: { padding: "40px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 52,
    height: 52,
    borderRadius: 999,
    background: "var(--mint2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.search, { size: 22, stroke: "var(--ink-3)" })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 400, color: "var(--ink)" } }, t("common.no_matches"), " \u201C", query.trim(), "\u201D"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--ink-3)", lineHeight: 1.5 } }, t("disc.search_hint"))));
}
function ColdCityState({ city, onHost, onExplore }) {
  const t = useT();
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: "28px 22px 26px",
    textAlign: "center",
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 60,
    height: 60,
    borderRadius: 999,
    background: "var(--mint)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16
  } }, /* @__PURE__ */ React.createElement(Icons.pin, { size: 28, stroke: "var(--forest)" })), /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 19, fontWeight: 400, letterSpacing: "-0.02em" } }, t("cold.title").replace("{city}", city)), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5, marginTop: 8, maxWidth: 280 } }, t("cold.sub")), /* @__PURE__ */ React.createElement("button", { onClick: onHost, className: "btn btn-primary", style: { width: "100%", marginTop: 22 } }, /* @__PURE__ */ React.createElement(Icons.plus, { size: 16, stroke: "var(--paper)", sw: 2 }), " ", t("cold.host_first")), /* @__PURE__ */ React.createElement("button", { onClick: onExplore, className: "btn btn-secondary", style: { width: "100%", marginTop: 10 } }, t("cold.explore_other")), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 18,
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 12.5,
    color: "var(--ink-3)"
  } }, /* @__PURE__ */ React.createElement(Icons.bell, { size: 14, stroke: "var(--ink-3)" }), t("cold.notify")));
}
function FilterPill({ label, active, onClick }) {
  return /* @__PURE__ */ React.createElement("button", { onClick, style: {
    flexShrink: 0,
    padding: "6px 12px",
    borderRadius: 999,
    background: active ? "var(--forest)" : "var(--paper)",
    color: active ? "var(--paper)" : "var(--ink-2)",
    border: "0.5px solid " + (active ? "var(--forest)" : "var(--hair-2)"),
    fontFamily: "inherit",
    fontSize: 12,
    fontWeight: 400,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 6
  } }, label, /* @__PURE__ */ React.createElement(Icons.chevron_down, { size: 12, stroke: active ? "var(--paper)" : "var(--ink-3)" }));
}
function EventListCard({ event, onClick }) {
  const tr = useT();
  const t = sportThemes[event.sport];
  return /* @__PURE__ */ React.createElement("button", { onClick, style: {
    width: "100%",
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 18,
    padding: 14,
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement(
    SportPhoto,
    {
      sport: event.sport,
      height: 64,
      radius: 12,
      overlay: false,
      w: 200,
      style: { width: 64, flexShrink: 0 }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, tr("sport." + event.sport), " \xB7 ", trVal(tr, event.level)), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    fontSize: 11,
    color: event.price === "Free" ? "var(--forest)" : "var(--ink-2)",
    fontWeight: event.price === "Free" ? 500 : 400,
    flexShrink: 0
  } }, trVal(tr, event.price))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 400, lineHeight: 1.25 } }, trTitle(tr, event.title)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, marginTop: 8, color: "var(--ink-3)", fontSize: 12, alignItems: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", gap: 4, alignItems: "center" } }, /* @__PURE__ */ React.createElement(Icons.calendar, { size: 12, stroke: "var(--ink-3)" }), trDate(tr, event.date), ", ", event.time), /* @__PURE__ */ React.createElement("span", { style: { display: "flex", gap: 4, alignItems: "center" } }, /* @__PURE__ */ React.createElement(Icons.pin, { size: 12, stroke: "var(--ink-3)" }), event.distance)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex" } }, event.participants.slice(0, 3).map((p, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { marginLeft: i > 0 ? -8 : 0 } }, /* @__PURE__ */ React.createElement(Avatar, { name: p, size: 22, ring: true })))), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--ink-3)" } }, event.of - event.spots, "/", event.of, " ", tr("common.joined"), " \xB7 ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--forest)", fontWeight: 400 } }, event.spots, " ", event.spots === 1 ? tr("common.spot") : tr("common.spots"))))));
}
function FilterSheet({ filters, setFilters, onClose }) {
  const t = useT();
  const [local, setLocal] = React.useState(filters);
  const apply = () => {
    setFilters(local);
    onClose();
  };
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
    zIndex: 100,
    display: "flex",
    alignItems: "flex-end"
  }, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: {
    width: "100%",
    background: "var(--paper)",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    padding: "14px 0 32px",
    maxHeight: "80%",
    overflowY: "auto"
  } }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 4, background: "var(--hair-2)", borderRadius: 99, margin: "0 auto 8px" } }), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 8px", display: "flex", justifyContent: "space-between", alignItems: "baseline" } }, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 18, fontWeight: 400 } }, t("disc.filters")), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setLocal({ sport: "All", level: "All", price: "All", when: "This week", maxDist: 5 }),
      style: { background: "none", border: "none", color: "var(--ink-3)", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }
    },
    t("common.reset")
  )), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px" } }, /* @__PURE__ */ React.createElement(FilterGroup, { label: t("create.sport") }, /* @__PURE__ */ React.createElement(
    ChipGroup,
    {
      options: ["All", ...Object.keys(sportThemes)],
      value: local.sport,
      onChange: (v) => setLocal({ ...local, sport: v })
    }
  )), /* @__PURE__ */ React.createElement(FilterGroup, { label: t("disc.when") }, /* @__PURE__ */ React.createElement(
    ChipGroup,
    {
      options: ["Today", "Tomorrow", "This week", "Next week", "Weekends"],
      value: local.when,
      onChange: (v) => setLocal({ ...local, when: v })
    }
  )), /* @__PURE__ */ React.createElement(FilterGroup, { label: t("disc.skill_level") }, /* @__PURE__ */ React.createElement(
    ChipGroup,
    {
      options: ["All", "Beginner", "Intermediate", "Advanced"],
      value: local.level,
      onChange: (v) => setLocal({ ...local, level: v })
    }
  )), /* @__PURE__ */ React.createElement(FilterGroup, { label: t("disc.price") }, /* @__PURE__ */ React.createElement(
    ChipGroup,
    {
      options: ["All", "Free", "Paid"],
      value: local.price,
      onChange: (v) => setLocal({ ...local, price: v })
    }
  )), /* @__PURE__ */ React.createElement(FilterGroup, { label: `${t("disc.within")} ${local.maxDist}km` }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "1",
      max: "20",
      value: local.maxDist,
      onChange: (e) => setLocal({ ...local, maxDist: +e.target.value }),
      style: { width: "100%", accentColor: "var(--forest)" }
    }
  ))), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 20px 0", display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", style: { flex: 1 }, onClick: onClose }, t("common.cancel")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { flex: 2 }, onClick: apply }, t("disc.show_events")))));
}
function FilterGroup({ label, children }) {
  return /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 18 } }, /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 10 } }, label), children);
}
function ChipGroup({ options, value, onChange }) {
  const t = useT();
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } }, options.map((o) => /* @__PURE__ */ React.createElement("button", { key: o, onClick: () => onChange(o), style: {
    padding: "7px 12px",
    borderRadius: 999,
    background: value === o ? "var(--forest)" : "var(--paper)",
    color: value === o ? "var(--paper)" : "var(--ink-2)",
    border: "0.5px solid " + (value === o ? "var(--forest)" : "var(--hair-2)"),
    fontFamily: "inherit",
    fontSize: 12,
    fontWeight: 400,
    cursor: "pointer"
  } }, trVal(t, o))));
}
function MapView({ events, openEvent }) {
  const tr = useT();
  const [active, setActive] = React.useState(events[0]);
  React.useEffect(() => {
    if (!events.includes(active)) setActive(events[0]);
  }, [events]);
  if (!events.length) {
    return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 40 } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", color: "var(--ink-3)", fontSize: 13 } }, tr("disc.no_events_map")));
  }
  const positions = [
    { x: 30, y: 35 },
    { x: 55, y: 25 },
    { x: 68, y: 50 },
    { x: 40, y: 60 },
    { x: 20, y: 70 },
    { x: 75, y: 75 }
  ];
  const pins = events.slice(0, 6).map((e, i) => ({ ...positions[i], e }));
  return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    background: `
          radial-gradient(circle at 30% 40%, oklch(0.88 0.05 145) 0%, transparent 30%),
          radial-gradient(circle at 70% 60%, oklch(0.86 0.04 150) 0%, transparent 35%),
          linear-gradient(180deg, oklch(0.93 0.02 160), oklch(0.96 0.015 150))
        `
  } }, /* @__PURE__ */ React.createElement("svg", { width: "100%", height: "100%", style: { position: "absolute", inset: 0, opacity: 0.35 }, preserveAspectRatio: "none", viewBox: "0 0 100 100" }, /* @__PURE__ */ React.createElement("path", { d: "M0 30 Q 30 28, 60 35 T 100 40", stroke: "oklch(0.7 0.02 150)", strokeWidth: "0.4", fill: "none" }), /* @__PURE__ */ React.createElement("path", { d: "M10 0 L 30 100", stroke: "oklch(0.7 0.02 150)", strokeWidth: "0.3", fill: "none" }), /* @__PURE__ */ React.createElement("path", { d: "M0 70 Q 50 65, 100 78", stroke: "oklch(0.7 0.02 150)", strokeWidth: "0.5", fill: "none" }), /* @__PURE__ */ React.createElement("path", { d: "M70 0 L 60 100", stroke: "oklch(0.7 0.02 150)", strokeWidth: "0.3", fill: "none" }), /* @__PURE__ */ React.createElement("path", { d: "M0 90 L 100 92", stroke: "oklch(0.7 0.02 150)", strokeWidth: "0.4", fill: "none" })), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: "40%",
    top: "20%",
    width: 80,
    height: 70,
    background: "oklch(0.85 0.06 145)",
    borderRadius: "40% 60% 50% 50%"
  } })), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: "50%",
    top: "45%",
    transform: "translate(-50%, -50%)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    background: "var(--lime)",
    border: "3px solid var(--paper)",
    boxShadow: "0 0 0 8px oklch(0.86 0.14 132 / 0.25)"
  } })), pins.map((p, i) => {
    const t = sportThemes[p.e.sport];
    const isActive = active && active.id === p.e.id;
    return /* @__PURE__ */ React.createElement("button", { key: i, onClick: () => setActive(p.e), style: {
      position: "absolute",
      left: `${p.x}%`,
      top: `${p.y}%`,
      transform: "translate(-50%, -100%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      zIndex: isActive ? 10 : 1
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      padding: "6px 10px 6px 6px",
      borderRadius: 999,
      background: isActive ? "var(--forest)" : "var(--paper)",
      color: isActive ? "var(--paper)" : "var(--ink)",
      display: "flex",
      alignItems: "center",
      gap: 6,
      border: "0.5px solid " + (isActive ? "var(--forest)" : "var(--hair)"),
      boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
      fontFamily: "inherit",
      fontSize: 12,
      fontWeight: 400
    } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: isActive ? "var(--paper)" : `oklch(0.85 0.08 ${t.h})`,
      color: isActive ? "var(--forest)" : `oklch(0.25 0.08 ${t.h})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, (() => {
      const I = SportIcons[p.e.sport] || SportIcons.Padel;
      return /* @__PURE__ */ React.createElement(I, { size: 11, color: isActive ? "var(--forest)" : `oklch(0.25 0.08 ${t.h})` });
    })()), /* @__PURE__ */ React.createElement("span", null, p.e.price)), /* @__PURE__ */ React.createElement("div", { style: {
      width: 2,
      height: 8,
      background: isActive ? "var(--forest)" : "var(--paper)",
      margin: "0 auto"
    } }));
  }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 16
  } }, active && /* @__PURE__ */ React.createElement(EventListCard, { event: active, onClick: () => openEvent(active.id) })));
}
function EventDetail({ eventId, onBack, openFriend, openReviews, openChat }) {
  const tr = useT();
  const event = mockEvents.find((e) => e.id === eventId) || mockEvents[0];
  const [joined, setJoined] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const t = sportThemes[event.sport];
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement("div", { style: {
    height: 280,
    position: "relative",
    overflow: "hidden",
    background: `linear-gradient(135deg, oklch(0.86 0.08 ${t.h}), oklch(0.55 0.10 ${t.h}))`
  } }, /* @__PURE__ */ React.createElement(
    SportPhoto,
    {
      sport: event.sport,
      height: 280,
      radius: 0,
      w: 900,
      style: { position: "absolute", inset: 0 },
      overlay: false
    }
  ), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.55) 100%)`
  } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 54, left: 16, right: 16, display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: {
    width: 40,
    height: 40,
    borderRadius: 999,
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icons.arrow_left, { size: 20, stroke: "var(--ink)" })), /* @__PURE__ */ React.createElement("button", { onClick: () => setSaved(!saved), style: {
    width: 40,
    height: 40,
    borderRadius: 999,
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(
    Icons.heart,
    {
      size: 18,
      stroke: saved ? "var(--rose)" : "var(--ink)",
      fill: saved ? "var(--rose)" : "none"
    }
  ))), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    bottom: 22,
    left: 20,
    right: 20,
    color: "#fff"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    padding: "4px 10px",
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 400,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: `oklch(0.25 0.08 ${t.h})`
  } }, tr("sport." + event.sport), " \xB7 ", trVal(tr, event.level)), /* @__PURE__ */ React.createElement("h1", { style: {
    marginTop: 12,
    fontSize: 28,
    fontWeight: 400,
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    textShadow: "0 2px 12px rgba(0,0,0,0.35)"
  } }, trTitle(tr, event.title)))), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "20px 20px 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, /* @__PURE__ */ React.createElement(Fact, { icon: /* @__PURE__ */ React.createElement(Icons.calendar, { size: 16 }), label: tr("event.when"), value: `${trDate(tr, event.date)}, ${event.time}` }), /* @__PURE__ */ React.createElement(Fact, { icon: /* @__PURE__ */ React.createElement(Icons.pin, { size: 16 }), label: tr("event.where"), value: event.loc }), /* @__PURE__ */ React.createElement(Fact, { icon: /* @__PURE__ */ React.createElement(Icons.target, { size: 16 }), label: tr("event.level"), value: trVal(tr, event.level) }), /* @__PURE__ */ React.createElement(Fact, { icon: /* @__PURE__ */ React.createElement(Icons.lightning, { size: 16 }), label: tr("event.price"), value: trVal(tr, event.price) })), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 24, marginBottom: 8 } }, tr("event.about")), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55 } }, tr("event.about_body", { sport: tr("sport." + event.sport).toLowerCase() })), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 24, marginBottom: 10 } }, tr("event.host")), /* @__PURE__ */ React.createElement("button", { onClick: () => openFriend(event.host), style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 12,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16,
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: event.host, size: 44 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400, display: "flex", alignItems: "center", gap: 5 } }, event.host, /* @__PURE__ */ React.createElement(Icons.shield, { size: 13, stroke: "var(--forest)" })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)" } }, tr("event.host_meta"))), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 16, stroke: "var(--ink-3)" })), /* @__PURE__ */ React.createElement("button", { onClick: () => openReviews ? openReviews(event.host) : null, style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 8,
    padding: "10px 14px",
    background: "var(--mint2)",
    border: "0.5px solid var(--hair)",
    borderRadius: 14,
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement(Icons.star_fill, { size: 15, stroke: "oklch(0.74 0.14 78)" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 400 } }, "4.9"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: "var(--ink-3)", flex: 1 } }, "\xB7 ", tr("rev.based_on", { n: "37" })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: "var(--forest)" } }, tr("rev.title")), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 15, stroke: "var(--ink-3)" })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 24, marginBottom: 10 } }, /* @__PURE__ */ React.createElement("h4", null, tr("event.participants")), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)" } }, event.of - event.spots, " ", tr("event.of"), " ", event.of)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 0 } }, event.participants.map((p, i) => /* @__PURE__ */ React.createElement("button", { key: p, onClick: () => openFriend(p), style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 0",
    background: "none",
    border: "none",
    borderBottom: i < event.participants.length - 1 ? "0.5px solid var(--hair)" : "none",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: p, size: 32 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontSize: 14 } }, p), i === 0 && /* @__PURE__ */ React.createElement("span", { className: "chip chip-outline" }, tr("common.host")))), Array(event.spots).fill(0).map((_, i) => /* @__PURE__ */ React.createElement("div", { key: "s" + i, style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 0",
    borderBottom: i < event.spots - 1 ? "0.5px solid var(--hair)" : "none"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    border: "1px dashed var(--hair-2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--ink-3)"
  } }, /* @__PURE__ */ React.createElement(Icons.plus, { size: 14, stroke: "var(--ink-3)" })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontSize: 14, color: "var(--ink-3)" } }, tr("event.open_spot")))))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "12px 20px 30px",
    background: "var(--paper)",
    borderTop: "0.5px solid var(--hair)",
    display: "flex",
    flexDirection: "column",
    gap: 8
  } }, joined && openChat && /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-secondary",
      style: { width: "100%" },
      onClick: () => openChat(event)
    },
    /* @__PURE__ */ React.createElement(Icons.message, { size: 16, stroke: "var(--forest)" }),
    " ",
    tr("gc.open_chat")
  ), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: {
    width: "100%",
    background: joined ? "var(--mint)" : "var(--forest)",
    color: joined ? "var(--forest)" : "var(--paper)"
  }, onClick: () => {
    if (joined) setJoined(false);
    else setConfirmOpen(true);
  } }, joined ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icons.check, { size: 18, stroke: "var(--forest)", sw: 2 }), tr("event.youre_in")) : /* @__PURE__ */ React.createElement(React.Fragment, null, tr("event.join_btn"), " \xB7 ", trVal(tr, event.price)))), confirmOpen && /* @__PURE__ */ React.createElement(
    JoinConfirmSheet,
    {
      event,
      onClose: () => setConfirmOpen(false),
      onConfirm: () => {
        setConfirmOpen(false);
        setJoined(true);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2200);
      }
    }
  ), success && /* @__PURE__ */ React.createElement(JoinSuccessToast, { event }));
}
function JoinConfirmSheet({ event, onClose, onConfirm }) {
  const tr = useT();
  const t = sportThemes[event.sport];
  const isFree = event.price === "Free";
  const { cards, addCard, defaultCard } = usePaymentMethods();
  const [method, setMethod] = React.useState(() => defaultCard ? defaultCard.id : "apple");
  const [addingCard, setAddingCard] = React.useState(false);
  const [agreed, setAgreed] = React.useState(false);
  return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    zIndex: 150,
    display: "flex",
    alignItems: "flex-end",
    animation: "fadeIn 0.18s ease"
  } }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: {
    width: "100%",
    background: "var(--paper)",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    padding: "12px 0 26px",
    maxHeight: "88%",
    overflowY: "auto",
    animation: "slideUp 0.28s cubic-bezier(0.2, 0.9, 0.3, 1)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 4, background: "var(--hair-2)", borderRadius: 99, margin: "0 auto 12px" } }), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 22px 4px" } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.06em" } }, tr("join.confirm_join")), /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 22, fontWeight: 400, marginTop: 6, letterSpacing: "-0.02em" } }, trTitle(tr, event.title))), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 22px 4px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "var(--paper-2)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16,
    padding: 12
  } }, /* @__PURE__ */ React.createElement(
    SportPhoto,
    {
      sport: event.sport,
      height: 56,
      radius: 12,
      overlay: false,
      w: 180,
      style: { width: 56, flexShrink: 0 }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, fontSize: 12, color: "var(--ink-2)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement(Icons.calendar, { size: 13, stroke: "var(--ink-3)" }), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 400, color: "var(--ink)" } }, trDate(tr, event.date), ", ", event.time)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginTop: 6 } }, /* @__PURE__ */ React.createElement(Icons.pin, { size: 13, stroke: "var(--ink-3)" }), /* @__PURE__ */ React.createElement("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, event.loc)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginTop: 6 } }, /* @__PURE__ */ React.createElement(Icons.user, { size: 13, stroke: "var(--ink-3)" }), /* @__PURE__ */ React.createElement("span", null, event.of - event.spots, "/", event.of, " ", tr("common.joined"), " \xB7 ", event.spots, " ", event.spots === 1 ? tr("common.spot") : tr("common.spots"), " ", tr("common.left")))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 22px 0" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "var(--mint-2)",
    border: "0.5px solid var(--mint)",
    borderRadius: 16,
    padding: "12px 14px"
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: event.host, size: 40 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontWeight: 500 } }, event.host), /* @__PURE__ */ React.createElement(Icons.shield, { size: 14, stroke: "var(--forest)", fill: "var(--mint)" })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "var(--ink-2)", marginTop: 1 } }, tr("join.host_verified"))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 14, color: "var(--forest)", fontWeight: 500 } }, "\u2605 4.9"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10.5, color: "var(--ink-3)" } }, tr("join.host_reviews_n"))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 22px 0" } }, /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 10 } }, tr("join.location")), /* @__PURE__ */ React.createElement("div", { style: {
    borderRadius: 16,
    overflow: "hidden",
    background: "var(--paper)",
    border: "0.5px solid var(--hair)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    height: 100,
    position: "relative",
    background: `
                radial-gradient(circle at 30% 40%, oklch(0.88 0.05 145) 0%, transparent 35%),
                radial-gradient(circle at 70% 60%, oklch(0.86 0.04 150) 0%, transparent 30%),
                linear-gradient(180deg, oklch(0.93 0.02 160), oklch(0.96 0.015 150))
              `
  } }, /* @__PURE__ */ React.createElement("svg", { width: "100%", height: "100%", style: { position: "absolute", inset: 0, opacity: 0.4 }, preserveAspectRatio: "none", viewBox: "0 0 100 100" }, /* @__PURE__ */ React.createElement("path", { d: "M0 40 Q 50 35, 100 50", stroke: "oklch(0.7 0.02 150)", strokeWidth: "0.4", fill: "none" }), /* @__PURE__ */ React.createElement("path", { d: "M30 0 L 50 100", stroke: "oklch(0.7 0.02 150)", strokeWidth: "0.3", fill: "none" }), /* @__PURE__ */ React.createElement("path", { d: "M70 0 L 60 100", stroke: "oklch(0.7 0.02 150)", strokeWidth: "0.3", fill: "none" })), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: "50%",
    top: "54%",
    transform: "translate(-50%, -100%)"
  } }, /* @__PURE__ */ React.createElement(Icons.pin, { size: 32, stroke: "var(--forest)", fill: "var(--lime)", sw: 1.2 }))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "12px 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "0.5px solid var(--hair)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0, flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 400 } }, event.loc), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", marginTop: 2 } }, event.distance, " ", tr("join.from_home"))), /* @__PURE__ */ React.createElement("button", { style: {
    padding: "6px 12px",
    borderRadius: 999,
    background: "var(--mint)",
    color: "var(--forest)",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 12,
    fontWeight: 400
  } }, tr("common.directions"))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 22px 0" } }, /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 10 } }, isFree ? tr("join.no_payment") : tr("join.payment")), isFree ? /* @__PURE__ */ React.createElement("div", { style: {
    padding: 14,
    borderRadius: 14,
    background: "var(--mint2)",
    border: "0.5px solid var(--hair)",
    display: "flex",
    alignItems: "center",
    gap: 12
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 36,
    height: 36,
    borderRadius: 999,
    background: "var(--lime)",
    color: "var(--ink)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.check, { size: 18, sw: 2.2 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontSize: 13, color: "var(--ink-2)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400, color: "var(--ink)" } }, tr("join.event_free")), tr("join.event_free_sub"))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 14,
    overflow: "hidden"
  } }, [
    { k: "apple", l: tr("join.apple_pay"), s: tr("join.apple_pay_s") },
    { k: "gpay", l: tr("join.gpay"), s: tr("join.gpay_s") }
  ].map((m) => /* @__PURE__ */ React.createElement("button", { key: m.k, onClick: () => setMethod(m.k), style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    background: "none",
    border: "none",
    borderBottom: "0.5px solid var(--hair)",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 40,
    height: 27,
    borderRadius: 6,
    background: m.k === "apple" ? "var(--ink)" : "#fff",
    color: m.k === "apple" ? "#fff" : "var(--ink)",
    border: m.k === "gpay" ? "0.5px solid var(--hair-2)" : "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: m.k === "apple" ? 15 : 12,
    fontWeight: 700
  } }, m.k === "apple" ? "" : "G"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, m.l), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", marginTop: 1 } }, m.s)), /* @__PURE__ */ React.createElement(Radio, { on: method === m.k }))), cards.map((c) => /* @__PURE__ */ React.createElement("button", { key: c.id, onClick: () => setMethod(c.id), style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    background: "none",
    border: "none",
    borderBottom: "0.5px solid var(--hair)",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement(CardChip, { brand: c.brand }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400, textTransform: "capitalize" } }, c.brand === "mc" ? "Mastercard" : c.brand, " ", /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: "var(--ink-2)" } }, "\u2022\u2022 ", c.last4)), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)", marginTop: 1 } }, tr("pay.exp"), " ", c.exp)), /* @__PURE__ */ React.createElement(Radio, { on: method === c.id }))), addingCard ? /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 14px 16px" } }, /* @__PURE__ */ React.createElement(
    AddCardForm,
    {
      compact: true,
      onSave: (card) => {
        const id = addCard(card);
        setMethod(id);
        setAddingCard(false);
      }
    }
  ), /* @__PURE__ */ React.createElement("button", { onClick: () => setAddingCard(false), style: {
    width: "100%",
    marginTop: 10,
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 13,
    color: "var(--ink-3)"
  } }, tr("common.cancel"))) : /* @__PURE__ */ React.createElement("button", { onClick: () => setAddingCard(true), style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "13px 14px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--forest)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 40,
    height: 27,
    borderRadius: 6,
    border: "0.5px dashed var(--sage)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.plus, { size: 15, stroke: "var(--forest)", sw: 2 })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontWeight: 500 } }, tr("pay.add_method")))), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 12,
    padding: "12px 14px",
    background: "var(--paper-2)",
    border: "0.5px solid var(--hair)",
    borderRadius: 14,
    fontSize: 13
  } }, /* @__PURE__ */ React.createElement(Line, { l: tr("join.court_split"), v: event.price, muted: true }), /* @__PURE__ */ React.createElement(Line, { l: tr("join.service_fee"), v: "\u20AC0.50", muted: true }), /* @__PURE__ */ React.createElement("div", { style: { height: 0.5, background: "var(--hair)", margin: "8px 0" } }), /* @__PURE__ */ React.createElement(Line, { l: tr("join.total_today"), v: addCents(event.price, 0.5), bold: true })), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: "var(--ink-3)", marginTop: 8, lineHeight: 1.5 } }, tr("join.charged_when")))), /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 22px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement(CancellationPolicy, null)), /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 10 } }, tr("join.house_rules")), /* @__PURE__ */ React.createElement("ul", { style: {
    margin: 0,
    padding: "12px 18px 12px 32px",
    listStyle: "disc",
    background: "var(--paper-2)",
    border: "0.5px solid var(--hair)",
    borderRadius: 14,
    fontSize: 12,
    color: "var(--ink-2)",
    lineHeight: 1.6
  } }, /* @__PURE__ */ React.createElement("li", null, tr("join.rule_1")), /* @__PURE__ */ React.createElement("li", null, tr("join.rule_2")), /* @__PURE__ */ React.createElement("li", null, tr("join.rule_3"))), /* @__PURE__ */ React.createElement("label", { style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 12,
    padding: "4px 2px",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement("span", { onClick: () => setAgreed(!agreed), style: {
    width: 22,
    height: 22,
    borderRadius: 6,
    border: "1.5px solid " + (agreed ? "var(--forest)" : "var(--hair-2)"),
    background: agreed ? "var(--forest)" : "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  } }, agreed && /* @__PURE__ */ React.createElement(Icons.check, { size: 13, stroke: "var(--paper)", sw: 2.2 })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: "var(--ink-2)" } }, tr("join.agree")))), /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 22px 0", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { onClick: onClose, className: "btn btn-secondary" }, tr("common.cancel")), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onConfirm,
      disabled: !agreed,
      className: "btn btn-primary",
      style: { opacity: agreed ? 1 : 0.4 }
    },
    isFree ? /* @__PURE__ */ React.createElement(React.Fragment, null, tr("join.confirm_spot_free"), " \xB7 ", /* @__PURE__ */ React.createElement("span", { style: { opacity: 0.8 } }, tr("common.free"))) : /* @__PURE__ */ React.createElement(React.Fragment, null, tr("join.pay_confirm", { amount: addCents(event.price, 0.5) }))
  ))));
}
function Radio({ on }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    flexShrink: 0,
    border: "1.5px solid " + (on ? "var(--forest)" : "var(--hair-2)"),
    background: on ? "var(--forest)" : "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, on && /* @__PURE__ */ React.createElement(Icons.check, { size: 11, stroke: "var(--paper)", sw: 2.2 }));
}
function Line({ l, v, muted, bold }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", padding: "3px 0" } }, /* @__PURE__ */ React.createElement("span", { style: { color: muted ? "var(--ink-3)" : "var(--ink)", fontWeight: bold ? 400 : 300 } }, l), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: "var(--ink)", fontWeight: bold ? 500 : 400 } }, v));
}
function addCents(price, fee) {
  if (price === "Free") return "Free";
  const m = price.match(/([€$£])\s?([\d.]+)/);
  if (!m) return price;
  const total = parseFloat(m[2]) + fee;
  return `${m[1]}${total.toFixed(2)}`;
}
function JoinSuccessToast({ event }) {
  const t = useT();
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 16,
    right: 16,
    top: 80,
    zIndex: 200,
    pointerEvents: "none",
    animation: "slideDown 0.3s ease"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--forest)",
    color: "var(--paper)",
    padding: "12px 16px",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    gap: 12,
    boxShadow: "0 12px 30px rgba(20, 40, 30, 0.3)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 32,
    height: 32,
    borderRadius: 999,
    background: "var(--lime)",
    color: "var(--ink)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  } }, /* @__PURE__ */ React.createElement(Icons.check, { size: 18, sw: 2.4, stroke: "var(--ink)" })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, t("join.success_t")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, opacity: 0.85, marginTop: 1 } }, t("join.success_s")))));
}
function Fact({ icon, label, value }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: "12px 14px",
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 14
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, color: "var(--ink-3)", marginBottom: 4 } }, icon, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em" } }, label)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, value));
}
function CreateEvent({ onBack, onDone, editEvent, prefill }) {
  const t = useT();
  const isEdit = !!editEvent;
  const seed = editEvent || prefill;
  const [form, setForm] = React.useState(seed ? {
    sport: seed.sport || "",
    title: seed.title || "",
    loc: seed.loc || "",
    date: seed.date || "Sat 1",
    time: seed.time || "17:00",
    level: seed.level || "All levels",
    price: seed.price === "Free" ? "free" : editEvent ? "paid" : "free",
    capacity: seed.of || 6
  } : {
    sport: "",
    title: "",
    loc: "",
    date: "Sat 1",
    time: "17:00",
    level: "All levels",
    price: "free",
    capacity: 6
  });
  const set = (k, v) => setForm({ ...form, [k]: v });
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: isEdit ? t("create.edit_title_screen") : t("create.title"), onBack, right: /* @__PURE__ */ React.createElement("button", { onClick: onDone, style: {
    background: "none",
    border: "none",
    color: "var(--forest)",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 500
  } }, isEdit ? t("common.save") : t("create.publish")) }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 28px" } }, prefill && prefill.partners && prefill.partners.length > 0 && /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 8,
    marginBottom: 4,
    padding: "12px 14px",
    borderRadius: 14,
    background: "var(--mint-2)",
    border: "0.5px solid var(--mint)",
    display: "flex",
    alignItems: "center",
    gap: 12
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex" } }, prefill.partners.slice(0, 3).map((p, i) => /* @__PURE__ */ React.createElement("div", { key: p, style: { marginLeft: i ? -10 : 0, border: "2px solid var(--paper)", borderRadius: "50%" } }, /* @__PURE__ */ React.createElement(Avatar, { name: p, size: 28 })))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.4 } }, /* @__PURE__ */ React.createElement("b", { style: { color: "var(--ink)", fontWeight: 600 } }, t("create.rebook_t")), /* @__PURE__ */ React.createElement("br", null), t("create.rebook_s"))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 8, marginBottom: 10 } }, t("create.sport")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, scrollbarWidth: "none" } }, Object.keys(sportThemes).map((s) => /* @__PURE__ */ React.createElement("button", { key: s, onClick: () => set("sport", s), style: {
    flexShrink: 0,
    padding: "8px 12px 8px 8px",
    borderRadius: 14,
    background: form.sport === s ? "var(--mint)" : "var(--paper)",
    border: "0.5px solid " + (form.sport === s ? "var(--forest)" : "var(--hair-2)"),
    cursor: "pointer",
    fontFamily: "inherit",
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "var(--ink)"
  } }, sportTile(s, 28), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 400 } }, t("sport." + s))))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 22, marginBottom: 10 } }, t("create.event_title")), /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "input",
      value: form.title,
      onChange: (e) => set("title", e.target.value),
      placeholder: t("create.title_ph")
    }
  ), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 22, marginBottom: 10 } }, t("create.location")), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "input",
      value: form.loc,
      onChange: (e) => set("loc", e.target.value),
      placeholder: t("create.location_ph"),
      style: { paddingLeft: 42 }
    }
  ), /* @__PURE__ */ React.createElement(Icons.pin, { size: 16, stroke: "var(--ink-3)", style: { position: "absolute", left: 14, top: 16 } })), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 10,
    height: 100,
    borderRadius: 14,
    overflow: "hidden",
    background: `
            radial-gradient(circle at 30% 40%, oklch(0.88 0.05 145) 0%, transparent 40%),
            linear-gradient(180deg, oklch(0.93 0.02 160), oklch(0.96 0.015 150))
          `,
    position: "relative",
    border: "0.5px solid var(--hair)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -100%)",
    color: "var(--forest)"
  } }, /* @__PURE__ */ React.createElement(Icons.pin, { size: 28, stroke: "var(--forest)", fill: "var(--lime)", sw: 1.2 }))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 22 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 10 } }, t("create.date")), /* @__PURE__ */ React.createElement("input", { className: "input", value: form.date, onChange: (e) => set("date", e.target.value) })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 10 } }, t("create.time")), /* @__PURE__ */ React.createElement("input", { className: "input", value: form.time, onChange: (e) => set("time", e.target.value) }))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 22, marginBottom: 10 } }, t("disc.skill_level")), /* @__PURE__ */ React.createElement(
    ChipGroup,
    {
      options: ["All levels", "Beginner", "Intermediate", "Advanced"],
      value: form.level,
      onChange: (v) => set("level", v)
    }
  ), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 22, marginBottom: 10 } }, t("event.price")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => set("price", "free"), style: {
    padding: "14px 16px",
    borderRadius: 14,
    cursor: "pointer",
    background: form.price === "free" ? "var(--mint)" : "var(--paper)",
    border: "0.5px solid " + (form.price === "free" ? "var(--forest)" : "var(--hair-2)"),
    color: "var(--ink)",
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 400
  } }, t("common.free")), /* @__PURE__ */ React.createElement("button", { onClick: () => set("price", "paid"), style: {
    padding: "14px 16px",
    borderRadius: 14,
    cursor: "pointer",
    background: form.price === "paid" ? "var(--mint)" : "var(--paper)",
    border: "0.5px solid " + (form.price === "paid" ? "var(--forest)" : "var(--hair-2)"),
    color: "var(--ink)",
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 400
  } }, t("create.price_paid"))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 22, marginBottom: 6 } }, t("create.capacity")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: "var(--ink-3)" } }, t("create.max_participants")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 24, fontWeight: 300 } }, form.capacity)), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "2",
      max: "20",
      value: form.capacity,
      onChange: (e) => set("capacity", +e.target.value),
      style: { width: "100%", accentColor: "var(--forest)" }
    }
  ), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 22, marginBottom: 10 } }, t("create.who_join")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, [
    ["public", t("create.public")],
    ["friends", t("create.friends_only")],
    ["invite", t("create.invite_link")]
  ].map(([k, l]) => /* @__PURE__ */ React.createElement("label", { key: k, style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 14px",
    borderRadius: 14,
    cursor: "pointer",
    background: "var(--paper)",
    border: "0.5px solid var(--hair-2)",
    fontSize: 14
  } }, /* @__PURE__ */ React.createElement("input", { type: "radio", name: "audience", defaultChecked: k === "public", style: { accentColor: "var(--forest)" } }), l)))));
}
Object.assign(window, {
  DiscoverTab,
  FilterPill,
  EventListCard,
  FilterSheet,
  FilterGroup,
  ChipGroup,
  MapView,
  EventDetail,
  Fact,
  CreateEvent,
  trVal,
  trDate,
  trTitle
});
