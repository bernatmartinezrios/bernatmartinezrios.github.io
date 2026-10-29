const WEEK_EVENTS = {
  "-1": [
    { dayIdx: 0, sport: "Padel", t: "20:00", title: "Padel \xB7 doubles", loc: "Padel Tres", id: "e_past1" },
    { dayIdx: 3, sport: "Yoga", t: "07:30", title: "Vinyasa flow", loc: "Studio Lin", id: "e_past2" },
    { dayIdx: 5, sport: "Running", t: "08:00", title: "Easy 5K", loc: "Ciutadella", id: "e_past3" }
  ],
  "0": [
    { dayIdx: 1, sport: "Padel", t: "19:00", title: "Padel doubles \xB7 friendly", loc: "Les Corts", id: "e1" },
    { dayIdx: 2, sport: "Running", t: "07:30", title: "Sunrise run \xB7 5K Ciutadella", loc: "Ciutadella", id: "e2" },
    { dayIdx: 5, sport: "Yoga", t: "10:00", title: "Vinyasa flow in the park", loc: "Montju\xEFc", id: "e3" }
  ],
  "+1": [
    { dayIdx: 1, sport: "Climbing", t: "20:00", title: "Indoor bouldering session", loc: "Sputnik", id: "e4" },
    { dayIdx: 3, sport: "Cycling", t: "17:30", title: "Montju\xEFc loop", loc: "Montju\xEFc", id: "e5b" },
    { dayIdx: 5, sport: "Football", t: "17:00", title: "Pickup 5-a-side", loc: "Poblenou", id: "e6" },
    { dayIdx: 6, sport: "Hiking", t: "09:00", title: "Collserola", loc: "Collserola", id: "e_next4" }
  ]
};
const WEEK_META = {
  "-1": { nums: [20, 21, 22, 23, 24, 25, 26], label: "Last week", w: "w21 \xB7 may" },
  "0": { nums: [27, 28, 29, 30, 1, 2, 3], label: "This week", w: "w22 \xB7 may\u2013jun" },
  "+1": { nums: [4, 5, 6, 7, 8, 9, 10], label: "Next week", w: "w23 \xB7 jun" }
};
const TODAY = { weekOffset: 0, dayIdx: 1 };
function HomeTab({ nav, openEvent, openFriend, location, openLocation, openRate }) {
  const t = useT();
  const { lang } = useLang();
  const [ratePrompt, setRatePrompt] = React.useState({ sport: "Padel", date: "Mon \xB7 May 27", loc: "Les Corts", host: "Marta P.", partners: ["Marta P.", "Joan L.", "Sara M."] });
  const weekdays = [t("day.mon"), t("day.tue"), t("day.wed"), t("day.thu"), t("day.fri"), t("day.sat"), t("day.sun")];
  const [weekOffset, setWeekOffset] = React.useState(0);
  const [selectedDay, setSelectedDay] = React.useState(TODAY.dayIdx);
  const meta = WEEK_META[String(weekOffset >= 0 ? "+" + weekOffset : weekOffset).replace("+0", "0")];
  const events = WEEK_EVENTS[String(weekOffset >= 0 ? "+" + weekOffset : weekOffset).replace("+0", "0")] || [];
  const dayEvents = events.filter((e) => e.dayIdx === selectedDay);
  const isToday = weekOffset === TODAY.weekOffset && selectedDay === TODAY.dayIdx;
  const isPast = weekOffset < 0 || weekOffset === 0 && selectedDay < TODAY.dayIdx;
  const changeWeek = (delta) => {
    const next = Math.max(-1, Math.min(1, weekOffset + delta));
    setWeekOffset(next);
    if (next === TODAY.weekOffset) setSelectedDay(TODAY.dayIdx);
    else setSelectedDay(0);
  };
  const selectedDateNum = meta.nums[selectedDay];
  const selectedMonth = weekOffset === 1 && selectedDateNum < 20 ? "Jun" : "May";
  const fullDateLabel = `${weekdays[selectedDay]} \xB7 ${selectedMonth} ${selectedDateNum}`;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "screen-scroll" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "54px 20px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-3)", fontSize: 13, fontWeight: 400 } }, t("home.greeting_date")), /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 30, fontWeight: 200, letterSpacing: "-0.03em", marginTop: 4, lineHeight: 1.12 } }, t("home.greeting_morning"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexShrink: 0, marginTop: 2 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => nav("social"), style: {
    width: 40,
    height: 40,
    borderRadius: 999,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative"
  } }, /* @__PURE__ */ React.createElement(Icons.users, { size: 18, stroke: "var(--ink)" }), /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    top: 6,
    right: 6,
    minWidth: 16,
    height: 16,
    padding: "0 4px",
    borderRadius: 999,
    background: "var(--forest)",
    color: "var(--paper)",
    fontSize: 9,
    fontWeight: 600,
    fontFamily: "Manrope",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1.5px solid var(--paper)"
  } }, "2")), /* @__PURE__ */ React.createElement("button", { onClick: () => nav("notifications"), style: {
    width: 40,
    height: 40,
    borderRadius: 999,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative"
  } }, /* @__PURE__ */ React.createElement(Icons.bell, { size: 18, stroke: "var(--ink)" }), /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    top: 8,
    right: 10,
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "var(--lime)",
    border: "1.5px solid var(--paper)"
  } })))), location && openLocation && /* @__PURE__ */ React.createElement("button", { onClick: openLocation, style: {
    marginTop: 14,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "7px 12px 7px 8px",
    borderRadius: 999,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 22,
    height: 22,
    borderRadius: 999,
    background: "var(--mint)",
    color: "var(--forest)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.pin, { size: 12, stroke: "var(--forest)" })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 400, whiteSpace: "nowrap" } }, location.city), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)", whiteSpace: "nowrap" } }, "\xB7 ", location.radius, "km"), /* @__PURE__ */ React.createElement(Icons.chevron_down, { size: 12, stroke: "var(--ink-3)" }))), ratePrompt && /* @__PURE__ */ React.createElement(
    RatePromptCard,
    {
      activity: ratePrompt,
      onRate: () => openRate && openRate(ratePrompt),
      onDismiss: () => setRatePrompt(null)
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 20px 8px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 10 } }, /* @__PURE__ */ React.createElement("h4", { style: { whiteSpace: "nowrap" } }, weekOffset === 0 ? t("home.this_week") : weekOffset < 0 ? t("home.last_week") : t("home.next_week")), weekOffset !== 0 && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setWeekOffset(0);
        setSelectedDay(TODAY.dayIdx);
      },
      style: {
        background: "none",
        border: "none",
        padding: 0,
        color: "var(--forest)",
        fontSize: 11,
        fontWeight: 400,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    },
    t("home.jump_today")
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => changeWeek(-1), disabled: weekOffset <= -1, style: {
    width: 28,
    height: 28,
    borderRadius: 999,
    padding: 0,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: weekOffset <= -1 ? "default" : "pointer",
    opacity: weekOffset <= -1 ? 0.4 : 1,
    color: "var(--ink)"
  } }, /* @__PURE__ */ React.createElement(Icons.arrow_left, { size: 14 })), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)", minWidth: 84, textAlign: "center" } }, meta.w), /* @__PURE__ */ React.createElement("button", { onClick: () => changeWeek(1), disabled: weekOffset >= 1, style: {
    width: 28,
    height: 28,
    borderRadius: 999,
    padding: 0,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: weekOffset >= 1 ? "default" : "pointer",
    opacity: weekOffset >= 1 ? 0.4 : 1,
    color: "var(--ink)"
  } }, /* @__PURE__ */ React.createElement(Icons.arrow_right, { size: 14 })))), /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 20,
    padding: "14px 8px"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 } }, weekdays.map((d, i) => {
    const dayE = events.filter((e) => e.dayIdx === i);
    const isTodayCell = weekOffset === TODAY.weekOffset && i === TODAY.dayIdx;
    const isSelected = i === selectedDay;
    return /* @__PURE__ */ React.createElement("button", { key: i, onClick: () => setSelectedDay(i), style: {
      padding: "8px 4px",
      borderRadius: 14,
      border: "none",
      background: isSelected ? "var(--forest)" : isTodayCell ? "var(--mint)" : "transparent",
      color: isSelected ? "var(--paper)" : "var(--ink)",
      textAlign: "center",
      cursor: "pointer",
      minHeight: 88,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      fontFamily: "inherit",
      transition: "background 0.18s ease, color 0.18s ease"
    } }, /* @__PURE__ */ React.createElement("span", { style: {
      fontSize: 10,
      letterSpacing: "0.02em",
      color: isSelected ? "oklch(0.85 0.05 145)" : "var(--ink-3)"
    } }, d.toUpperCase()), /* @__PURE__ */ React.createElement("span", { style: {
      fontSize: 16,
      fontWeight: isTodayCell || isSelected ? 500 : 300,
      color: isSelected ? "var(--paper)" : isTodayCell ? "var(--forest)" : "var(--ink)",
      letterSpacing: "-0.02em"
    } }, meta.nums[i]), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 3, marginTop: 2, alignItems: "center" } }, dayE.map((e, j) => /* @__PURE__ */ React.createElement("div", { key: j, style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: isSelected ? "var(--lime)" : `oklch(0.6 0.12 ${sportThemes[e.sport].h})`
    } }))));
  }))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8, gap: 10 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em", whiteSpace: "nowrap", flexShrink: 0 } }, isToday ? t("common.today") : fullDateLabel, " \xB7 ", dayEvents.length, " ", dayEvents.length === 1 ? t("common.event") : t("common.events")), !isPast && /* @__PURE__ */ React.createElement("button", { onClick: () => nav("create_event"), style: {
    background: "none",
    border: "none",
    padding: 0,
    color: "var(--forest)",
    fontSize: 11,
    fontWeight: 400,
    cursor: "pointer",
    fontFamily: "inherit",
    display: "flex",
    alignItems: "center",
    gap: 4
  } }, /* @__PURE__ */ React.createElement(Icons.plus, { size: 12, stroke: "var(--forest)", sw: 2 }), " ", t("common.add"))), dayEvents.length === 0 ? /* @__PURE__ */ React.createElement("button", { onClick: () => nav("discover"), style: {
    width: "100%",
    padding: 18,
    borderRadius: 18,
    background: "var(--paper)",
    border: "1px dashed var(--hair-2)",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink-2)",
    display: "flex",
    alignItems: "center",
    gap: 14,
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 40,
    height: 40,
    borderRadius: 12,
    background: "var(--mint2)",
    color: "var(--forest)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  } }, /* @__PURE__ */ React.createElement(Icons.calendar, { size: 18 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400, color: "var(--ink)" } }, t("home.nothing_planned")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, t("home.browse_for"), " ", weekdays[selectedDay].toLowerCase())), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 16, stroke: "var(--ink-3)" })) : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, dayEvents.map((e, i) => {
    const isPrimary = isToday && i === 0;
    const theme = sportThemes[e.sport];
    const SportIcon = SportIcons[e.sport] || SportIcons.Padel;
    return /* @__PURE__ */ React.createElement("button", { key: e.id, onClick: () => openEvent(e.id), style: {
      width: "100%",
      background: isPrimary ? "var(--forest)" : "var(--paper)",
      color: isPrimary ? "var(--paper)" : "var(--ink)",
      border: isPrimary ? "none" : "0.5px solid var(--hair)",
      borderRadius: 20,
      padding: 14,
      display: "flex",
      alignItems: "center",
      gap: 14,
      cursor: "pointer",
      fontFamily: "inherit",
      textAlign: "left",
      opacity: isPast ? 0.6 : 1
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: isPrimary ? "oklch(0.55 0.08 145)" : `linear-gradient(135deg, oklch(0.86 0.07 ${theme.h}), oklch(0.72 0.10 ${theme.h}))`,
      color: isPrimary ? "var(--paper)" : `oklch(0.22 0.10 ${theme.h})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    } }, /* @__PURE__ */ React.createElement(SportIcon, { size: 22, color: isPrimary ? "var(--paper)" : `oklch(0.22 0.10 ${theme.h})` })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, trTitle(t, e.title)), /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: 12,
      opacity: isPrimary ? 0.75 : 1,
      color: isPrimary ? "var(--paper)" : "var(--ink-3)",
      marginTop: 2,
      display: "flex",
      gap: 8
    } }, /* @__PURE__ */ React.createElement("span", null, e.t), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("span", null, e.loc), isPast && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("span", { style: { color: isPrimary ? "var(--paper)" : "var(--forest)" } }, t("home.done"))))), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 18, stroke: isPrimary ? "var(--paper)" : "var(--ink-3)" }));
  })))), /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 0 8px" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("h4", { style: { whiteSpace: "nowrap" } }, t("home.suggested")), /* @__PURE__ */ React.createElement("button", { onClick: () => nav("discover"), style: {
    background: "none",
    border: "none",
    color: "var(--forest)",
    fontSize: 12,
    fontWeight: 400,
    cursor: "pointer",
    fontFamily: "inherit"
  } }, t("home.see_all"))), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 10,
    overflowX: "auto",
    padding: "0 20px 8px",
    scrollbarWidth: "none"
  } }, mockEvents.slice(0, 4).map((e) => /* @__PURE__ */ React.createElement(SuggestionCard, { key: e.id, event: e, onClick: () => openEvent(e.id) })))), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 20px" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => nav("create_event"), style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderRadius: 18,
    background: "var(--paper)",
    border: "1px dashed var(--hair-2)",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 36,
    height: 36,
    borderRadius: 999,
    background: "var(--lime)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--ink)"
  } }, /* @__PURE__ */ React.createElement(Icons.plus, { size: 20, sw: 2 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, t("home.add_activity_t")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)" } }, t("home.add_activity_s"))), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 18, stroke: "var(--ink-3)" }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 20px 32px" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => nav("social"), style: {
    width: "100%",
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 18,
    padding: 14,
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex" } }, mockFriends.slice(0, 4).map((f, i) => /* @__PURE__ */ React.createElement("div", { key: f.name, style: { marginLeft: i > 0 ? -10 : 0 } }, /* @__PURE__ */ React.createElement(Avatar, { name: f.name, size: 32, ring: true })))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontWeight: 400 } }, t("home.social_label")), /* @__PURE__ */ React.createElement("span", { style: {
    minWidth: 18,
    height: 18,
    padding: "0 6px",
    borderRadius: 999,
    background: "var(--forest)",
    color: "var(--paper)",
    fontSize: 10,
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  } }, "2")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, t("home.social_count_update"))), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 16, stroke: "var(--ink-3)" }))))));
}
function SuggestionCard({ event, onClick }) {
  const tr = useT();
  const t = sportThemes[event.sport];
  const SportIcon = SportIcons[event.sport] || SportIcons.Padel;
  return /* @__PURE__ */ React.createElement("button", { onClick, style: {
    flexShrink: 0,
    width: 220,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 18,
    padding: 14,
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    gap: 10
  } }, /* @__PURE__ */ React.createElement(SportPhoto, { sport: event.sport, height: 100, radius: 12, w: 400 }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    bottom: 8,
    left: 8,
    right: 8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.18)",
    borderRadius: 8,
    padding: 4,
    backdropFilter: "blur(6px)"
  } }, /* @__PURE__ */ React.createElement(SportIcon, { size: 18, color: "#fff" })), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    fontSize: 10,
    color: "var(--ink)",
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(8px)",
    padding: "3px 7px",
    borderRadius: 6
  } }, event.distance))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--ink-3)" } }, tr("sport." + event.sport)), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 10, color: "var(--ink-3)" } }, event.price === "Free" ? tr("common.free") : event.price)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 400, lineHeight: 1.3 } }, trTitle(tr, event.title)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6, fontSize: 11, color: "var(--ink-3)", display: "flex", gap: 6, alignItems: "center" } }, /* @__PURE__ */ React.createElement(Icons.clock, { size: 12, stroke: "var(--ink-3)" }), /* @__PURE__ */ React.createElement("span", null, trDate(tr, event.date), ", ", event.time))));
}
function AddActivitySheet({ onClose, onCreate }) {
  const t = useT();
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
    animation: "slideUp 0.25s ease"
  } }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 4, background: "var(--hair-2)", borderRadius: 99, margin: "0 auto 8px" } }), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 8px" } }, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 18, fontWeight: 400 } }, t("add.title"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 16px" } }, [
    { i: /* @__PURE__ */ React.createElement(Icons.plus, { size: 20 }), t: t("add.host"), s: t("add.host_s"), go: "create_event" },
    { i: /* @__PURE__ */ React.createElement(Icons.calendar, { size: 20 }), t: t("add.join"), s: t("add.join_s"), go: "discover" }
  ].map((opt, i, arr) => /* @__PURE__ */ React.createElement("button", { key: i, onClick: () => onCreate(opt.go), style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "14px 8px",
    background: "none",
    border: "none",
    borderBottom: i < arr.length - 1 ? "0.5px solid var(--hair)" : "none",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 40,
    height: 40,
    borderRadius: 12,
    background: "var(--mint)",
    color: "var(--forest)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, opt.i), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 400 } }, opt.t), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, opt.s)), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 18, stroke: "var(--ink-3)" }))))));
}
Object.assign(window, { HomeTab, SuggestionCard, AddActivitySheet });
