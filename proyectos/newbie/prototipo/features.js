function Stars({ value = 0, onChange, size = 22, readOnly = false, color = "var(--gold, oklch(0.78 0.13 80))" }) {
  const [hover, setHover] = React.useState(0);
  const shown = hover || value;
  return /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", gap: 4 } }, [1, 2, 3, 4, 5].map((n) => {
    const on = n <= shown;
    const Star = on ? Icons.star_fill : Icons.star;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: n,
        disabled: readOnly,
        onMouseEnter: () => !readOnly && setHover(n),
        onMouseLeave: () => !readOnly && setHover(0),
        onClick: () => !readOnly && onChange && onChange(n),
        style: {
          background: "none",
          border: "none",
          padding: 0,
          cursor: readOnly ? "default" : "pointer",
          lineHeight: 0
        }
      },
      /* @__PURE__ */ React.createElement(Star, { size, stroke: on ? "oklch(0.74 0.14 78)" : "var(--hair-2)", sw: 1.5 })
    );
  }));
}
function RatingBar({ pct, label }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)", width: 10, textAlign: "right" } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 6, borderRadius: 99, background: "var(--hair)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: pct + "%", height: "100%", background: "oklch(0.74 0.14 78)", borderRadius: 99 } })));
}
function RateActivityScreen({ activity, onBack, onSubmit }) {
  const t = useT();
  const a = activity || { sport: "Padel", date: "Mon \xB7 May 27", loc: "Les Corts", host: "Marta P.", partners: ["Marta P.", "Joan L.", "Sara M."] };
  const theme = sportThemes[a.sport] || sportThemes.Padel;
  const [overall, setOverall] = React.useState(0);
  const [hostStars, setHostStars] = React.useState(0);
  const [tags, setTags] = React.useState([]);
  const [done, setDone] = React.useState(false);
  const tagList = [
    ["vibe", t("rate.tag_vibe")],
    ["punctual", t("rate.tag_punctual")],
    ["level", t("rate.tag_level")],
    ["organised", t("rate.tag_organised")],
    ["welcoming", t("rate.tag_welcoming")],
    ["repeat", t("rate.tag_repeat")]
  ];
  const toggle = (k) => setTags(tags.includes(k) ? tags.filter((x) => x !== k) : [...tags, k]);
  const players = (a.partners || []).filter((p) => p !== a.host);
  if (done) {
    return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: t("rate.title"), onBack }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "40px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 84,
      height: 84,
      borderRadius: "50%",
      background: "var(--mint)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 24
    } }, /* @__PURE__ */ React.createElement(Icons.check, { size: 40, stroke: "var(--forest)", sw: 2 })), /* @__PURE__ */ React.createElement("h1", { style: { marginTop: 22, fontSize: 26, fontWeight: 200, letterSpacing: "-0.02em" } }, t("rate.thanks_t")), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 10, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55, maxWidth: 280 } }, t("rate.thanks_s")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { marginTop: 28, minWidth: 200 }, onClick: () => onSubmit && onSubmit({ overall, hostStars, tags }) }, t("common.done") || "Done")));
  }
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: t("rate.title"), onBack }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 28px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 12,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16
  } }, sportTile(a.sport, 44), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 400 } }, t("sport." + a.sport)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, trDate(t, a.date), " \xB7 ", a.loc))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 26, marginBottom: 12 } }, t("rate.overall")), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    padding: "20px 0",
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16
  } }, /* @__PURE__ */ React.createElement(Stars, { value: overall, onChange: setOverall, size: 36 }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--ink-3)" } }, t("rate.tap_stars"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22, display: "flex", gap: 8, flexWrap: "wrap" } }, tagList.map(([k, label]) => {
    const on = tags.includes(k);
    return /* @__PURE__ */ React.createElement("button", { key: k, onClick: () => toggle(k), style: {
      padding: "8px 14px",
      borderRadius: 999,
      background: on ? "var(--forest)" : "var(--paper)",
      color: on ? "var(--paper)" : "var(--ink-2)",
      border: "0.5px solid " + (on ? "var(--forest)" : "var(--hair-2)"),
      fontFamily: "inherit",
      fontSize: 13,
      fontWeight: 400,
      cursor: "pointer"
    } }, label);
  })), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 28, marginBottom: 12 } }, t("rate.rate_host")), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 12,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: a.host || "Marta P.", size: 40 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontSize: 14, fontWeight: 400 } }, a.host || "Marta P."), /* @__PURE__ */ React.createElement(Stars, { value: hostStars, onChange: setHostStars, size: 20 })), players.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 24, marginBottom: 12 } }, t("rate.rate_players")), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--paper)", border: "0.5px solid var(--hair)", borderRadius: 16, overflow: "hidden" } }, players.map((p, i) => /* @__PURE__ */ React.createElement(PlayerThumbRow, { key: p, name: p, last: i === players.length - 1, t })))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 24, marginBottom: 10 } }, t("rate.note_label")), /* @__PURE__ */ React.createElement("textarea", { rows: 3, placeholder: t("rate.note_ph"), className: "input", style: { resize: "none", fontFamily: "inherit" } })), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 20px", display: "flex", flexDirection: "column", gap: 6 } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-primary",
      style: { width: "100%", opacity: overall ? 1 : 0.45 },
      disabled: !overall,
      onClick: () => setDone(true)
    },
    t("rate.submit")
  ), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", style: { width: "100%" }, onClick: onBack }, t("rate.skip"))));
}
function PlayerThumbRow({ name, last, t }) {
  const [v, setV] = React.useState(0);
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    borderBottom: last ? "none" : "0.5px solid var(--hair)"
  } }, /* @__PURE__ */ React.createElement(Avatar, { name, size: 36 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontSize: 14, fontWeight: 400 } }, name), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setV(v === 1 ? 0 : 1), style: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    padding: "6px 10px",
    borderRadius: 999,
    background: v === 1 ? "var(--mint)" : "var(--paper-2)",
    border: "0.5px solid " + (v === 1 ? "var(--forest)" : "var(--hair-2)"),
    color: v === 1 ? "var(--forest)" : "var(--ink-3)",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 12
  } }, /* @__PURE__ */ React.createElement(Icons.heart, { size: 13, stroke: v === 1 ? "var(--forest)" : "var(--ink-3)" }), " ", t("rate.thumbs_up"))));
}
function HostReviewsScreen({ hostName, onBack }) {
  const t = useT();
  const name = hostName || "Marta P.";
  const reviews = [
    { who: "Joan L.", stars: 5, when: "May 27", text: t("rev.r1") },
    { who: "Sara M.", stars: 5, when: "May 20", text: t("rev.r2") },
    { who: "Pep G.", stars: 4, when: "May 12", text: t("rev.r3") },
    { who: "Lin W.", stars: 5, when: "May 4", text: t("rev.r4") }
  ];
  const dist = [["5", 86], ["4", 11], ["3", 3], ["2", 0], ["1", 0]];
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: t("rev.title"), onBack }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 28px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, marginTop: 4 } }, /* @__PURE__ */ React.createElement(Avatar, { name, size: 56 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 17, fontWeight: 400 } }, name), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 3, color: "var(--forest)" } }, /* @__PURE__ */ React.createElement(Icons.shield, { size: 14, stroke: "var(--forest)" }))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, t("rev.hosted_events", { n: "14" }), " \xB7 ", t("rev.verified")))), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 18,
    padding: 18,
    borderRadius: 18,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    display: "flex",
    gap: 18,
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 40, fontWeight: 200, letterSpacing: "-0.02em", lineHeight: 1 } }, "4.9"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ React.createElement(Stars, { value: 5, readOnly: true, size: 14 })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", marginTop: 6 } }, t("rev.based_on", { n: "37" }))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 5 } }, dist.map(([l, p]) => /* @__PURE__ */ React.createElement(RatingBar, { key: l, label: l, pct: p })))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 26, marginBottom: 12 } }, t("rev.from_players")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, reviews.map((r, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    padding: 14,
    borderRadius: 16,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement(Avatar, { name: r.who, size: 34 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, r.who), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)" } }, trDate(t, r.when))), /* @__PURE__ */ React.createElement(Stars, { value: r.stars, readOnly: true, size: 13 })), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 10, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5 } }, r.text))))));
}
function RatePromptCard({ activity, onRate, onDismiss }) {
  const t = useT();
  const theme = sportThemes[activity.sport] || sportThemes.Padel;
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 4px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 14,
    borderRadius: 18,
    background: "var(--mint2)",
    border: "0.5px solid var(--hair)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 42,
    height: 42,
    borderRadius: 12,
    flexShrink: 0,
    background: `linear-gradient(135deg, oklch(0.86 0.07 ${theme.h}), oklch(0.72 0.10 ${theme.h}))`,
    color: `oklch(0.22 0.10 ${theme.h})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.star, { size: 20, stroke: `oklch(0.22 0.10 ${theme.h})` })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, t("rate.prompt_t", { sport: t("sport." + activity.sport) })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 1 } }, t("rate.prompt_s"))), /* @__PURE__ */ React.createElement("button", { onClick: onRate, style: {
    padding: "8px 16px",
    borderRadius: 999,
    background: "var(--forest)",
    color: "var(--paper)",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 13,
    fontWeight: 400,
    flexShrink: 0
  } }, t("rate.prompt_cta"))));
}
Object.assign(window, {
  Stars,
  RatingBar,
  RateActivityScreen,
  HostReviewsScreen,
  RatePromptCard
});
