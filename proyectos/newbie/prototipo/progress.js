function ProgressTab({ nav }) {
  const t = useT();
  const [section, setSection] = React.useState("overview");
  if (section === "plan") return /* @__PURE__ */ React.createElement(TrainingPlan, { onBack: () => setSection("overview") });
  if (section === "diary") return /* @__PURE__ */ React.createElement(
    ActivityDiary,
    {
      onBack: () => setSection("overview"),
      openEntry: (entry) => nav("activity_detail", { entry })
    }
  );
  if (section === "challenges") return /* @__PURE__ */ React.createElement(
    Challenges,
    {
      onBack: () => setSection("overview"),
      openChallenge: (ch) => nav("challenge_detail", { challenge: ch })
    }
  );
  if (section === "report") return /* @__PURE__ */ React.createElement(MonthlyReport, { onBack: () => setSection("overview") });
  return /* @__PURE__ */ React.createElement("div", { className: "screen-scroll" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "54px 20px 0" } }, /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 30, fontWeight: 200, letterSpacing: "-0.03em" } }, t("prog.title")), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-3)", fontSize: 13, marginTop: 4 } }, t("prog.subtitle"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 20px 4px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--forest)",
    color: "var(--paper)",
    borderRadius: 22,
    padding: "18px 18px 16px",
    position: "relative",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    right: -30,
    top: -30,
    width: 160,
    height: 160,
    borderRadius: "50%",
    background: "oklch(0.45 0.08 145)",
    opacity: 0.4
  } }), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 6 } }, /* @__PURE__ */ React.createElement(Icons.fire, { size: 16, stroke: "var(--lime)" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "oklch(0.85 0.06 145)", textTransform: "uppercase", letterSpacing: "0.04em" } }, t("prog.streak"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 8, marginTop: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 56, fontWeight: 200, letterSpacing: "-0.03em" } }, "12"), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 13, opacity: 0.8 } }, t("prog.streak_days"))), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, opacity: 0.8, marginTop: 4 } }, t("prog.streak_pb"))))), /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 10,
    padding: "14px 20px"
  } }, /* @__PURE__ */ React.createElement(MiniStat, { label: t("prog.this_week"), value: "3", sub: t("prog.this_week_sub") }), /* @__PURE__ */ React.createElement(MiniStat, { label: t("prog.this_month"), value: "14", sub: t("prog.this_month_sub") }), /* @__PURE__ */ React.createElement(MiniStat, { label: t("prog.people_met"), value: "23", sub: t("prog.people_met_sub") })), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 20px 24px", display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(
    SectionTile,
    {
      title: t("prog.tile_plan_t"),
      desc: t("prog.tile_plan_d"),
      icon: /* @__PURE__ */ React.createElement(Icons.target, { size: 20 }),
      accent: 170,
      onClick: () => setSection("plan")
    }
  ), /* @__PURE__ */ React.createElement(
    SectionTile,
    {
      title: t("prog.tile_diary_t"),
      desc: t("prog.tile_diary_d"),
      icon: /* @__PURE__ */ React.createElement(Icons.calendar, { size: 20 }),
      accent: 140,
      onClick: () => setSection("diary"),
      right: /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)" } }, "47")
    }
  ), /* @__PURE__ */ React.createElement(
    SectionTile,
    {
      title: t("prog.tile_challenges_t"),
      desc: t("prog.tile_challenges_d"),
      icon: /* @__PURE__ */ React.createElement(Icons.trophy, { size: 20 }),
      accent: 50,
      onClick: () => setSection("challenges"),
      right: /* @__PURE__ */ React.createElement("span", { className: "chip", style: { background: "var(--lime)", color: "var(--ink)" } }, "2 ", t("prog.new"))
    }
  )));
}
function MiniStat({ label, value, sub }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: 14,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em" } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 26, fontWeight: 200, letterSpacing: "-0.02em", marginTop: 4 } }, value), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", marginTop: 2 } }, sub));
}
function SectionTile({ title, desc, icon, accent = 150, onClick, right }) {
  return /* @__PURE__ */ React.createElement("button", { onClick, style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: 16,
    borderRadius: 18,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 42,
    height: 42,
    borderRadius: 12,
    background: `oklch(0.93 0.05 ${accent})`,
    color: `oklch(0.32 0.08 ${accent})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, icon), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 400 } }, title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, desc)), right, /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 16, stroke: "var(--ink-3)" }));
}
function TrainingPlan({ onBack }) {
  const t = useT();
  const slots = {
    "Mon-Evening": 1,
    "Tue-Evening": 1,
    "Wed-Morning": 1,
    "Fri-Evening": 1,
    "Sat-Morning": 1
  };
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayLabels = { Mon: t("day.mon"), Tue: t("day.tue"), Wed: t("day.wed"), Thu: t("day.thu"), Fri: t("day.fri"), Sat: t("day.sat"), Sun: t("day.sun") };
  const slotNames = ["Morning", "Lunch", "Evening"];
  const slotLabels = { Morning: t("common.morning"), Lunch: t("common.lunch"), Evening: t("common.evening") };
  return /* @__PURE__ */ React.createElement("div", { className: "screen-scroll" }, /* @__PURE__ */ React.createElement(Header, { title: t("prog.tile_plan_t"), onBack }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 18px" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontWeight: 200, fontSize: 22, marginTop: 4, letterSpacing: "-0.02em" } }, t("plan.hero1"), " ", /* @__PURE__ */ React.createElement("em", { className: "serif", style: { fontStyle: "italic", color: "var(--forest)", fontWeight: 400 } }, t("plan.hero2")), " ", t("plan.hero3")), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-3)", fontSize: 13, marginTop: 8 } }, t("plan.hero_sub"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 20px", display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(PrefRow, { label: t("plan.motivation"), value: t("plan.motivation_val") }), /* @__PURE__ */ React.createElement(PrefRow, { label: t("plan.weekly_target"), value: t("plan.weekly_target_val") }), /* @__PURE__ */ React.createElement(PrefRow, { label: t("plan.preferred_level"), value: t("plan.preferred_level_val") }), /* @__PURE__ */ React.createElement(PrefRow, { label: t("plan.max_distance"), value: t("plan.max_distance_val") })), /* @__PURE__ */ React.createElement("h4", { style: { padding: "24px 20px 10px" } }, t("plan.schedule")), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 18,
    padding: "14px 10px"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "auto repeat(3, 1fr)", gap: 4 } }, /* @__PURE__ */ React.createElement("div", null), slotNames.map((s) => /* @__PURE__ */ React.createElement("div", { key: s, style: {
    fontSize: 10,
    color: "var(--ink-3)",
    textAlign: "center",
    paddingBottom: 6,
    letterSpacing: "0.04em",
    textTransform: "uppercase"
  } }, slotLabels[s])), days.map((d) => /* @__PURE__ */ React.createElement(React.Fragment, { key: d }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-2)", display: "flex", alignItems: "center", paddingRight: 4 } }, dayLabels[d]), slotNames.map((s) => {
    const on = slots[d + "-" + s];
    return /* @__PURE__ */ React.createElement("div", { key: s, style: {
      height: 28,
      borderRadius: 8,
      background: on ? "var(--forest)" : "var(--paper-2)",
      border: "0.5px solid " + (on ? "var(--forest)" : "var(--hair)")
    } });
  })))))), /* @__PURE__ */ React.createElement("h4", { style: { padding: "24px 20px 10px" } }, t("plan.favourite_sports")), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", gap: 10, flexWrap: "wrap" } }, mockUser.sports.map((s) => /* @__PURE__ */ React.createElement("div", { key: s, style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 14px 8px 8px",
    borderRadius: 999,
    background: "var(--paper)",
    border: "0.5px solid var(--hair-2)"
  } }, sportTile(s, 28), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 400 } }, t("sport." + s)))), /* @__PURE__ */ React.createElement("button", { style: {
    padding: "8px 14px",
    borderRadius: 999,
    background: "transparent",
    border: "0.5px dashed var(--hair-2)",
    color: "var(--ink-3)",
    fontSize: 13,
    fontWeight: 400,
    cursor: "pointer",
    fontFamily: "inherit",
    display: "flex",
    alignItems: "center",
    gap: 4
  } }, /* @__PURE__ */ React.createElement(Icons.plus, { size: 14, stroke: "var(--ink-3)" }), " ", t("common.add"))), /* @__PURE__ */ React.createElement("h4", { style: { padding: "24px 20px 10px" } }, t("plan.body")), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "0 20px 24px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10
  } }, /* @__PURE__ */ React.createElement(BodyCard, { label: t("q4.weight"), value: "72", unit: "kg", trend: "-1.2kg / 4w" }), /* @__PURE__ */ React.createElement(BodyCard, { label: t("q4.height"), value: "178", unit: "cm" })), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 32px" } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", style: { width: "100%" } }, /* @__PURE__ */ React.createElement(Icons.edit, { size: 16, stroke: "var(--forest)" }), " ", t("plan.edit_plan"))));
}
function PrefRow({ label, value }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 16px",
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 14
  } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em" } }, label), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontWeight: 400, textAlign: "right" } }, value));
}
function BodyCard({ label, value, unit, trend }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: 14,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em" } }, label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 4, marginTop: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 28, fontWeight: 200, letterSpacing: "-0.02em" } }, value), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 12, color: "var(--ink-3)" } }, unit)), trend && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--forest)", marginTop: 4 } }, trend));
}
function ActivityDiary({ onBack, openEntry }) {
  const t = useT();
  const entries = [
    { date: "Mon \xB7 May 27", sport: "Padel", t: "19:00", dur: "1h 30m", loc: "Les Corts", ppl: 3, partners: ["Marta P.", "Joan L.", "Sara M."] },
    { date: "Sat \xB7 May 25", sport: "Running", t: "08:00", dur: "42 min", loc: "Ciutadella 5K", ppl: 1, partners: [] },
    { date: "Thu \xB7 May 23", sport: "Yoga", t: "07:30", dur: "55 min", loc: "Studio Lin", ppl: 8, partners: ["Lin W.", "Eva R.", "Tomi B."] },
    { date: "Tue \xB7 May 21", sport: "Padel", t: "20:00", dur: "1h 15m", loc: "Padel Tres", ppl: 3, partners: ["Marta P.", "Joan L.", "Pep G."] },
    { date: "Sun \xB7 May 19", sport: "Hiking", t: "09:00", dur: "3h 10m", loc: "Collserola", ppl: 4, partners: ["Dani T.", "Lex F.", "Iv\xE1n S.", "Bru K."] },
    { date: "Fri \xB7 May 17", sport: "Cycling", t: "17:30", dur: "1h 50m", loc: "Montju\xEFc", ppl: 2, partners: ["Dani T.", "Lex F."] },
    { date: "Wed \xB7 May 15", sport: "Yoga", t: "07:30", dur: "50 min", loc: "Studio Lin", ppl: 6, partners: ["Lin W.", "Eva R."] }
  ];
  const grouped = {
    [t("diary.this_week")]: entries.slice(0, 2),
    [t("diary.last_week")]: entries.slice(2, 5),
    [t("diary.earlier")]: entries.slice(5)
  };
  return /* @__PURE__ */ React.createElement("div", { className: "screen-scroll" }, /* @__PURE__ */ React.createElement(Header, { title: t("diary.title"), onBack, right: /* @__PURE__ */ React.createElement("button", { style: { background: "none", border: "none", cursor: "pointer", color: "var(--ink-2)" } }, /* @__PURE__ */ React.createElement(Icons.filter, { size: 20 })) }), /* @__PURE__ */ React.createElement("div", { style: {
    margin: "4px 20px 16px",
    padding: 16,
    background: "var(--mint2)",
    border: "0.5px solid var(--hair)",
    borderRadius: 18,
    display: "flex",
    alignItems: "baseline",
    gap: 16
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em" } }, t("diary.total")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 28, fontWeight: 200, letterSpacing: "-0.02em" } }, "47"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)" } }, t("common.activities"))), /* @__PURE__ */ React.createElement("div", { style: { width: 0.5, alignSelf: "stretch", background: "var(--hair)" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em" } }, t("diary.hours")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 28, fontWeight: 200, letterSpacing: "-0.02em" } }, "62"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)" } }, t("diary.moved"))), /* @__PURE__ */ React.createElement("div", { style: { width: 0.5, alignSelf: "stretch", background: "var(--hair)" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em" } }, t("diary.sports")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 28, fontWeight: 200, letterSpacing: "-0.02em" } }, "7"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)" } }, t("diary.tried")))), Object.entries(grouped).map(([label, items]) => /* @__PURE__ */ React.createElement("div", { key: label }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: "8px 20px 6px",
    fontSize: 11,
    color: "var(--ink-3)",
    textTransform: "uppercase",
    letterSpacing: "0.04em"
  } }, label), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px" } }, items.map((e, i) => /* @__PURE__ */ React.createElement("button", { key: i, onClick: () => openEntry && openEntry(e), style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 0",
    background: "none",
    border: "none",
    borderBottom: i < items.length - 1 ? "0.5px solid var(--hair)" : "none",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, sportTile(e.sport, 44), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontWeight: 400 } }, t("sport." + e.sport)), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)" } }, e.dur)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2, display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("span", null, trDate(t, e.date)), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("span", null, e.loc))), e.ppl > 1 && /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 3,
    padding: "4px 8px",
    background: "var(--mint)",
    borderRadius: 999,
    color: "var(--forest)",
    fontSize: 11,
    fontWeight: 400
  } }, /* @__PURE__ */ React.createElement(Icons.user, { size: 11, stroke: "var(--forest)" }), e.ppl)))))), /* @__PURE__ */ React.createElement("div", { style: { height: 24 } }));
}
function Challenges({ onBack, openChallenge }) {
  const t = useT();
  const challenges = [
    { t: t("ch.five_t"), d: t("ch.five_d"), prog: 3, of: 5, reward: t("ch.five_r"), accent: 145 },
    { t: t("ch.social_t"), d: t("ch.social_d"), prog: 2, of: 3, reward: t("ch.social_r"), accent: 30 },
    { t: t("ch.morning_t"), d: t("ch.morning_d"), prog: 1, of: 3, reward: t("ch.morning_r"), accent: 60 },
    { t: t("ch.cross_t"), d: t("ch.cross_d"), prog: 3, of: 3, reward: t("ch.cross_r"), accent: 270, done: true }
  ];
  const unlocked = [
    { t: t("ch.u1_t"), when: "Apr 12", reward: t("ch.u1_r") },
    { t: t("ch.u2_t"), when: "May 03", reward: t("ch.u2_r") }
  ];
  return /* @__PURE__ */ React.createElement("div", { className: "screen-scroll" }, /* @__PURE__ */ React.createElement(Header, { title: t("ch.title"), onBack }), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 20px 12px" } }, /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-3)", fontSize: 13, marginTop: 4 } }, t("ch.sub"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 0", display: "flex", flexDirection: "column", gap: 12 } }, challenges.map((c, i) => {
    const pct = c.prog / c.of * 100;
    return /* @__PURE__ */ React.createElement("button", { key: i, onClick: () => openChallenge && openChallenge(c), style: {
      padding: 16,
      borderRadius: 18,
      background: c.done ? "var(--forest)" : "var(--paper)",
      border: c.done ? "none" : "0.5px solid var(--hair)",
      color: c.done ? "var(--paper)" : "var(--ink)",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      fontFamily: "inherit",
      textAlign: "left",
      width: "100%"
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 6 } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: c.done ? "oklch(0.55 0.08 145)" : `oklch(0.92 0.05 ${c.accent})`,
      color: c.done ? "var(--paper)" : `oklch(0.32 0.08 ${c.accent})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, c.done ? /* @__PURE__ */ React.createElement(Icons.check, { size: 16, sw: 2.2 }) : /* @__PURE__ */ React.createElement(Icons.trophy, { size: 14 })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, opacity: c.done ? 0.75 : 1, color: c.done ? "var(--paper)" : "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em" } }, c.done ? t("common.completed") : t("common.active"))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 17, fontWeight: 400, letterSpacing: "-0.01em" } }, c.t), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: c.done ? "oklch(0.85 0.06 145)" : "var(--ink-3)", marginTop: 2 } }, c.d)), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 28, fontWeight: 200, letterSpacing: "-0.02em" } }, c.prog, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 13, opacity: 0.6 } }, "/", c.of)))), /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: 14,
      height: 4,
      borderRadius: 99,
      background: c.done ? "oklch(0.45 0.08 145)" : "var(--hair)",
      overflow: "hidden"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      height: "100%",
      width: pct + "%",
      background: c.done ? "var(--lime)" : "var(--forest)",
      transition: "width 0.4s ease"
    } })), /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: 12,
      padding: "8px 12px",
      borderRadius: 10,
      background: c.done ? "oklch(0.45 0.08 145)" : "var(--mint2)",
      color: c.done ? "var(--paper)" : "var(--ink-2)",
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12
    } }, /* @__PURE__ */ React.createElement(Icons.spark, { size: 14, stroke: c.done ? "var(--lime)" : "var(--forest)" }), /* @__PURE__ */ React.createElement("span", null, t("ch.reward_label"), " \xB7 ", /* @__PURE__ */ React.createElement("strong", { style: { fontWeight: 400 } }, c.reward))));
  })), /* @__PURE__ */ React.createElement("h4", { style: { padding: "28px 20px 10px" } }, t("ch.unlocked_rewards")), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 32px" } }, unlocked.map((u, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 0",
    borderBottom: i < unlocked.length - 1 ? "0.5px solid var(--hair)" : "none"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 36,
    height: 36,
    borderRadius: 999,
    background: "var(--lime)",
    color: "var(--ink)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.check, { size: 18, sw: 2.2 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, u.t), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, u.when, " \xB7 ", u.reward))))));
}
function MonthlyReport({ onBack }) {
  const t = useT();
  const sports = [
    { name: "Padel", sessions: 6, hrs: 9, pct: 100 },
    { name: "Running", sessions: 4, hrs: 3, pct: 66 },
    { name: "Yoga", sessions: 3, hrs: 2.5, pct: 50 },
    { name: "Hiking", sessions: 1, hrs: 3, pct: 16 }
  ];
  return /* @__PURE__ */ React.createElement("div", { className: "screen-scroll" }, /* @__PURE__ */ React.createElement(Header, { title: t("rep.title"), onBack, right: /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 12, color: "var(--ink-3)" } }, t("rep.may")) }), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 20px 24px" } }, /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-3)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.04em" } }, t("rep.you_moved")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 10, marginTop: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 80, fontWeight: 200, letterSpacing: "-0.04em", lineHeight: 0.9, color: "var(--forest)" } }, "14"), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 14, color: "var(--ink-3)" } }, t("common.activities"))), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 12, fontSize: 14, color: "var(--ink-2)" } }, t("rep.note", { n: "3" }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, /* @__PURE__ */ React.createElement(BigStat, { label: t("rep.total_time"), value: "17.5", unit: "h" }), /* @__PURE__ */ React.createElement(BigStat, { label: t("rep.avg_week"), value: "3.5", unit: t("res.unit_sessions") }), /* @__PURE__ */ React.createElement(BigStat, { label: t("prog.people_met"), value: "8", unit: t("rep.people_new") }), /* @__PURE__ */ React.createElement(BigStat, { label: t("rep.streak_high"), value: "12", unit: t("rep.days_unit") })), /* @__PURE__ */ React.createElement("h4", { style: { padding: "28px 20px 12px" } }, t("rep.most_played")), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", flexDirection: "column", gap: 12 } }, sports.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.name, style: { display: "flex", alignItems: "center", gap: 12 } }, sportTile(s.name, 36), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontWeight: 400 } }, t("sport." + s.name)), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)" } }, s.sessions, " \xB7 ", s.hrs, "h")), /* @__PURE__ */ React.createElement("div", { className: "pbar", style: { marginTop: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { width: s.pct + "%" } })))))), /* @__PURE__ */ React.createElement("h4", { style: { padding: "28px 20px 12px" } }, t("rep.daily")), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 18,
    padding: 14
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 } }, Array(31).fill(0).map((_, i) => {
    const intensity = [0, 1, 0, 2, 1, 3, 0, 1, 1, 2, 0, 0, 1, 3, 2, 1, 0, 2, 1, 0, 1, 0, 2, 1, 1, 0, 3, 1, 2, 0, 1][i];
    const colors = [
      "var(--paper-2)",
      "oklch(0.92 0.04 145)",
      "oklch(0.78 0.08 145)",
      "oklch(0.58 0.10 145)"
    ];
    return /* @__PURE__ */ React.createElement("div", { key: i, style: {
      aspectRatio: "1",
      borderRadius: 5,
      background: colors[intensity],
      border: "0.5px solid var(--hair)"
    }, title: `May ${i + 1}` });
  })), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
    fontSize: 11,
    color: "var(--ink-3)"
  } }, /* @__PURE__ */ React.createElement("span", null, t("rep.less")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 3 } }, ["var(--paper-2)", "oklch(0.92 0.04 145)", "oklch(0.78 0.08 145)", "oklch(0.58 0.10 145)"].map((c, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { width: 11, height: 11, borderRadius: 3, background: c, border: "0.5px solid var(--hair)" } }))), /* @__PURE__ */ React.createElement("span", null, t("rep.more"))))), /* @__PURE__ */ React.createElement("h4", { style: { padding: "28px 20px 12px" } }, t("rep.new_people")), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 32px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 18,
    padding: 16
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "flex-start" } }, ["Iv\xE1n S.", "Lola D.", "Tomi B.", "Mei C.", "Bru K.", "Pep G.", "Nico A.", "Sara M."].map((p) => /* @__PURE__ */ React.createElement("div", { key: p, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: 60 } }, /* @__PURE__ */ React.createElement(Avatar, { name: p, size: 42 }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--ink-2)", textAlign: "center" } }, p))))), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", style: { width: "100%", marginTop: 14 } }, t("rep.share_report"))));
}
function BigStat({ label, value, unit }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: 16,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em" } }, label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 4, marginTop: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 30, fontWeight: 200, letterSpacing: "-0.02em" } }, value), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 12, color: "var(--ink-3)" } }, unit)));
}
Object.assign(window, {
  ProgressTab,
  MiniStat,
  SectionTile,
  TrainingPlan,
  PrefRow,
  BodyCard,
  ActivityDiary,
  Challenges,
  MonthlyReport,
  BigStat
});
