function EventGroupChat({ event, onBack, openEvent }) {
  const t = useT();
  const ev = event || mockEvents[0];
  const theme = sportThemes[ev.sport] || sportThemes.Padel;
  const members = ev.participants || ["Marta P.", "Joan L.", "Sara M."];
  const host = members[0];
  const [messages, setMessages] = React.useState([
    { kind: "system", txt: t("gc.system_created", { host }) },
    { who: members[0], txt: t("gc.m1"), time: "17:02" },
    { who: members[1], txt: t("gc.m2"), time: "17:05" },
    { who: "me", txt: t("gc.m3"), time: "18:48" },
    { who: members[0], txt: t("gc.m4"), time: "18:49" }
  ]);
  const [draft, setDraft] = React.useState("");
  const scrollRef = React.useRef(null);
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);
  const send = () => {
    if (!draft.trim()) return;
    setMessages((m) => [...m, { who: "me", txt: draft.trim(), time: "now" }]);
    setDraft("");
    setTimeout(() => {
      setMessages((m) => [...m, { who: members[1], txt: "\u{1F44D}", time: "now" }]);
    }, 1e3);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "54px 16px 12px", borderBottom: "0.5px solid var(--hair)", background: "var(--paper)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: { background: "none", border: "none", padding: 4, cursor: "pointer", color: "var(--ink)" } }, /* @__PURE__ */ React.createElement(Icons.arrow_left, { size: 22 })), /* @__PURE__ */ React.createElement("div", { style: {
    width: 38,
    height: 38,
    borderRadius: 11,
    flexShrink: 0,
    background: `linear-gradient(135deg, oklch(0.86 0.07 ${theme.h}), oklch(0.72 0.10 ${theme.h}))`,
    color: `oklch(0.22 0.10 ${theme.h})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, (SportIcons[ev.sport] || SportIcons.Padel)({ size: 20, color: `oklch(0.22 0.10 ${theme.h})` })), /* @__PURE__ */ React.createElement("button", { onClick: () => openEvent && openEvent(ev.id), style: {
    flex: 1,
    minWidth: 0,
    background: "none",
    border: "none",
    textAlign: "left",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    padding: 0
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, trTitle(t, ev.title)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)" } }, t("gc.members", { n: members.length }))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex" } }, members.slice(0, 3).map((m, i) => /* @__PURE__ */ React.createElement("div", { key: m, style: { marginLeft: i ? -10 : 0, border: "2px solid var(--paper)", borderRadius: 999 } }, /* @__PURE__ */ React.createElement(Avatar, { name: m, size: 26 }))))), /* @__PURE__ */ React.createElement("button", { onClick: () => openEvent && openEvent(ev.id), style: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    borderRadius: 12,
    background: "var(--mint2)",
    border: "0.5px solid var(--hair)",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement(Icons.pin, { size: 13, stroke: "var(--forest)" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--ink-2)", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, t("gc.pinned", { place: ev.loc, time: ev.time })), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 13, stroke: "var(--ink-3)" }))), /* @__PURE__ */ React.createElement("div", { ref: scrollRef, className: "screen-scroll", style: { padding: "16px 14px 8px", display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { alignSelf: "center", fontSize: 11, color: "var(--ink-3)", margin: "2px 0 10px" } }, t("gc.today")), messages.map((m, i) => {
    if (m.kind === "system") {
      return /* @__PURE__ */ React.createElement("div", { key: i, style: {
        alignSelf: "center",
        textAlign: "center",
        maxWidth: "85%",
        fontSize: 11,
        color: "var(--ink-3)",
        padding: "6px 12px",
        background: "var(--paper-2)",
        borderRadius: 10,
        margin: "4px 0 10px"
      } }, m.txt);
    }
    const mine = m.who === "me";
    const prev = messages[i - 1];
    const showName = !mine && (!prev || prev.who !== m.who || prev.kind === "system");
    return /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      gap: 8,
      alignItems: "flex-end",
      alignSelf: mine ? "flex-end" : "flex-start",
      maxWidth: "82%",
      marginTop: showName ? 8 : 0
    } }, !mine && /* @__PURE__ */ React.createElement("div", { style: { width: 26, flexShrink: 0 } }, showName && /* @__PURE__ */ React.createElement(Avatar, { name: m.who, size: 26 })), /* @__PURE__ */ React.createElement("div", null, showName && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)", marginBottom: 3, marginLeft: 4 } }, m.who), /* @__PURE__ */ React.createElement("div", { style: {
      padding: "9px 13px",
      borderRadius: 16,
      background: mine ? "var(--forest)" : "var(--paper-2)",
      color: mine ? "var(--paper)" : "var(--ink)",
      border: mine ? "none" : "0.5px solid var(--hair)",
      fontSize: 14,
      lineHeight: 1.4,
      borderBottomRightRadius: mine ? 5 : 16,
      borderBottomLeftRadius: mine ? 16 : 5
    } }, m.txt)));
  })), /* @__PURE__ */ React.createElement("div", { style: {
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
      placeholder: t("gc.ph"),
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
Object.assign(window, { EventGroupChat });
