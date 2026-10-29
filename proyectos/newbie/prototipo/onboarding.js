function SplashScreen({ onNext }) {
  const t = useT();
  const { lang, setLang } = useLang();
  const { theme, toggle } = useTheme();
  return /* @__PURE__ */ React.createElement("div", { className: "screen", style: {
    background: "linear-gradient(180deg, var(--mint) 0%, var(--paper) 60%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 32
  } }, /* @__PURE__ */ React.createElement("button", { onClick: toggle, "aria-label": "Toggle theme", style: {
    position: "absolute",
    top: 54,
    left: 20,
    width: 36,
    height: 36,
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    cursor: "pointer",
    color: "var(--ink)"
  } }, theme === "dark" ? /* @__PURE__ */ React.createElement(Icons.sun, { size: 17, stroke: "var(--ink)" }) : /* @__PURE__ */ React.createElement(Icons.moon, { size: 16, stroke: "var(--ink)" })), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: 56,
    right: 20,
    display: "flex",
    gap: 2,
    padding: 3,
    borderRadius: 999,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)"
  } }, ["en", "es"].map((code) => {
    const on = lang === code;
    return /* @__PURE__ */ React.createElement("button", { key: code, onClick: () => setLang(code), style: {
      padding: "5px 12px",
      borderRadius: 999,
      border: "none",
      background: on ? "var(--forest)" : "transparent",
      color: on ? "var(--paper)" : "var(--ink-2)",
      fontFamily: "inherit",
      fontSize: 12,
      fontWeight: on ? 500 : 400,
      cursor: "pointer",
      letterSpacing: "0.02em"
    } }, code.toUpperCase());
  })), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement(NewbieLogo, { size: 48 }), /* @__PURE__ */ React.createElement("p", { style: {
    marginTop: 14,
    color: "var(--ink-2)",
    fontSize: 14,
    fontFamily: "Manrope",
    fontWeight: 300,
    letterSpacing: "0.02em"
  } }, t("splash.tagline"))), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 56, left: 24, right: 24, display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => onNext("onb_intro") }, t("splash.get_started")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", onClick: () => onNext("login") }, t("splash.have_account"))));
}
function OnboardIntro({ onNext, onBack, onExplore }) {
  const t = useT();
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { onBack, title: "" }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "8px 24px 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24 } }, /* @__PURE__ */ React.createElement("h1", { style: { fontWeight: 200, fontSize: 32, letterSpacing: "-0.03em" } }, t("onb.intro_title")), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 14, color: "var(--ink-2)", fontSize: 15, fontWeight: 400, lineHeight: 1.55 } }, t("onb.intro_sub"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 36, display: "flex", flexDirection: "column", gap: 14 } }, [
    { t: t("onb.intro_item_personality_t"), s: t("onb.intro_item_personality_s"), i: /* @__PURE__ */ React.createElement(Icons.spark, { size: 20 }) },
    { t: t("onb.intro_item_schedule_t"), s: t("onb.intro_item_schedule_s"), i: /* @__PURE__ */ React.createElement(Icons.calendar, { size: 20 }) },
    { t: t("onb.intro_item_sports_t"), s: t("onb.intro_item_sports_s"), i: /* @__PURE__ */ React.createElement(Icons.target, { size: 20 }) },
    { t: t("onb.intro_item_goals_t"), s: t("onb.intro_item_goals_s"), i: /* @__PURE__ */ React.createElement(Icons.trophy, { size: 20 }) }
  ].map((it, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "14px 4px",
    borderBottom: "0.5px solid var(--hair)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 36,
    height: 36,
    borderRadius: 10,
    background: "var(--mint)",
    color: "var(--forest)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, it.i), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 400, fontSize: 15 } }, it.t), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-3)", fontSize: 13, marginTop: 2 } }, it.s)), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: "ui-monospace, monospace",
    fontSize: 11,
    color: "var(--ink-3)"
  } }, "0", i + 1))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 24px 40px" } }, /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-3)", fontSize: 12, marginBottom: 12, textAlign: "center" } }, t("onb.intro_takes")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { width: "100%" }, onClick: () => onNext("onb_q1") }, t("onb.intro_start")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", style: { width: "100%", marginTop: 8 }, onClick: () => onExplore && onExplore() }, t("onb.explore_first"))));
}
function QuizStep({ step, total, title, subtitle, onBack, onNext, canNext, children, footerNote }) {
  const t = useT();
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "54px 20px 14px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 } }, /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: { background: "transparent", border: "none", padding: 4, cursor: "pointer", color: "var(--ink)" } }, /* @__PURE__ */ React.createElement(Icons.arrow_left, { size: 22 })), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)" } }, String(step).padStart(2, "0"), " / ", String(total).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { width: 30 } })), /* @__PURE__ */ React.createElement("div", { className: "pbar", style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${step / total * 100}%` } })), /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 28, fontWeight: 200, letterSpacing: "-0.03em", lineHeight: 1.15 } }, title), subtitle && /* @__PURE__ */ React.createElement("p", { style: { marginTop: 8, color: "var(--ink-2)", fontSize: 14 } }, subtitle)), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "8px 20px 20px" } }, children), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 20px 40px", background: "var(--paper)" } }, footerNote && /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-3)", fontSize: 12, marginBottom: 10, textAlign: "center" } }, footerNote), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-primary",
      style: { width: "100%", opacity: canNext ? 1 : 0.4 },
      disabled: !canNext,
      onClick: onNext
    },
    t("common.continue")
  )));
}
function OptionButton({ selected, onClick, children, meta, multi }) {
  return /* @__PURE__ */ React.createElement("button", { onClick, style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "16px 18px",
    width: "100%",
    textAlign: "left",
    borderRadius: 16,
    background: selected ? "var(--mint)" : "var(--paper)",
    border: "0.5px solid " + (selected ? "var(--forest)" : "var(--hair-2)"),
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "all 0.2s ease",
    color: "var(--ink)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 22,
    height: 22,
    borderRadius: multi ? 6 : "50%",
    border: "1.5px solid " + (selected ? "var(--forest)" : "var(--hair-2)"),
    background: selected ? "var(--forest)" : "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  } }, selected && /* @__PURE__ */ React.createElement(Icons.check, { size: 14, stroke: "var(--paper)", sw: 2.2 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 400 } }, children), meta && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2, fontWeight: 400 } }, meta)));
}
function Q1Motivation({ data, setData, onBack, onNext }) {
  const t = useT();
  const opts = [
    ["compete", t("q1.compete_l"), t("q1.compete_m")],
    ["social", t("q1.social_l"), t("q1.social_m")],
    ["health", t("q1.health_l"), t("q1.health_m")],
    ["explore", t("q1.explore_l"), t("q1.explore_m")]
  ];
  const v = data.motivation;
  return /* @__PURE__ */ React.createElement(
    QuizStep,
    {
      step: 1,
      total: 5,
      title: t("q1.title"),
      onBack,
      onNext,
      canNext: !!v
    },
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, opts.map(([k, l, m]) => /* @__PURE__ */ React.createElement(OptionButton, { key: k, selected: v === k, onClick: () => setData({ motivation: k }), meta: m }, l)))
  );
}
function Q2Schedule({ data, setData, onBack, onNext }) {
  const t = useT();
  const dayKeys = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayLabels = { Mon: t("day.mon"), Tue: t("day.tue"), Wed: t("day.wed"), Thu: t("day.thu"), Fri: t("day.fri"), Sat: t("day.sat"), Sun: t("day.sun") };
  const slotKeys = ["Morning", "Lunch", "Evening"];
  const slotLabels = { Morning: t("common.morning"), Lunch: t("common.lunch"), Evening: t("common.evening") };
  const days = dayKeys;
  const slots = slotKeys;
  const sel = data.schedule || {};
  const toggle = (d, s) => {
    const k = d + "-" + s;
    const next = { ...sel, [k]: !sel[k] };
    setData({ schedule: next });
  };
  const count = Object.values(sel).filter(Boolean).length;
  return /* @__PURE__ */ React.createElement(
    QuizStep,
    {
      step: 2,
      total: 5,
      title: t("q2.title"),
      subtitle: t("q2.sub"),
      onBack,
      onNext,
      canNext: count >= 1,
      footerNote: count > 0 ? `${count} ${count === 1 ? t("q2.slots_selected") : t("q2.slots_selected_plural")}` : t("q2.pick_at_least_one")
    },
    /* @__PURE__ */ React.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: "auto repeat(3, 1fr)",
      gap: 6,
      marginTop: 4
    } }, /* @__PURE__ */ React.createElement("div", null), slots.map((s) => /* @__PURE__ */ React.createElement("div", { key: s, style: {
      fontSize: 11,
      color: "var(--ink-3)",
      textAlign: "center",
      paddingBottom: 6,
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    } }, slotLabels[s])), days.map((d) => /* @__PURE__ */ React.createElement(React.Fragment, { key: d }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--ink-2)", display: "flex", alignItems: "center", paddingRight: 6 } }, dayLabels[d]), slots.map((s) => {
      const k = d + "-" + s;
      const on = sel[k];
      return /* @__PURE__ */ React.createElement("button", { key: s, onClick: () => toggle(d, s), style: {
        height: 46,
        borderRadius: 12,
        cursor: "pointer",
        background: on ? "var(--forest)" : "var(--paper)",
        color: on ? "var(--paper)" : "var(--ink-3)",
        border: "0.5px solid " + (on ? "var(--forest)" : "var(--hair-2)"),
        fontFamily: "inherit",
        fontSize: 13,
        fontWeight: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      } }, on && /* @__PURE__ */ React.createElement(Icons.check, { size: 16, stroke: "var(--paper)", sw: 2 }));
    }))))
  );
}
function Q3Sports({ data, setData, onBack, onNext }) {
  const t = useT();
  const sports = Object.keys(sportThemes);
  const sel = data.sports || [];
  const toggle = (s) => {
    let next;
    if (sel.includes(s)) next = sel.filter((x) => x !== s);
    else if (sel.length < 5) next = [...sel, s];
    else next = sel;
    setData({ sports: next });
  };
  return /* @__PURE__ */ React.createElement(
    QuizStep,
    {
      step: 3,
      total: 5,
      title: t("q3.title"),
      subtitle: t("q3.sub"),
      onBack,
      onNext,
      canNext: sel.length >= 1,
      footerNote: `${sel.length} ${t("q3.selected_of")}`
    },
    /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, sports.map((s) => {
      const on = sel.includes(s);
      return /* @__PURE__ */ React.createElement("button", { key: s, onClick: () => toggle(s), style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: 12,
        borderRadius: 14,
        background: on ? "var(--mint)" : "var(--paper)",
        border: "0.5px solid " + (on ? "var(--forest)" : "var(--hair-2)"),
        cursor: "pointer",
        fontFamily: "inherit",
        color: "var(--ink)"
      } }, sportTile(s, 36), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 400, textAlign: "left" } }, t("sport." + s)));
    }))
  );
}
function Q4Body({ data, setData, onBack, onNext }) {
  var _a, _b;
  const t = useT();
  const w = (_a = data.weight) != null ? _a : 72;
  const h = (_b = data.height) != null ? _b : 178;
  return /* @__PURE__ */ React.createElement(
    QuizStep,
    {
      step: 4,
      total: 6,
      title: t("q4.title"),
      subtitle: t("q4.sub"),
      onBack,
      onNext,
      canNext: true
    },
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 24, marginTop: 8 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 } }, /* @__PURE__ */ React.createElement("h4", { style: { color: "var(--ink-3)" } }, t("q4.weight")), /* @__PURE__ */ React.createElement("div", { style: { display: "baseline", display: "flex", alignItems: "baseline", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 32, fontWeight: 200, letterSpacing: "-0.02em" } }, w), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: "var(--ink-3)", fontSize: 13 } }, "kg"))), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "range",
        min: "40",
        max: "140",
        value: w,
        onChange: (e) => setData({ weight: +e.target.value }),
        style: { width: "100%", accentColor: "var(--forest)" }
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ink-3)" }, className: "mono" }, /* @__PURE__ */ React.createElement("span", null, "40"), /* @__PURE__ */ React.createElement("span", null, "140"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 } }, /* @__PURE__ */ React.createElement("h4", { style: { color: "var(--ink-3)" } }, t("q4.height")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 32, fontWeight: 200, letterSpacing: "-0.02em" } }, h), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: "var(--ink-3)", fontSize: 13 } }, "cm"))), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "range",
        min: "140",
        max: "210",
        value: h,
        onChange: (e) => setData({ height: +e.target.value }),
        style: { width: "100%", accentColor: "var(--forest)" }
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ink-3)" }, className: "mono" }, /* @__PURE__ */ React.createElement("span", null, "140"), /* @__PURE__ */ React.createElement("span", null, "210"))), /* @__PURE__ */ React.createElement("div", { style: {
      padding: 14,
      borderRadius: 14,
      background: "var(--mint2)",
      fontSize: 13,
      color: "var(--ink-2)",
      lineHeight: 1.5,
      display: "flex",
      gap: 10
    } }, /* @__PURE__ */ React.createElement(Icons.lock, { size: 18, stroke: "var(--forest)" }), /* @__PURE__ */ React.createElement("span", null, t("q4.never_shared"))))
  );
}
function Q5Goals({ data, setData, onBack, onNext }) {
  const t = useT();
  const opts = [
    ["consistent", t("q5.consistent_l"), t("q5.consistent_m")],
    ["lose", t("q5.lose_l"), t("q5.lose_m")],
    ["strength", t("q5.strength_l"), t("q5.strength_m")],
    ["friends", t("q5.friends_l"), t("q5.friends_m")],
    ["compete", t("q5.compete_l"), t("q5.compete_m")],
    ["relax", t("q5.relax_l"), t("q5.relax_m")]
  ];
  const sel = data.goals || [];
  const toggle = (k) => {
    let next;
    if (sel.includes(k)) next = sel.filter((x) => x !== k);
    else if (sel.length < 3) next = [...sel, k];
    else next = sel;
    setData({ goals: next });
  };
  return /* @__PURE__ */ React.createElement(
    QuizStep,
    {
      step: 4,
      total: 5,
      title: t("q5.title"),
      subtitle: t("q5.sub"),
      onBack,
      onNext,
      canNext: sel.length >= 1,
      footerNote: `${sel.length} ${t("q5.of3")}`
    },
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, opts.map(([k, l, m]) => /* @__PURE__ */ React.createElement(OptionButton, { key: k, multi: true, selected: sel.includes(k), onClick: () => toggle(k), meta: m }, l)))
  );
}
function Q6Location({ data, setData, onBack, onNext }) {
  var _a;
  const t = useT();
  const cities = [
    { c: "Barcelona", r: "Spain" },
    { c: "Madrid", r: "Spain" },
    { c: "Valencia", r: "Spain" },
    { c: "Sevilla", r: "Spain" },
    { c: "Bilbao", r: "Spain" },
    { c: "Lisbon", r: "Portugal" },
    { c: "Paris", r: "France" },
    { c: "London", r: "UK" },
    { c: "Berlin", r: "Germany" },
    { c: "Amsterdam", r: "Netherlands" },
    { c: "New York", r: "USA" }
  ];
  const [query, setQuery] = React.useState(data.cityQuery || "");
  const city = data.city;
  const radius = (_a = data.radius) != null ? _a : 5;
  const filtered = cities.filter(
    (c) => !query || c.c.toLowerCase().includes(query.toLowerCase()) || c.r.toLowerCase().includes(query.toLowerCase())
  );
  return /* @__PURE__ */ React.createElement(
    QuizStep,
    {
      step: 5,
      total: 5,
      title: t("q6.title"),
      subtitle: t("q6.sub"),
      onBack,
      onNext,
      canNext: !!city,
      footerNote: city ? `${city} \xB7 ${t("q6.within")} ${radius}km` : t("q6.pick_city")
    },
    /* @__PURE__ */ React.createElement("button", { onClick: () => {
      setData({ city: "Barcelona", cityRegion: "Spain", cityQuery: "" });
      setQuery("");
    }, style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 16px",
      borderRadius: 14,
      background: "var(--mint)",
      border: "0.5px solid var(--forest)",
      cursor: "pointer",
      fontFamily: "inherit",
      color: "var(--ink)",
      textAlign: "left",
      marginBottom: 14
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      background: "var(--forest)",
      color: "var(--paper)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, /* @__PURE__ */ React.createElement(Icons.pin, { size: 18, stroke: "var(--paper)", fill: "var(--lime)", sw: 1.2 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, t("q6.use_current")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, t("q6.detected"))), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 16, stroke: "var(--ink-3)" })),
    /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 14px",
      borderRadius: 14,
      background: "var(--paper-2)",
      border: "0.5px solid var(--hair-2)",
      marginBottom: 14
    } }, /* @__PURE__ */ React.createElement(Icons.search, { size: 18, stroke: "var(--ink-3)" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: query,
        onChange: (e) => setQuery(e.target.value),
        placeholder: t("q6.search_city"),
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
    )),
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6, marginBottom: 22 } }, filtered.slice(0, 6).map((c) => {
      const on = city === c.c;
      return /* @__PURE__ */ React.createElement("button", { key: c.c, onClick: () => setData({ city: c.c, cityRegion: c.r }), style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 14px",
        borderRadius: 12,
        background: on ? "var(--mint)" : "var(--paper)",
        border: "0.5px solid " + (on ? "var(--forest)" : "var(--hair-2)"),
        cursor: "pointer",
        fontFamily: "inherit",
        color: "var(--ink)",
        textAlign: "left"
      } }, /* @__PURE__ */ React.createElement(Icons.pin, { size: 16, stroke: on ? "var(--forest)" : "var(--ink-3)" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: on ? 500 : 400 } }, c.c), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", marginTop: 1 } }, c.r)), on && /* @__PURE__ */ React.createElement(Icons.check, { size: 16, stroke: "var(--forest)", sw: 2.2 }));
    }), filtered.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", color: "var(--ink-3)", fontSize: 13, padding: 18 } }, t("common.no_matches"), ' "', query, '".')),
    city && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 } }, /* @__PURE__ */ React.createElement("h4", { style: { color: "var(--ink-3)" } }, t("q6.search_radius")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 28, fontWeight: 200, letterSpacing: "-0.02em" } }, radius), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: "var(--ink-3)", fontSize: 13 } }, "km"))), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "range",
        min: "1",
        max: "30",
        value: radius,
        onChange: (e) => setData({ radius: +e.target.value }),
        style: { width: "100%", accentColor: "var(--forest)" }
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ink-3)" } }, /* @__PURE__ */ React.createElement("span", null, "1km"), /* @__PURE__ */ React.createElement("span", null, "30km")))
  );
}
function OnboardResults({ data, onNext, onBack }) {
  const t = useT();
  const motivationLabel = {
    compete: t("mot.compete"),
    social: t("mot.social"),
    health: t("mot.health"),
    explore: t("mot.explore")
  }[data.motivation] || t("mot.explore");
  const slotCount = data.schedule ? Object.values(data.schedule).filter(Boolean).length : 0;
  const weeklyTarget = Math.min(5, Math.max(2, Math.round(slotCount / 1.5)));
  const sports = (data.sports || []).slice(0, 3);
  const goalsLabel = (data.goals || []).map((g) => ({
    consistent: t("goal.consistent"),
    lose: t("goal.lose"),
    strength: t("goal.strength"),
    friends: t("goal.friends"),
    compete: t("goal.compete"),
    relax: t("goal.relax")
  })[g]).filter(Boolean);
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "54px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: { background: "transparent", border: "none", padding: 4, cursor: "pointer", color: "var(--ink)" } }, /* @__PURE__ */ React.createElement(Icons.arrow_left, { size: 22 })), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)" } }, t("res.youre").toLowerCase()), /* @__PURE__ */ React.createElement("div", { style: { width: 30 } }))), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "20px 20px 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 } }, /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 30, fontWeight: 200, letterSpacing: "-0.03em" } }, t("res.youre"))), /* @__PURE__ */ React.createElement("h1", { className: "serif", style: {
    fontFamily: "Fraunces",
    fontWeight: 300,
    fontSize: 44,
    lineHeight: 1,
    letterSpacing: "-0.02em",
    color: "var(--forest)",
    fontStyle: "italic"
  } }, motivationLabel, "."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 14, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55 } }, t("res.intro_caption")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, /* @__PURE__ */ React.createElement(StatCard, { label: t("res.weekly_target"), value: weeklyTarget, unit: t("res.unit_sessions") }), /* @__PURE__ */ React.createElement(StatCard, { label: t("res.time_slots"), value: slotCount, unit: t("res.unit_open") }), /* @__PURE__ */ React.createElement(StatCard, { label: t("res.your_sports"), value: data.sports && data.sports.length || 3, unit: t("res.unit_picked") }), /* @__PURE__ */ React.createElement(StatCard, { label: t("res.people_meet"), value: "3\u20136", unit: t("res.per_month") })), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 28, marginBottom: 12 } }, t("res.your_sports")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, flexWrap: "wrap" } }, sports.map((s) => /* @__PURE__ */ React.createElement("div", { key: s, style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px 8px 8px",
    borderRadius: 999,
    background: "var(--paper)",
    border: "0.5px solid var(--hair-2)"
  } }, sportTile(s, 28), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 400 } }, t("sport." + s))))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 24, marginBottom: 12 } }, t("res.goals_track")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } }, goalsLabel.map((g) => /* @__PURE__ */ React.createElement("span", { key: g, className: "chip" }, g))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 28, marginBottom: 12 } }, t("res.sample_week")), /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 18,
    padding: 14,
    display: "flex",
    flexDirection: "column",
    gap: 10
  } }, [
    { d: t("day.tue"), t: "19:00", s: sports[0] || "Padel", n: "Doubles \xB7 friendly" },
    { d: t("day.thu"), t: "07:30", s: sports[1] || "Running", n: "Easy 5K" },
    { d: t("day.sat"), t: "10:00", s: sports[2] || "Yoga", n: "Flow in the park" }
  ].slice(0, weeklyTarget).map((r, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)", width: 28 } }, r.d), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)", width: 38 } }, r.t), sportTile(r.s, 32), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 400 } }, t("sport." + r.s)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)" } }, r.n)))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 40px", background: "var(--paper)" } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { width: "100%" }, onClick: () => onNext("signup") }, t("res.save_plan"))));
}
function StatCard({ label, value, unit }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: "14px 16px",
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em" } }, label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 4, marginTop: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 26, fontWeight: 200, letterSpacing: "-0.02em" } }, value), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)" } }, unit)));
}
function SignUp({ onNext, onBack }) {
  const t = useT();
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { onBack, title: "" }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "8px 24px 24px" } }, /* @__PURE__ */ React.createElement("h1", { style: { marginTop: 16, fontSize: 30, fontWeight: 200, letterSpacing: "-0.03em" } }, t("signup.title")), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 8, color: "var(--ink-2)", fontSize: 14 } }, t("signup.sub")), /* @__PURE__ */ React.createElement("button", { onClick: () => onNext("home"), style: {
    marginTop: 28,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "14px 18px",
    borderRadius: 14,
    background: "var(--paper)",
    border: "0.5px solid var(--hair-2)",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 15,
    fontWeight: 400,
    color: "var(--ink)"
  } }, /* @__PURE__ */ React.createElement(Icons.google, { size: 20 }), t("signup.google")), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    margin: "24px 0",
    color: "var(--ink-3)",
    fontSize: 12
  } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 0.5, background: "var(--hair)" } }), /* @__PURE__ */ React.createElement("span", { className: "mono" }, t("signup.or")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 0.5, background: "var(--hair)" } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 12, color: "var(--ink-3)", display: "block", marginBottom: 6 } }, t("signup.name")), /* @__PURE__ */ React.createElement("input", { className: "input", value: name, onChange: (e) => setName(e.target.value), placeholder: "Alex Rivera" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 12, color: "var(--ink-3)", display: "block", marginBottom: 6 } }, t("signup.email")), /* @__PURE__ */ React.createElement("input", { className: "input", type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@email.com" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 12, color: "var(--ink-3)", display: "block", marginBottom: 6 } }, t("signup.password")), /* @__PURE__ */ React.createElement("input", { className: "input", type: "password", placeholder: t("signup.password_hint") }))), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 18, color: "var(--ink-3)", fontSize: 11, lineHeight: 1.55 } }, t("signup.legal"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 24px 40px" } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { width: "100%" }, onClick: () => onNext("home") }, t("signup.create")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", style: { width: "100%", marginTop: 4 }, onClick: () => onNext("home") }, t("common.skip"))));
}
function LogIn({ onBack, onNext, onForgot }) {
  const t = useT();
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { onBack, title: "" }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "8px 24px 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, marginBottom: 24 } }, /* @__PURE__ */ React.createElement(NewbieLogo, { size: 30 })), /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 30, fontWeight: 200, letterSpacing: "-0.03em" } }, t("login.title")), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 8, color: "var(--ink-2)", fontSize: 14 } }, t("login.sub")), /* @__PURE__ */ React.createElement("button", { onClick: () => onNext(), style: {
    marginTop: 28,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "14px 18px",
    borderRadius: 14,
    background: "var(--paper)",
    border: "0.5px solid var(--hair-2)",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 15,
    fontWeight: 400,
    color: "var(--ink)"
  } }, /* @__PURE__ */ React.createElement(Icons.google, { size: 20 }), t("signup.google")), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    margin: "24px 0",
    color: "var(--ink-3)",
    fontSize: 12
  } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 0.5, background: "var(--hair)" } }), /* @__PURE__ */ React.createElement("span", { className: "mono" }, t("signup.or")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 0.5, background: "var(--hair)" } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 12, color: "var(--ink-3)", display: "block", marginBottom: 6 } }, t("signup.email")), /* @__PURE__ */ React.createElement("input", { className: "input", type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@email.com" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 } }, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 12, color: "var(--ink-3)" } }, t("signup.password")), /* @__PURE__ */ React.createElement("button", { onClick: onForgot, style: {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 12,
    color: "var(--forest)",
    fontWeight: 400
  } }, t("login.forgot"))), /* @__PURE__ */ React.createElement("input", { className: "input", type: "password", value: pw, onChange: (e) => setPw(e.target.value), placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" })))), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 24px 40px" } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { width: "100%" }, onClick: () => onNext() }, t("login.submit")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, textAlign: "center", fontSize: 13, color: "var(--ink-3)" } }, t("login.no_account"), " ", /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 13,
    color: "var(--forest)",
    fontWeight: 500
  } }, t("login.create")))));
}
function ForgotPassword({ onBack, onDone }) {
  const t = useT();
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { onBack, title: "" }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "8px 24px 24px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 48,
    height: 48,
    borderRadius: 14,
    background: "var(--mint)",
    color: "var(--forest)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8
  } }, sent ? /* @__PURE__ */ React.createElement(Icons.check, { size: 24, stroke: "var(--forest)", sw: 2 }) : /* @__PURE__ */ React.createElement(Icons.lock, { size: 22, stroke: "var(--forest)" })), /* @__PURE__ */ React.createElement("h1", { style: { marginTop: 18, fontSize: 28, fontWeight: 200, letterSpacing: "-0.03em" } }, sent ? t("forgot.sent_t") : t("forgot.title")), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 10, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55 } }, sent ? t("forgot.sent_s").replace("{email}", email || "you@email.com") : t("forgot.sub")), !sent && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 28 } }, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 12, color: "var(--ink-3)", display: "block", marginBottom: 6 } }, t("signup.email")), /* @__PURE__ */ React.createElement("input", { className: "input", type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@email.com", autoFocus: true }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 24px 40px" } }, sent ? /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { width: "100%" }, onClick: onDone }, t("forgot.back_login")) : /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { width: "100%" }, onClick: () => setSent(true) }, t("forgot.submit"))));
}
Object.assign(window, {
  SplashScreen,
  OnboardIntro,
  LogIn,
  ForgotPassword,
  Q1Motivation,
  Q2Schedule,
  Q3Sports,
  Q4Body,
  Q5Goals,
  Q6Location,
  OnboardResults,
  SignUp
});
