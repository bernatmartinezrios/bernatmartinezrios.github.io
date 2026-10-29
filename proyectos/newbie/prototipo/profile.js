function ProfileTab({ nav }) {
  const t = useT();
  const [badge, setBadge] = React.useState(null);
  return /* @__PURE__ */ React.createElement("div", { className: "screen-scroll" }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: "54px 20px 20px",
    background: "linear-gradient(180deg, var(--mint) 0%, var(--paper) 70%)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => nav("messages"), style: {
    width: 40,
    height: 40,
    borderRadius: 999,
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    border: "0.5px solid var(--hair)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icons.bell, { size: 18, stroke: "var(--ink)" }), /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    top: 6,
    right: 8,
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "var(--lime)",
    border: "1.5px solid var(--paper)"
  } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => nav("edit_profile"), style: {
    width: 40,
    height: 40,
    borderRadius: 999,
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    border: "0.5px solid var(--hair)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icons.edit, { size: 18, stroke: "var(--ink)" })), /* @__PURE__ */ React.createElement("button", { onClick: () => nav("settings"), style: {
    width: 40,
    height: 40,
    borderRadius: 999,
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    border: "0.5px solid var(--hair)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icons.settings, { size: 18, stroke: "var(--ink)" })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", marginTop: 8 } }, /* @__PURE__ */ React.createElement(Avatar, { name: mockUser.name, size: 88 }), /* @__PURE__ */ React.createElement("h1", { style: { marginTop: 14, fontSize: 26, fontWeight: 300, letterSpacing: "-0.02em" } }, mockUser.name), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-3)", fontSize: 13, marginTop: 4 } }, mockUser.username, " \xB7 ", mockUser.city), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 14,
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "6px 14px",
    borderRadius: 999,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)"
  } }, /* @__PURE__ */ React.createElement(Icons.spark, { size: 14, stroke: "var(--forest)" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 400 } }, trVal(t, mockUser.level))))), /* @__PURE__ */ React.createElement("div", { style: {
    margin: "8px 20px 0",
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 18,
    padding: 14,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "baseline"
  } }, /* @__PURE__ */ React.createElement(ProfileStat, { n: mockUser.joinedCount, l: t("prof.activities") }), /* @__PURE__ */ React.createElement("div", { style: { width: 0.5, alignSelf: "stretch", background: "var(--hair)" } }), /* @__PURE__ */ React.createElement(ProfileStat, { n: mockUser.metCount, l: t("prof.people_met") }), /* @__PURE__ */ React.createElement("div", { style: { width: 0.5, alignSelf: "stretch", background: "var(--hair)" } }), /* @__PURE__ */ React.createElement(ProfileStat, { n: mockUser.streak, l: t("prof.day_streak") })), /* @__PURE__ */ React.createElement("button", { onClick: () => nav("my_events"), style: {
    margin: "12px 20px 0",
    width: "calc(100% - 40px)",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 16px",
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16,
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 36,
    height: 36,
    borderRadius: 10,
    background: "var(--mint2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icons.calendar, { size: 18, stroke: "var(--forest)" })), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: 14, fontWeight: 400 } }, t("mine.title")), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 16, stroke: "var(--ink-3)" })), /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 20px 8px" } }, /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 12 } }, t("prof.sports")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, flexWrap: "wrap" } }, mockUser.sports.map((s) => /* @__PURE__ */ React.createElement("div", { key: s, style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 14px 8px 8px",
    borderRadius: 999,
    background: "var(--paper)",
    border: "0.5px solid var(--hair-2)"
  } }, sportTile(s, 28), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 400 } }, t("sport." + s)))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 20px 8px" } }, /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 8 } }, t("prof.about")), /* @__PURE__ */ React.createElement("p", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 14,
    padding: 14,
    fontSize: 14,
    color: "var(--ink-2)",
    lineHeight: 1.55
  } }, t("prof.bio_default"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 20px 8px" } }, /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 12 } }, t("prof.badges")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, overflowX: "auto", scrollbarWidth: "none" } }, [
    { t: t("prof.b_first_week"), h: 145, when: "Apr 12" },
    { t: t("prof.b_met_10"), h: 30, when: "May 03" },
    { t: t("prof.b_early_bird"), h: 60, when: "May 11" },
    { t: t("prof.b_3_sports"), h: 270, when: "May 22" },
    { t: t("common.locked"), h: 200, locked: true }
  ].map((b, i) => /* @__PURE__ */ React.createElement("button", { key: i, onClick: () => setBadge(b), style: {
    flexShrink: 0,
    width: 88,
    padding: "12px 10px",
    background: b.locked ? "var(--paper-2)" : "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 14,
    textAlign: "center",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    opacity: b.locked ? 0.5 : 1
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    margin: "0 auto",
    background: b.locked ? "var(--hair)" : `linear-gradient(135deg, oklch(0.85 0.08 ${b.h}), oklch(0.7 0.12 ${b.h}))`,
    color: b.locked ? "var(--ink-3)" : `oklch(0.22 0.10 ${b.h})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, b.locked ? /* @__PURE__ */ React.createElement(Icons.lock, { size: 20 }) : /* @__PURE__ */ React.createElement(Icons.trophy, { size: 20 })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, marginTop: 8, color: "var(--ink-2)" } }, b.t))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 20px 32px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("h4", null, t("prof.friends"), " \xB7 ", mockFriends.length), /* @__PURE__ */ React.createElement("button", { onClick: () => nav("all_friends"), style: { background: "none", border: "none", color: "var(--forest)", fontSize: 12, fontWeight: 400, cursor: "pointer", fontFamily: "inherit" } }, t("home.see_all"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, overflowX: "auto", scrollbarWidth: "none" } }, mockFriends.slice(0, 6).map((f) => /* @__PURE__ */ React.createElement("button", { key: f.name, onClick: () => nav("friend", { friendName: f.name }), style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    minWidth: 60,
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)"
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: f.name, size: 48 }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--ink-2)", textAlign: "center" } }, f.name.split(" ")[0]))))), /* @__PURE__ */ React.createElement(BadgeModal, { badge, onClose: () => setBadge(null) }));
}
function ProfileStat({ n, l }) {
  return /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 200, letterSpacing: "-0.02em" } }, n), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 2 } }, l));
}
function Settings({ onBack, onLogout, openSub, openPayments }) {
  const t = useT();
  const { lang } = useLang();
  const go = (k) => () => openSub && openSub(k);
  return /* @__PURE__ */ React.createElement("div", { className: "screen-scroll" }, /* @__PURE__ */ React.createElement(Header, { title: t("set.title"), onBack }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 20px" } }, /* @__PURE__ */ React.createElement(SettingsGroup, { label: t("set.account") }, /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.email"), value: "alex@email.com" }), /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.phone"), value: "+34 6\u2022\u2022 \u2022\u2022\u2022 123" }), /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.password"), chev: true, onClick: go("password") })), /* @__PURE__ */ React.createElement(SettingsGroup, { label: t("set.payment") }, /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.payment_methods"), chev: true, onClick: () => openPayments && openPayments() })), /* @__PURE__ */ React.createElement(SettingsGroup, { label: t("set.notifications") }, /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.event_reminders"), toggle: true, defaultOn: true }), /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.friend_activity"), toggle: true, defaultOn: true }), /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.new_events"), toggle: true, defaultOn: true }), /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.weekly_summary"), toggle: true })), /* @__PURE__ */ React.createElement(SettingsGroup, { label: t("set.appearance") }, /* @__PURE__ */ React.createElement(ThemeRow, null)), /* @__PURE__ */ React.createElement(SettingsGroup, { label: t("set.preferences") }, /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.units"), value: t("set.units_metric"), chev: true, onClick: go("units") }), /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.language"), value: lang === "es" ? "Espa\xF1ol" : "English", chev: true, onClick: go("language") }), /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.default_radius"), value: "5 km", chev: true, onClick: go("radius") })), /* @__PURE__ */ React.createElement(SettingsGroup, { label: t("set.privacy") }, /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.profile_visibility"), value: t("set.profile_visibility_val"), chev: true, onClick: go("visibility") }), /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.show_on_map"), toggle: true, defaultOn: true }), /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.hide_stats"), toggle: true })), /* @__PURE__ */ React.createElement(SettingsGroup, { label: t("set.about") }, /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.help"), chev: true, onClick: go("help") }), /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.terms"), chev: true, onClick: go("terms") }), /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.privacy_policy"), chev: true, onClick: go("privacy") }), /* @__PURE__ */ React.createElement(SettingsRow, { label: t("set.version"), value: "1.0.0 (alpha)" })), /* @__PURE__ */ React.createElement("button", { onClick: onLogout, style: {
    marginTop: 24,
    width: "100%",
    padding: 14,
    borderRadius: 14,
    background: "var(--paper)",
    border: "0.5px solid var(--hair-2)",
    color: "var(--rose)",
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 400,
    cursor: "pointer"
  } }, t("set.logout"))));
}
function ThemeRow() {
  const t = useT();
  const { theme, setTheme } = useTheme();
  const opts = [["light", t("theme.light"), Icons.sun], ["dark", t("theme.dark"), Icons.moon]];
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "13px 16px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, color: "var(--ink)" } }, t("set.dark_mode")), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 2,
    padding: 3,
    borderRadius: 999,
    background: "var(--mint2)",
    border: "0.5px solid var(--hair)"
  } }, opts.map(([k, label, Ic]) => {
    const on = theme === k;
    return /* @__PURE__ */ React.createElement("button", { key: k, onClick: () => setTheme(k), style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 12px",
      borderRadius: 999,
      border: "none",
      background: on ? "var(--forest)" : "transparent",
      color: on ? "var(--paper)" : "var(--ink-2)",
      fontFamily: "inherit",
      fontSize: 12,
      fontWeight: on ? 500 : 400,
      cursor: "pointer"
    } }, /* @__PURE__ */ React.createElement(Ic, { size: 13, stroke: on ? "var(--paper)" : "var(--ink-2)" }), label);
  })));
}
function SettingsGroup({ label, children }) {
  return /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24 } }, /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 10 } }, label), /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16,
    overflow: "hidden"
  } }, children));
}
function SettingsRow({ label, value, chev, toggle, defaultOn, onClick }) {
  const [on, setOn] = React.useState(!!defaultOn);
  const interactive = chev && onClick;
  const Comp = interactive ? "button" : "div";
  return /* @__PURE__ */ React.createElement(Comp, { onClick: interactive ? onClick : void 0, style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 16px",
    borderBottom: "0.5px solid var(--hair)",
    minHeight: 50,
    background: "none",
    border: "none",
    cursor: interactive ? "pointer" : "default",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: 14 } }, label), value && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: "var(--ink-3)" } }, value), chev && /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 14, stroke: "var(--ink-3)" }), toggle && /* @__PURE__ */ React.createElement("span", { onClick: (e) => {
    e.stopPropagation();
    setOn(!on);
  }, style: {
    width: 44,
    height: 26,
    borderRadius: 999,
    background: on ? "var(--forest)" : "var(--hair-2)",
    cursor: "pointer",
    padding: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: on ? "flex-end" : "flex-start",
    transition: "background 0.2s"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    background: "var(--paper)",
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
  } })));
}
function EditProfile({ onBack, onSave }) {
  const t = useT();
  const [bio, setBio] = React.useState(t("prof.bio_default"));
  const [sports, setSports] = React.useState(mockUser.sports);
  const [level, setLevel] = React.useState("Intermediate");
  const toggleSport = (s) => {
    setSports(sports.includes(s) ? sports.filter((x) => x !== s) : [...sports, s]);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: t("edit.title"), onBack, right: /* @__PURE__ */ React.createElement("button", { onClick: onSave, style: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "var(--forest)",
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 500
  } }, t("common.save")) }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center", padding: "16px 0 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(Avatar, { name: mockUser.name, size: 96 }), /* @__PURE__ */ React.createElement("button", { style: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "var(--forest)",
    color: "var(--paper)",
    border: "2.5px solid var(--paper)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icons.edit, { size: 14, stroke: "var(--paper)" })))), /* @__PURE__ */ React.createElement(Field, { label: t("edit.name"), defaultValue: "Alex Rivera" }), /* @__PURE__ */ React.createElement(Field, { label: t("edit.username"), defaultValue: "@alex.r" }), /* @__PURE__ */ React.createElement(Field, { label: t("edit.city"), defaultValue: "Barcelona" }), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 22, marginBottom: 10 } }, t("edit.bio")), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      value: bio,
      onChange: (e) => setBio(e.target.value),
      rows: 4,
      className: "input",
      style: { resize: "none", fontFamily: "inherit" }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", marginTop: 4, textAlign: "right" } }, bio.length, " / 160"), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 22, marginBottom: 10 } }, t("edit.skill_level")), /* @__PURE__ */ React.createElement(
    ChipGroup,
    {
      options: ["Beginner", "Intermediate", "Advanced"],
      value: level,
      onChange: setLevel
    }
  ), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 22, marginBottom: 10 } }, t("prof.sports"), " (", sports.length, ")"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, Object.keys(sportThemes).map((s) => {
    const on = sports.includes(s);
    return /* @__PURE__ */ React.createElement("button", { key: s, onClick: () => toggleSport(s), style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 10px",
      borderRadius: 12,
      background: on ? "var(--mint)" : "var(--paper)",
      border: "0.5px solid " + (on ? "var(--forest)" : "var(--hair-2)"),
      cursor: "pointer",
      fontFamily: "inherit",
      color: "var(--ink)"
    } }, sportTile(s, 28), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 400, flex: 1, textAlign: "left" } }, t("sport." + s)), on && /* @__PURE__ */ React.createElement(Icons.check, { size: 14, stroke: "var(--forest)", sw: 2.2 }));
  }))));
}
function Field({ label, defaultValue }) {
  return /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 12, color: "var(--ink-3)", display: "block", marginBottom: 6 } }, label), /* @__PURE__ */ React.createElement("input", { className: "input", defaultValue }));
}
function FriendProfile({ name, onBack, openEvent, openChat, openInvite }) {
  const t = useT();
  const friend = mockFriends.find((f) => f.name === name) || { name, sport: "Padel", last: "Padel \xB7 today" };
  const [sheet, setSheet] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const firstName = (friend.name || "").split(" ")[0];
  React.useEffect(() => {
    if (toast) {
      const id = setTimeout(() => setToast(null), 2400);
      return () => clearTimeout(id);
    }
  }, [toast]);
  const recent = [
    { sport: "Padel", t: "Today, 19:00", loc: "Les Corts" },
    { sport: "Running", t: "Yesterday, 7am", loc: "Ciutadella" },
    { sport: "Yoga", t: "Sun \xB7 3 days ago", loc: "Studio Lin" }
  ];
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement("div", { className: "screen-scroll" }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: "54px 20px 16px",
    background: "linear-gradient(180deg, var(--mint) 0%, var(--paper) 70%)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: {
    width: 40,
    height: 40,
    borderRadius: 999,
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    border: "0.5px solid var(--hair)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icons.arrow_left, { size: 18, stroke: "var(--ink)" })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setSheet("options"), style: {
    width: 40,
    height: 40,
    borderRadius: 999,
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    border: "0.5px solid var(--hair)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icons.more, { size: 18, stroke: "var(--ink)" })), /* @__PURE__ */ React.createElement("button", { onClick: () => openChat && openChat(friend.name), style: {
    width: 40,
    height: 40,
    borderRadius: 999,
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    border: "0.5px solid var(--hair)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icons.message, { size: 16, stroke: "var(--ink)" })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", marginTop: 8 } }, /* @__PURE__ */ React.createElement(Avatar, { name: friend.name, size: 88 }), /* @__PURE__ */ React.createElement("h1", { style: { marginTop: 14, fontSize: 26, fontWeight: 300, letterSpacing: "-0.02em" } }, friend.name), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-3)", fontSize: 13, marginTop: 4 } }, friend.sport, " \xB7 Barcelona \xB7 \u2605 4.8"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 20px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => openInvite && openInvite(friend.name), className: "btn", style: {
    background: "var(--forest)",
    color: "var(--paper)",
    padding: "12px 18px",
    fontSize: 14
  } }, /* @__PURE__ */ React.createElement(Icons.plus, { size: 16, stroke: "var(--paper)", sw: 2 }), " ", t("friend.invite_to_event")), /* @__PURE__ */ React.createElement("button", { onClick: () => openChat && openChat(friend.name), className: "btn btn-secondary", style: { padding: "12px 18px", fontSize: 14 } }, t("friend.message"))), /* @__PURE__ */ React.createElement("div", { style: {
    margin: "20px 20px 0",
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 18,
    padding: 14,
    display: "flex",
    justifyContent: "space-around"
  } }, /* @__PURE__ */ React.createElement(ProfileStat, { n: "62", l: t("friend.activities") }), /* @__PURE__ */ React.createElement("div", { style: { width: 0.5, background: "var(--hair)" } }), /* @__PURE__ */ React.createElement(ProfileStat, { n: "3", l: t("friend.shared") }), /* @__PURE__ */ React.createElement("div", { style: { width: 0.5, background: "var(--hair)" } }), /* @__PURE__ */ React.createElement(ProfileStat, { n: "18", l: t("friend.day_streak") })), /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 20px 0" } }, /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 12 } }, t("friend.plays")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, flexWrap: "wrap" } }, [friend.sport, "Running", "Hiking"].map((s) => /* @__PURE__ */ React.createElement("div", { key: s, style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 14px 8px 8px",
    borderRadius: 999,
    background: "var(--paper)",
    border: "0.5px solid var(--hair-2)"
  } }, sportTile(s, 28), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 400 } }, t("sport." + s)))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 20px 32px" } }, /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 12 } }, t("friend.recent")), /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 18,
    overflow: "hidden"
  } }, recent.map((r, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    borderBottom: i < recent.length - 1 ? "0.5px solid var(--hair)" : "none"
  } }, sportTile(r.sport, 36), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400 } }, t("sport." + r.sport)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, r.t, " \xB7 ", r.loc))))))), sheet === "options" && /* @__PURE__ */ React.createElement(
    ProfileOptionsSheet,
    {
      name: firstName,
      onClose: () => setSheet(null),
      onReport: () => setSheet("report"),
      onBlock: () => setSheet("block"),
      onShare: () => setSheet(null)
    }
  ), sheet === "report" && /* @__PURE__ */ React.createElement(
    ReportSheet,
    {
      name: firstName,
      onClose: () => setSheet(null),
      onSubmitted: () => setSheet(null)
    }
  ), sheet === "block" && /* @__PURE__ */ React.createElement(
    BlockDialog,
    {
      name: firstName,
      onClose: () => setSheet(null),
      onConfirm: () => {
        setSheet(null);
        setToast(t("safe.blocked_toast", { name: firstName }));
      }
    }
  ), toast && /* @__PURE__ */ React.createElement(Toast, { msg: toast }));
}
Object.assign(window, {
  ProfileTab,
  ProfileStat,
  Settings,
  SettingsGroup,
  SettingsRow,
  EditProfile,
  Field,
  FriendProfile
});
