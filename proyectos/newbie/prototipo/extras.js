function AllFriendsScreen({ onBack, openFriend, openChat }) {
  const t = useT();
  const [q, setQ] = React.useState("");
  const list = mockFriends.filter((f) => f.name.toLowerCase().includes(q.toLowerCase()));
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: `${t("friends.title")} \xB7 ${mockFriends.length}`, onBack, right: /* @__PURE__ */ React.createElement("button", { onClick: openChat ? () => openChat(null) : void 0, style: {
    background: "none",
    border: "none",
    padding: 4,
    cursor: "pointer",
    color: "var(--ink-2)"
  } }, /* @__PURE__ */ React.createElement(Icons.plus, { size: 20 })) }), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 20px 12px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 14px",
    borderRadius: 14,
    background: "var(--paper-2)",
    border: "0.5px solid var(--hair-2)"
  } }, /* @__PURE__ */ React.createElement(Icons.search, { size: 18, stroke: "var(--ink-3)" }), /* @__PURE__ */ React.createElement(
    "input",
    {
      value: q,
      onChange: (e) => setQ(e.target.value),
      placeholder: t("soc.search_friends"),
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
  ))), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 28px" } }, list.length === 0 && /* @__PURE__ */ React.createElement(
    EmptyState,
    {
      compact: true,
      icon: /* @__PURE__ */ React.createElement(Icons.search, { size: 24, stroke: "var(--sage)" }),
      title: t("state.no_people_t"),
      sub: t("state.no_people_s")
    }
  ), list.map((f, i) => /* @__PURE__ */ React.createElement("div", { key: f.name, style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 4px",
    borderBottom: i < list.length - 1 ? "0.5px solid var(--hair)" : "none"
  } }, /* @__PURE__ */ React.createElement("button", { onClick: () => openFriend(f.name), style: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left",
    padding: 0
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: f.name, size: 42 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, f.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, f.last))), /* @__PURE__ */ React.createElement("button", { onClick: () => openChat(f.name), style: {
    width: 36,
    height: 36,
    borderRadius: 999,
    background: "var(--mint2)",
    border: "none",
    cursor: "pointer",
    color: "var(--forest)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.edit, { size: 15 }))))));
}
function MessagesScreen({ onBack, openChat }) {
  const t = useT();
  const threads = [
    { name: "Marta P\xE9rez", last: "See you at 7! \u{1F3BE}", t: "2m", unread: true },
    { name: "Pablo Kim", last: "Run tomorrow?", t: "1h", unread: true },
    { name: "Lin Wang", last: "Loved the flow today", t: "yesterday" },
    { name: "Ari Solano", last: "Sending the route", t: "2d" },
    { name: "Dani Torres", last: "32km, big day", t: "4d" }
  ];
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: t("msg.title"), onBack, right: /* @__PURE__ */ React.createElement("button", { style: { background: "none", border: "none", padding: 4, cursor: "pointer", color: "var(--ink-2)" } }, /* @__PURE__ */ React.createElement(Icons.edit, { size: 18 })) }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 28px" } }, threads.map((th, i) => /* @__PURE__ */ React.createElement("button", { key: th.name, onClick: () => openChat(th.name), style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 4px",
    background: "none",
    border: "none",
    borderBottom: i < threads.length - 1 ? "0.5px solid var(--hair)" : "none",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: th.name, size: 48 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontWeight: 400 } }, th.name), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)" } }, th.t)), /* @__PURE__ */ React.createElement("div", { style: {
    fontSize: 13,
    color: th.unread ? "var(--ink)" : "var(--ink-3)",
    marginTop: 2,
    fontWeight: th.unread ? 400 : 300,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  } }, th.last)), th.unread && /* @__PURE__ */ React.createElement("div", { style: { width: 8, height: 8, borderRadius: "50%", background: "var(--lime)" } })))));
}
function ChatScreen({ name = "Marta P\xE9rez", onBack }) {
  const t = useT();
  const [messages, setMessages] = React.useState([
    { who: "them", txt: "Hey, ready for tonight?", t: "18:01" },
    { who: "me", txt: "Always. Bringing water and snacks.", t: "18:03" },
    { who: "them", txt: "Perfect. See you at 7!", t: "18:04" }
  ]);
  const [draft, setDraft] = React.useState("");
  const send = () => {
    if (!draft.trim()) return;
    setMessages([...messages, { who: "me", txt: draft.trim(), t: "now" }]);
    setDraft("");
    setTimeout(() => {
      setMessages((m) => [...m, { who: "them", txt: "sounds good \u{1F44D}", t: "now" }]);
    }, 900);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "54px 16px 12px", borderBottom: "0.5px solid var(--hair)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: { background: "none", border: "none", padding: 4, cursor: "pointer", color: "var(--ink)" } }, /* @__PURE__ */ React.createElement(Icons.arrow_left, { size: 22 })), /* @__PURE__ */ React.createElement(Avatar, { name, size: 36 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--forest)" } }, t("msg.active_now"))))), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "16px 16px 8px", display: "flex", flexDirection: "column", gap: 8 } }, messages.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    alignSelf: m.who === "me" ? "flex-end" : "flex-start",
    maxWidth: "76%",
    padding: "10px 14px",
    borderRadius: 18,
    background: m.who === "me" ? "var(--forest)" : "var(--paper-2)",
    color: m.who === "me" ? "var(--paper)" : "var(--ink)",
    border: m.who === "me" ? "none" : "0.5px solid var(--hair)",
    fontSize: 14,
    lineHeight: 1.4,
    borderBottomRightRadius: m.who === "me" ? 6 : 18,
    borderBottomLeftRadius: m.who === "them" ? 6 : 18
  } }, m.txt))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "8px 12px 22px",
    borderTop: "0.5px solid var(--hair)",
    background: "var(--paper)",
    display: "flex",
    gap: 8,
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      value: draft,
      onChange: (e) => setDraft(e.target.value),
      onKeyDown: (e) => {
        if (e.key === "Enter") send();
      },
      placeholder: t("msg.ph"),
      style: {
        flex: 1,
        background: "var(--paper-2)",
        border: "0.5px solid var(--hair-2)",
        borderRadius: 999,
        padding: "10px 16px",
        fontFamily: "inherit",
        fontSize: 14,
        outline: "none",
        color: "var(--ink)"
      }
    }
  ), /* @__PURE__ */ React.createElement("button", { onClick: send, style: {
    width: 40,
    height: 40,
    borderRadius: 999,
    background: draft.trim() ? "var(--forest)" : "var(--hair-2)",
    color: "var(--paper)",
    border: "none",
    cursor: draft.trim() ? "pointer" : "default",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.arrow_right, { size: 18, stroke: "var(--paper)", sw: 2 }))));
}
function ActivityDetail({ entry, onBack, onRate, onRebook, onMessageGroup }) {
  const tr = useT();
  const e = entry || { sport: "Padel", dur: "1h 30m", loc: "Les Corts", date: "Mon \xB7 May 27", ppl: 3, partners: ["Marta P.", "Joan L.", "Sara M."] };
  const t = sportThemes[e.sport];
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement("div", { style: { height: 240, position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement(
    SportPhoto,
    {
      sport: e.sport,
      height: 240,
      radius: 0,
      w: 900,
      style: { position: "absolute", inset: 0 },
      overlay: false
    }
  ), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.6) 100%)"
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
  } }, /* @__PURE__ */ React.createElement(Icons.arrow_left, { size: 20, stroke: "var(--ink)" })), /* @__PURE__ */ React.createElement("button", { style: {
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
  } }, /* @__PURE__ */ React.createElement(Icons.edit, { size: 18, stroke: "var(--ink)" }))), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 20, left: 20, right: 20, color: "#fff" } }, /* @__PURE__ */ React.createElement("span", { style: {
    background: "rgba(255,255,255,0.85)",
    padding: "4px 10px",
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 400,
    color: "var(--ink)",
    textTransform: "uppercase",
    letterSpacing: "0.04em"
  } }, tr("act.completed"), " \xB7 ", trDate(tr, e.date)), /* @__PURE__ */ React.createElement("h1", { style: {
    marginTop: 12,
    fontSize: 28,
    fontWeight: 400,
    lineHeight: 1.15,
    textShadow: "0 2px 12px rgba(0,0,0,0.4)"
  } }, tr("sport." + e.sport), " \xB7 ", e.loc))), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "20px 20px 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 } }, /* @__PURE__ */ React.createElement(BigStat, { label: tr("act.duration"), value: e.dur.split(" ")[0], unit: e.dur.split(" ")[1] || "" }), /* @__PURE__ */ React.createElement(BigStat, { label: tr("act.with"), value: e.ppl, unit: e.ppl === 1 ? tr("act.solo") : tr("act.people") })), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 24, marginBottom: 10 } }, tr("common.notes")), /* @__PURE__ */ React.createElement("p", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 14,
    padding: 14,
    fontSize: 14,
    color: "var(--ink-2)",
    lineHeight: 1.55
  } }, tr("act.notes_default")), e.partners && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 24, marginBottom: 10 } }, tr("act.played_with")), /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 14,
    overflow: "hidden"
  } }, e.partners.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: p, style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    borderBottom: i < e.partners.length - 1 ? "0.5px solid var(--hair)" : "none"
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: p, size: 36 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontSize: 14, fontWeight: 400 } }, p), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 14, stroke: "var(--ink-3)" }))))), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-primary",
      style: { width: "100%", marginTop: 22 },
      onClick: () => onRate && onRate(e)
    },
    /* @__PURE__ */ React.createElement(Icons.star, { size: 16, stroke: "var(--paper)" }),
    " ",
    tr("act.rate")
  ), e.partners && /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 18,
    padding: "16px 16px 14px",
    borderRadius: 18,
    background: "var(--mint-2)",
    border: "0.5px solid var(--mint)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em" } }, tr("act.again_title")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, color: "var(--ink-2)", marginTop: 3, lineHeight: 1.45 } }, tr("act.again_sub")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 14 } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-primary",
      style: { padding: "12px 14px", fontSize: 14 },
      onClick: () => onRebook && onRebook(e)
    },
    /* @__PURE__ */ React.createElement(Icons.plus, { size: 15, stroke: "var(--paper)", sw: 2 }),
    " ",
    tr("act.play_again")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-secondary",
      style: { padding: "12px 14px", fontSize: 14 },
      onClick: () => onMessageGroup && onMessageGroup(e)
    },
    /* @__PURE__ */ React.createElement(Icons.message, { size: 15, stroke: "var(--forest)" }),
    " ",
    tr("act.message_group")
  ))), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", style: { width: "100%", marginTop: 10 } }, /* @__PURE__ */ React.createElement(Icons.share, { size: 15, stroke: "var(--forest)" }), " ", tr("act.share"))));
}
function ChallengeDetail({ ch, onBack }) {
  const t = useT();
  const c = ch || { t: "Five for May", d: "5 sessions this month", prog: 3, of: 5, reward: "1 month premium", accent: 145 };
  const pct = c.prog / c.of * 100;
  const otherFriends = ["Marta P.", "Pablo K.", "Lin W.", "Ari S.", "Dani T."];
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: t("ch.detail_title"), onBack, right: /* @__PURE__ */ React.createElement("button", { style: { background: "none", border: "none", padding: 4, cursor: "pointer", color: "var(--ink-2)" } }, /* @__PURE__ */ React.createElement(Icons.bell, { size: 18 })) }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 24px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: 18,
    borderRadius: 22,
    background: "var(--forest)",
    color: "var(--paper)",
    position: "relative",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    right: -40,
    top: -40,
    width: 180,
    height: 180,
    borderRadius: "50%",
    background: "oklch(0.45 0.08 145)",
    opacity: 0.5
  } }), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 40,
    height: 40,
    borderRadius: 12,
    background: "oklch(0.55 0.08 145)",
    color: "var(--paper)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.trophy, { size: 20 })), /* @__PURE__ */ React.createElement("h1", { style: { marginTop: 14, fontSize: 26, fontWeight: 400, letterSpacing: "-0.02em" } }, c.t), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 6, fontSize: 13, opacity: 0.8 } }, c.d), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, display: "flex", alignItems: "baseline", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 44, fontWeight: 200, letterSpacing: "-0.02em" } }, c.prog, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 16, opacity: 0.7 } }, "/", c.of)), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 12, opacity: 0.7 } }, Math.round(pct), "%")), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 10,
    height: 6,
    borderRadius: 99,
    background: "oklch(0.45 0.08 145)",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", width: pct + "%", background: "var(--lime)" } })))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 24, marginBottom: 10 } }, t("ch.reward_label")), /* @__PURE__ */ React.createElement("div", { style: {
    padding: 14,
    borderRadius: 14,
    background: "var(--mint2)",
    display: "flex",
    gap: 12,
    alignItems: "center",
    border: "0.5px solid var(--hair)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 40,
    height: 40,
    borderRadius: 12,
    background: "var(--lime)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--ink)"
  } }, /* @__PURE__ */ React.createElement(Icons.spark, { size: 20 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, c.reward), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, t("ch.detail_reward_sub")))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 24, marginBottom: 10 } }, t("ch.how_works")), /* @__PURE__ */ React.createElement("ol", { style: { paddingLeft: 18, margin: 0, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.6 } }, /* @__PURE__ */ React.createElement("li", null, t("ch.how_1")), /* @__PURE__ */ React.createElement("li", null, t("ch.how_2")), /* @__PURE__ */ React.createElement("li", null, t("ch.how_3"))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 24, marginBottom: 10 } }, t("ch.friends_too")), /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 14,
    overflow: "hidden"
  } }, otherFriends.map((n, i) => /* @__PURE__ */ React.createElement("div", { key: n, style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    borderBottom: i < otherFriends.length - 1 ? "0.5px solid var(--hair)" : "none"
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: n, size: 32 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontSize: 14, fontWeight: 400 } }, n), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)" } }, Math.floor(Math.random() * 5 + 1), "/", c.of)))), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { width: "100%", marginTop: 22 } }, t("ch.share"))));
}
function SettingsSub({ kind, onBack }) {
  const t = useT();
  const { lang, setLang } = useLang();
  const titles = {
    password: t("set.password"),
    units: t("set.units"),
    language: t("set.language"),
    radius: t("set.default_radius"),
    visibility: t("set.profile_visibility"),
    help: t("set.help"),
    terms: t("set.terms"),
    privacy: t("set.privacy_policy")
  };
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: titles[kind] || "Settings", onBack }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 32px" } }, kind === "password" && /* @__PURE__ */ React.createElement(PasswordPanel, null), kind === "units" && /* @__PURE__ */ React.createElement(
    RadioPanel,
    {
      options: [t("set.units_metric"), t("set.units_imperial")],
      defaultValue: t("set.units_metric")
    }
  ), kind === "language" && /* @__PURE__ */ React.createElement(LanguagePanel, { current: lang, onChange: setLang }), kind === "radius" && /* @__PURE__ */ React.createElement(RadiusPanel, null), kind === "visibility" && /* @__PURE__ */ React.createElement(
    RadioPanel,
    {
      options: [t("set.vis_public"), t("set.vis_friends"), t("set.vis_private")],
      defaultValue: t("set.vis_friends")
    }
  ), kind === "help" && /* @__PURE__ */ React.createElement(HelpPanel, null), kind === "terms" && /* @__PURE__ */ React.createElement(LegalPanel, { which: "Terms" }), kind === "privacy" && /* @__PURE__ */ React.createElement(LegalPanel, { which: "Privacy" })));
}
function LanguagePanel({ current, onChange }) {
  const langs = [
    { code: "en", label: "English", native: "English" },
    { code: "es", label: "Espa\xF1ol", native: "Spanish" }
  ];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16,
    overflow: "hidden"
  } }, langs.map((l, i) => {
    const on = current === l.code;
    return /* @__PURE__ */ React.createElement("button", { key: l.code, onClick: () => onChange(l.code), style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 16px",
      background: "none",
      border: "none",
      borderBottom: i < langs.length - 1 ? "0.5px solid var(--hair)" : "none",
      cursor: "pointer",
      fontFamily: "inherit",
      color: "var(--ink)",
      textAlign: "left"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 30,
      height: 22,
      borderRadius: 4,
      background: l.code === "es" ? "linear-gradient(180deg, oklch(0.68 0.18 30) 0%, oklch(0.68 0.18 30) 33%, oklch(0.85 0.18 90) 33%, oklch(0.85 0.18 90) 66%, oklch(0.68 0.18 30) 66%)" : "linear-gradient(180deg, #012169 0%, #012169 35%, #fff 35%, #fff 65%, #C8102E 65%)",
      border: "0.5px solid var(--hair)",
      flexShrink: 0
    } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, l.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", marginTop: 1 } }, l.native)), on && /* @__PURE__ */ React.createElement(Icons.check, { size: 18, stroke: "var(--forest)", sw: 2.2 }));
  })), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 14, color: "var(--ink-3)", fontSize: 12, lineHeight: 1.55 } }, current === "es" ? "El idioma se aplica al instante en toda la app." : "Language changes apply instantly across the app."));
}
function PasswordPanel() {
  const t = useT();
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 12, color: "var(--ink-3)", display: "block", marginBottom: 6 } }, t("pw.current")), /* @__PURE__ */ React.createElement("input", { className: "input", type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 12, color: "var(--ink-3)", display: "block", marginBottom: 6 } }, t("pw.new")), /* @__PURE__ */ React.createElement("input", { className: "input", type: "password", placeholder: t("signup.password_hint") })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 12, color: "var(--ink-3)", display: "block", marginBottom: 6 } }, t("pw.repeat")), /* @__PURE__ */ React.createElement("input", { className: "input", type: "password" })), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { width: "100%", marginTop: 8 } }, t("pw.update")));
}
function RadioPanel({ options, defaultValue, onChange }) {
  const [val, setVal] = React.useState(defaultValue);
  const pick = (o) => {
    setVal(o);
    if (onChange) onChange(o);
  };
  return /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16,
    overflow: "hidden"
  } }, options.map((o, i) => /* @__PURE__ */ React.createElement("button", { key: o.value || o, onClick: () => pick(o), style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 16px",
    background: "none",
    border: "none",
    borderBottom: i < options.length - 1 ? "0.5px solid var(--hair)" : "none",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: 14 } }, o.label || o), (val === o || val && val.value === o.value) && /* @__PURE__ */ React.createElement(Icons.check, { size: 18, stroke: "var(--forest)", sw: 2.2 }))));
}
function RadiusPanel() {
  const t = useT();
  const [r, setR] = React.useState(5);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: {
    padding: 18,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16,
    textAlign: "center"
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em" } }, t("radius.show_within")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 56, fontWeight: 200, letterSpacing: "-0.03em" } }, r), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 14, color: "var(--ink-3)", marginLeft: 4 } }, "km")), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "1",
      max: "30",
      value: r,
      onChange: (e) => setR(+e.target.value),
      style: { width: "100%", marginTop: 14, accentColor: "var(--forest)" }
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 11,
    color: "var(--ink-3)",
    marginTop: 4
  } }, /* @__PURE__ */ React.createElement("span", null, "1km"), /* @__PURE__ */ React.createElement("span", null, "30km"))), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 14, color: "var(--ink-3)", fontSize: 12, lineHeight: 1.55 } }, t("radius.note")));
}
function HelpPanel() {
  const t = useT();
  const qs = [
    { q: t("help.q1"), a: t("help.a1") },
    { q: t("help.q2"), a: t("help.a2") },
    { q: t("help.q3"), a: t("help.a3") },
    { q: t("help.q4"), a: t("help.a4") },
    { q: t("help.q5"), a: t("help.a5") },
    { q: t("help.q6"), a: t("help.a6") }
  ];
  const [open, setOpen] = React.useState(null);
  return /* @__PURE__ */ React.createElement("div", { style: { background: "var(--paper)", border: "0.5px solid var(--hair)", borderRadius: 16, overflow: "hidden" } }, qs.map((it, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { borderBottom: i < qs.length - 1 ? "0.5px solid var(--hair)" : "none" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setOpen(open === i ? null : i), style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 16px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: 14, fontWeight: 400 } }, it.q), /* @__PURE__ */ React.createElement("span", { style: {
    transform: `rotate(${open === i ? 180 : 0}deg)`,
    transition: "transform 0.2s ease",
    color: "var(--ink-3)"
  } }, /* @__PURE__ */ React.createElement(Icons.chevron_down, { size: 16 }))), open === i && /* @__PURE__ */ React.createElement("div", { style: { padding: "0 16px 14px", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.55 } }, it.a))));
}
function LegalPanel({ which }) {
  const t = useT();
  const whichLabel = which === "Privacy" ? t("set.privacy_policy") : t("set.terms");
  return /* @__PURE__ */ React.createElement("div", { style: { background: "var(--paper)", border: "0.5px solid var(--hair)", borderRadius: 16, padding: 16, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.6 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 10 } }, t("legal.updated", { which: whichLabel })), /* @__PURE__ */ React.createElement("p", { style: { marginBottom: 10 } }, t("legal.body1", { which: whichLabel.toLowerCase() })), /* @__PURE__ */ React.createElement("p", { style: { marginBottom: 10 } }, "\u2022 ", t("legal.b1"), /* @__PURE__ */ React.createElement("br", null), "\u2022 ", t("legal.b2"), /* @__PURE__ */ React.createElement("br", null), "\u2022 ", t("legal.b3"), /* @__PURE__ */ React.createElement("br", null), "\u2022 ", t("legal.b4")), /* @__PURE__ */ React.createElement("p", null, t("legal.body2")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", style: { width: "100%", marginTop: 14 } }, t("legal.download")));
}
function LogSoloScreen({ onBack, onDone }) {
  const t = useT();
  const [sport, setSport] = React.useState("Running");
  const [dur, setDur] = React.useState(45);
  const [intensity, setIntensity] = React.useState("Steady");
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: t("log.title"), onBack, right: /* @__PURE__ */ React.createElement("button", { onClick: onDone, style: {
    background: "none",
    border: "none",
    color: "var(--forest)",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 500
  } }, t("common.save")) }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 28px" } }, /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 8, marginBottom: 10 } }, t("create.sport")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, scrollbarWidth: "none" } }, Object.keys(sportThemes).map((s) => /* @__PURE__ */ React.createElement("button", { key: s, onClick: () => setSport(s), style: {
    flexShrink: 0,
    padding: "8px 12px 8px 8px",
    borderRadius: 14,
    background: sport === s ? "var(--mint)" : "var(--paper)",
    border: "0.5px solid " + (sport === s ? "var(--forest)" : "var(--hair-2)"),
    cursor: "pointer",
    fontFamily: "inherit",
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "var(--ink)"
  } }, sportTile(s, 28), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 400 } }, t("sport." + s))))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 22, marginBottom: 10 } }, t("log.when")), /* @__PURE__ */ React.createElement(ChipGroup, { options: ["Just now", "Today", "Yesterday", "Earlier"], value: "Just now", onChange: () => {
  } }), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 22, marginBottom: 6 } }, t("log.duration")), /* @__PURE__ */ React.createElement("div", { style: { padding: 16, background: "var(--paper)", border: "0.5px solid var(--hair)", borderRadius: 16, textAlign: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 48, fontWeight: 200, letterSpacing: "-0.02em" } }, dur), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 14, color: "var(--ink-3)", marginLeft: 4 } }, "min"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "5",
      max: "240",
      step: "5",
      value: dur,
      onChange: (e) => setDur(+e.target.value),
      style: { width: "100%", marginTop: 8, accentColor: "var(--forest)" }
    }
  )), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 22, marginBottom: 10 } }, t("log.intensity")), /* @__PURE__ */ React.createElement(ChipGroup, { options: ["Easy", "Steady", "Hard", "All out"], value: intensity, onChange: setIntensity }), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 22, marginBottom: 10 } }, t("common.notes")), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      rows: 3,
      placeholder: t("log.notes_ph"),
      className: "input",
      style: { resize: "none", fontFamily: "inherit" }
    }
  )));
}
function InviteFriendScreen({ friendName, onBack, onDone }) {
  const t = useT();
  const [picked, setPicked] = React.useState(null);
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: `${t("inv.title_prefix")} ${friendName ? friendName.split(" ")[0] : t("common.friend")}`, onBack, right: /* @__PURE__ */ React.createElement("button", { onClick: onDone, disabled: !picked, style: {
    background: "none",
    border: "none",
    color: picked ? "var(--forest)" : "var(--ink-3)",
    cursor: picked ? "pointer" : "default",
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 500
  } }, t("common.send")) }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 24px" } }, /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-3)", fontSize: 13, marginTop: 4 } }, t("inv.sub_prefix"), " ", friendName || t("common.them"), " ", t("inv.sub_suffix")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, display: "flex", flexDirection: "column", gap: 10 } }, mockEvents.slice(0, 4).map((e) => /* @__PURE__ */ React.createElement("button", { key: e.id, onClick: () => setPicked(e.id), style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 12,
    background: "var(--paper)",
    border: "0.5px solid " + (picked === e.id ? "var(--forest)" : "var(--hair)"),
    borderRadius: 16,
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement(
    SportPhoto,
    {
      sport: e.sport,
      height: 48,
      radius: 10,
      w: 160,
      overlay: false,
      style: { width: 48, flexShrink: 0 }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, trTitle(t, e.title)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, trDate(t, e.date), ", ", e.time, " \xB7 ", e.loc)), /* @__PURE__ */ React.createElement("div", { style: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    border: "1.5px solid " + (picked === e.id ? "var(--forest)" : "var(--hair-2)"),
    background: picked === e.id ? "var(--forest)" : "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  } }, picked === e.id && /* @__PURE__ */ React.createElement(Icons.check, { size: 13, stroke: "var(--paper)", sw: 2.2 }))))), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 18,
    padding: 14,
    borderRadius: 14,
    background: "var(--mint2)",
    fontSize: 13,
    color: "var(--ink-2)",
    lineHeight: 1.5,
    display: "flex",
    alignItems: "flex-start",
    gap: 10
  } }, /* @__PURE__ */ React.createElement(Icons.spark, { size: 18, stroke: "var(--forest)" }), /* @__PURE__ */ React.createElement("span", null, t("inv.tip")))));
}
function BadgeModal({ badge, onClose }) {
  const t = useT();
  if (!badge) return null;
  return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: {
    position: "absolute",
    inset: 0,
    zIndex: 200,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  } }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: {
    background: "var(--paper)",
    borderRadius: 22,
    padding: 24,
    width: "100%",
    maxWidth: 320,
    textAlign: "center"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 90,
    height: 90,
    borderRadius: "50%",
    margin: "0 auto",
    background: badge.locked ? "var(--hair)" : `linear-gradient(135deg, oklch(0.85 0.08 ${badge.h}), oklch(0.6 0.14 ${badge.h}))`,
    color: badge.locked ? "var(--ink-3)" : `oklch(0.18 0.10 ${badge.h})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, badge.locked ? /* @__PURE__ */ React.createElement(Icons.lock, { size: 32 }) : /* @__PURE__ */ React.createElement(Icons.trophy, { size: 32 })), /* @__PURE__ */ React.createElement("h2", { style: { marginTop: 16, fontSize: 22, fontWeight: 400 } }, badge.t), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 8, color: "var(--ink-3)", fontSize: 13, lineHeight: 1.5 } }, badge.locked ? t("badge.locked_msg") : t("badge.earned_msg", { when: badge.when || t("badge.earned_recently") })), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 18 } }, /* @__PURE__ */ React.createElement("button", { onClick: onClose, className: "btn btn-secondary" }, t("common.close")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", disabled: badge.locked, style: { opacity: badge.locked ? 0.5 : 1 } }, t("common.share")))));
}
function LocationSheet({ current, currentRadius, onClose, onSave }) {
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
    { c: "Amsterdam", r: "Netherlands" }
  ];
  const [query, setQuery] = React.useState("");
  const [city, setCity] = React.useState(current || "Barcelona");
  const [radius, setRadius] = React.useState(currentRadius || 5);
  const filtered = cities.filter(
    (c) => !query || c.c.toLowerCase().includes(query.toLowerCase()) || c.r.toLowerCase().includes(query.toLowerCase())
  );
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
    maxHeight: "85%",
    overflowY: "auto",
    animation: "slideUp 0.28s cubic-bezier(0.2, 0.9, 0.3, 1)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 4, background: "var(--hair-2)", borderRadius: 99, margin: "0 auto 12px" } }), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 22px 0" } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.06em" } }, t("loc.change")), /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 22, fontWeight: 400, marginTop: 6, letterSpacing: "-0.02em" } }, t("loc.where_look"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 22px 0" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setCity("Barcelona"), style: {
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
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 36,
    height: 36,
    borderRadius: 999,
    background: "var(--forest)",
    color: "var(--paper)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.pin, { size: 18, stroke: "var(--paper)", fill: "var(--lime)", sw: 1.2 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, t("q6.use_current")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, t("q6.detected"))), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 16, stroke: "var(--ink-3)" }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 22px 0" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 14px",
    borderRadius: 14,
    background: "var(--paper-2)",
    border: "0.5px solid var(--hair-2)"
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
  ))), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 22px 0", display: "flex", flexDirection: "column", gap: 6 } }, filtered.slice(0, 6).map((c) => {
    const on = city === c.c;
    return /* @__PURE__ */ React.createElement("button", { key: c.c, onClick: () => setCity(c.c), style: {
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
  }), filtered.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", color: "var(--ink-3)", fontSize: 13, padding: 18 } }, 'No matches for "', query, '".')), /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 22px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 } }, /* @__PURE__ */ React.createElement("h4", null, t("loc.search_radius")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 28, fontWeight: 200, letterSpacing: "-0.02em" } }, radius), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: "var(--ink-3)", fontSize: 13 } }, "km"))), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "1",
      max: "30",
      value: radius,
      onChange: (e) => setRadius(+e.target.value),
      style: { width: "100%", accentColor: "var(--forest)" }
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ink-3)" } }, /* @__PURE__ */ React.createElement("span", null, "1km"), /* @__PURE__ */ React.createElement("span", null, "30km"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 22px 0", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { onClick: onClose, className: "btn btn-secondary" }, t("common.cancel")), /* @__PURE__ */ React.createElement("button", { onClick: () => onSave(city, radius), className: "btn btn-primary" }, t("common.save")))));
}
function SocialScreen({ onBack, openFriend, openChat, openEvent }) {
  const tr = useT();
  const [tab, setTab] = React.useState("feed");
  const feed = [
    {
      who: "Marta P\xE9rez",
      when: "15 min ago",
      sport: "Padel",
      action: tr("feed.f1_action"),
      extra: tr("feed.f1_extra"),
      withPpl: ["Joan L.", "Sara M."]
    },
    {
      who: "Pablo Kim",
      when: "2h ago",
      sport: "Running",
      action: tr("feed.f2_action"),
      extra: tr("feed.f2_extra"),
      withPpl: []
    },
    {
      who: "Lin Wang",
      when: "yesterday",
      sport: "Yoga",
      action: tr("feed.f3_action"),
      extra: tr("feed.f3_extra"),
      withPpl: ["Eva R.", "Tomi B."],
      joinable: true,
      eventId: "e3"
    },
    {
      who: "Ari Solano",
      when: "2 days ago",
      sport: "Climbing",
      action: tr("feed.f4_action"),
      extra: tr("feed.f4_extra"),
      withPpl: ["Jon V."]
    },
    {
      who: "Dani Torres",
      when: "3 days ago",
      sport: "Cycling",
      action: tr("feed.f5_action"),
      extra: tr("feed.f5_extra"),
      withPpl: ["Lex F."]
    },
    {
      who: "Eva Ruiz",
      when: "3 days ago",
      sport: "Yoga",
      action: tr("feed.f6_action"),
      extra: tr("feed.f6_extra"),
      withPpl: []
    }
  ];
  const requests = [
    { name: "Nico Almeida", via: tr("feed.r1_via"), mutual: 4 },
    { name: "Sara Mart\xEDn", via: tr("feed.r2_via"), mutual: 2 }
  ];
  const suggestions = [
    { name: "Iv\xE1n Soto", sport: "Running", reason: tr("feed.s1_reason") },
    { name: "Lola Diez", sport: "Padel", reason: tr("feed.s2_reason") },
    { name: "Pep Garc\xEDa", sport: "Football", reason: tr("feed.s3_reason") }
  ];
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "54px 20px 0", background: "var(--paper)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 } }, /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: { background: "transparent", border: "none", padding: 4, cursor: "pointer", color: "var(--ink)" } }, /* @__PURE__ */ React.createElement(Icons.arrow_left, { size: 22 })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 24, fontWeight: 300, letterSpacing: "-0.02em" } }, tr("soc.title"))), /* @__PURE__ */ React.createElement("button", { onClick: () => openChat && openChat(null), style: {
    width: 36,
    height: 36,
    borderRadius: 999,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    cursor: "pointer",
    color: "var(--ink)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.edit, { size: 16 }))), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 6,
    background: "var(--mint2)",
    borderRadius: 999,
    padding: 3,
    border: "0.5px solid var(--hair)"
  } }, [
    { id: "feed", label: tr("soc.feed") },
    { id: "friends", label: tr("soc.friends"), n: mockFriends.length },
    { id: "requests", label: tr("soc.requests"), n: requests.length }
  ].map((t) => {
    const on = tab === t.id;
    return /* @__PURE__ */ React.createElement("button", { key: t.id, onClick: () => setTab(t.id), style: {
      flex: 1,
      padding: "8px 10px",
      borderRadius: 999,
      border: "none",
      background: on ? "var(--paper)" : "transparent",
      color: on ? "var(--forest)" : "var(--ink-2)",
      fontFamily: "inherit",
      fontSize: 13,
      fontWeight: on ? 500 : 400,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      boxShadow: on ? "0 1px 3px rgba(0,0,0,0.06)" : "none"
    } }, t.label, t.n != null && t.n > 0 && /* @__PURE__ */ React.createElement("span", { style: {
      minWidth: 18,
      height: 18,
      padding: "0 6px",
      borderRadius: 999,
      fontSize: 10,
      background: on ? "var(--forest)" : "var(--hair-2)",
      color: on ? "var(--paper)" : "var(--ink-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, t.n));
  }))), tab === "feed" && /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "12px 0 28px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 14,
    padding: "8px 20px 16px",
    overflowX: "auto",
    scrollbarWidth: "none"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, minWidth: 60 } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "var(--paper)",
    border: "1.5px dashed var(--hair-2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--ink-3)",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icons.plus, { size: 20 })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--ink-3)" } }, tr("soc.your_story"))), mockFriends.map((f) => /* @__PURE__ */ React.createElement("button", { key: f.name, onClick: () => openFriend(f.name), style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    minWidth: 60
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    padding: 2,
    background: "linear-gradient(135deg, var(--forest), var(--lime))"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    background: "var(--paper)",
    padding: 1.5
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: f.name, size: 50 }))), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--ink-2)" } }, f.name.split(" ")[0])))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "0 20px 8px",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("h4", null, tr("soc.activity")), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)" } }, tr("soc.last_3_days"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", flexDirection: "column", gap: 12 } }, feed.map((f, i) => /* @__PURE__ */ React.createElement(
    ActivityFeedCard,
    {
      key: i,
      item: f,
      openFriend,
      openEvent
    }
  )))), tab === "friends" && /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "12px 20px 28px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 14px",
    borderRadius: 14,
    background: "var(--paper-2)",
    border: "0.5px solid var(--hair-2)",
    marginBottom: 14
  } }, /* @__PURE__ */ React.createElement(Icons.search, { size: 18, stroke: "var(--ink-3)" }), /* @__PURE__ */ React.createElement("input", { placeholder: tr("soc.search_friends"), style: {
    flex: 1,
    background: "none",
    border: "none",
    outline: "none",
    fontFamily: "inherit",
    fontSize: 14,
    color: "var(--ink)"
  } })), /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 10 } }, tr("soc.your_friends"), " \xB7 ", mockFriends.length), /* @__PURE__ */ React.createElement("div", null, mockFriends.map((f, i) => /* @__PURE__ */ React.createElement("div", { key: f.name, style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 4px",
    borderBottom: i < mockFriends.length - 1 ? "0.5px solid var(--hair)" : "none"
  } }, /* @__PURE__ */ React.createElement("button", { onClick: () => openFriend(f.name), style: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left",
    padding: 0
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: f.name, size: 42 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, f.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, f.last))), /* @__PURE__ */ React.createElement("button", { onClick: () => openChat && openChat(f.name), style: {
    width: 36,
    height: 36,
    borderRadius: 999,
    background: "var(--mint2)",
    border: "none",
    cursor: "pointer",
    color: "var(--forest)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.edit, { size: 15 }))))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 28, marginBottom: 10 } }, tr("soc.people_know")), /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16,
    overflow: "hidden"
  } }, suggestions.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: p.name, style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    borderBottom: i < suggestions.length - 1 ? "0.5px solid var(--hair)" : "none"
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: p.name, size: 40 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, p.sport, " \xB7 ", p.reason)), /* @__PURE__ */ React.createElement("button", { style: {
    padding: "7px 12px",
    borderRadius: 999,
    background: "var(--forest)",
    color: "var(--paper)",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 12,
    fontWeight: 400
  } }, tr("common.add")))))), tab === "requests" && /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "16px 20px 28px" } }, /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 10 } }, requests.length, " ", tr("soc.pending")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, requests.map((r) => /* @__PURE__ */ React.createElement("div", { key: r.name, style: {
    padding: 14,
    borderRadius: 16,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement(Avatar, { name: r.name, size: 48 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, r.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, r.via), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--forest)", marginTop: 4, fontWeight: 400 } }, r.mutual, " ", r.mutual === 1 ? tr("soc.mutual") : tr("soc.mutual_plural")))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { padding: "10px 14px", fontSize: 13 } }, tr("soc.accept")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", style: { padding: "10px 14px", fontSize: 13 } }, tr("soc.ignore")))))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 28, marginBottom: 10 } }, tr("soc.invite_friends")), /* @__PURE__ */ React.createElement("div", { style: {
    padding: 16,
    borderRadius: 16,
    background: "var(--mint2)",
    border: "0.5px solid var(--hair)",
    display: "flex",
    alignItems: "center",
    gap: 12
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 40,
    height: 40,
    borderRadius: 12,
    background: "var(--forest)",
    color: "var(--paper)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.users, { size: 20, stroke: "var(--paper)" })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, tr("soc.share_newbie")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, tr("soc.share_sub"))), /* @__PURE__ */ React.createElement("button", { style: {
    padding: "8px 14px",
    borderRadius: 999,
    background: "var(--forest)",
    color: "var(--paper)",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 12,
    fontWeight: 400
  } }, tr("common.share")))));
}
function ActivityFeedCard({ item, openFriend, openEvent }) {
  const tr = useT();
  const t = sportThemes[item.sport];
  return /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 18,
    padding: 14
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => openFriend(item.who), style: {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: item.who, size: 36 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, lineHeight: 1.35 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => openFriend(item.who), style: {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    fontWeight: 500
  } }, item.who), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ink-2)" } }, " ", item.action)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", marginTop: 2 } }, item.when)), sportTile(item.sport, 32)), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 12,
    padding: "10px 12px",
    background: `oklch(0.97 0.025 ${t.h})`,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 12,
    color: `oklch(0.32 0.10 ${t.h})`
  } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 400 } }, tr("sport." + item.sport)), /* @__PURE__ */ React.createElement("span", { className: "mono" }, item.extra)), item.withPpl && item.withPpl.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex" } }, item.withPpl.slice(0, 3).map((p, i) => /* @__PURE__ */ React.createElement("div", { key: p, style: { marginLeft: i > 0 ? -8 : 0 } }, /* @__PURE__ */ React.createElement(Avatar, { name: p, size: 22, ring: true })))), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--ink-3)" } }, tr("soc.with"), " ", item.withPpl.slice(0, 2).join(", "), item.withPpl.length > 2 ? ` +${item.withPpl.length - 2}` : "")), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 16,
    marginTop: 12,
    paddingTop: 10,
    borderTop: "0.5px solid var(--hair)"
  } }, /* @__PURE__ */ React.createElement("button", { style: {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink-2)",
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    gap: 6
  } }, /* @__PURE__ */ React.createElement(Icons.heart, { size: 14, stroke: "var(--ink-2)" }), /* @__PURE__ */ React.createElement("span", null, tr("soc.cheer"))), /* @__PURE__ */ React.createElement("button", { style: {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink-2)",
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    gap: 6
  } }, /* @__PURE__ */ React.createElement(Icons.edit, { size: 14, stroke: "var(--ink-2)" }), /* @__PURE__ */ React.createElement("span", null, tr("soc.comment"))), item.joinable && /* @__PURE__ */ React.createElement("button", { onClick: () => openEvent(item.eventId), style: {
    marginLeft: "auto",
    background: "var(--mint)",
    color: "var(--forest)",
    border: "none",
    borderRadius: 999,
    padding: "5px 12px",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 12,
    fontWeight: 400
  } }, tr("soc.join_action"))));
}
Object.assign(window, {
  AllFriendsScreen,
  MessagesScreen,
  ChatScreen,
  ActivityDetail,
  ChallengeDetail,
  SettingsSub,
  PasswordPanel,
  RadioPanel,
  RadiusPanel,
  HelpPanel,
  LegalPanel,
  LanguagePanel,
  LogSoloScreen,
  InviteFriendScreen,
  BadgeModal,
  LocationSheet,
  SocialScreen,
  ActivityFeedCard
});
