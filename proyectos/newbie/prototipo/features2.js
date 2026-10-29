function ConfirmDialog({ title, body, confirmLabel, cancelLabel, danger, onConfirm, onCancel }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    zIndex: 60,
    background: "rgba(20,30,22,0.4)",
    backdropFilter: "blur(2px)"
  }, onClick: onCancel }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    background: "var(--paper)",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    padding: "26px 22px 30px",
    animation: "slideUp 0.25s ease"
  } }, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 400, letterSpacing: "-0.01em" } }, title), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 10, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55 } }, body), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22, display: "flex", flexDirection: "column", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: onConfirm, style: {
    width: "100%",
    background: danger ? "oklch(0.55 0.16 25)" : "var(--forest)"
  } }, confirmLabel), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", onClick: onCancel, style: { width: "100%" } }, cancelLabel))));
}
function MyEventCard({ event, kind, onClick }) {
  const t = useT();
  const theme = sportThemes[event.sport] || sportThemes.Padel;
  const SportIcon = SportIcons[event.sport] || SportIcons.Padel;
  const isFull = event.spots === 0;
  const badge = kind === "hosting" ? t("mine.hosting_badge") : event._waitlisted ? t("mine.waitlist_badge") : t("mine.joined_badge");
  const badgeColor = kind === "hosting" ? "var(--forest)" : event._waitlisted ? "oklch(0.6 0.13 50)" : "var(--sage)";
  return /* @__PURE__ */ React.createElement("button", { onClick, style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 12,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 18,
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 48,
    height: 48,
    borderRadius: 14,
    flexShrink: 0,
    background: `linear-gradient(135deg, oklch(0.86 0.07 ${theme.h}), oklch(0.72 0.10 ${theme.h}))`,
    color: `oklch(0.22 0.10 ${theme.h})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(SportIcon, { size: 24, color: `oklch(0.22 0.10 ${theme.h})` })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: {
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: badgeColor
  } }, badge), isFull && kind !== "past" && !event._waitlisted && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.04em" } }, "\xB7 ", t("mine.full"))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, trTitle(t, event.title)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, trDate(t, event.date), ", ", event.time, " \xB7 ", event.loc)), kind === "past" ? /* @__PURE__ */ React.createElement(Icons.star, { size: 16, stroke: "oklch(0.74 0.14 78)" }) : /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 16, stroke: "var(--ink-3)" }));
}
function MyEventsEmpty({ icon, title, sub, cta, onCta }) {
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "40px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "var(--mint2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16
  } }, icon), /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 17, fontWeight: 400 } }, title), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 8, color: "var(--ink-3)", fontSize: 13, lineHeight: 1.55, maxWidth: 240 } }, sub), cta && /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", style: { marginTop: 20 }, onClick: onCta }, cta));
}
function MyEventsScreen({ onBack, openManage, openEvent, openRate, goDiscover, goHost }) {
  const t = useT();
  const [tab, setTab] = React.useState("upcoming");
  const hosting = [{ ...mockEvents[0], host: mockUser.name, _hosting: true }];
  const joined = [
    { ...mockEvents[1] },
    { ...mockEvents[2], spots: 0, _waitlisted: true }
  ];
  const past = [
    { ...mockEvents[3], date: "Mon 27", _past: true },
    { ...mockEvents[5], date: "Sun 26", _past: true }
  ];
  const tabs = [
    ["upcoming", t("mine.tab_upcoming")],
    ["hosting", t("mine.tab_hosting")],
    ["past", t("mine.tab_past")]
  ];
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: t("mine.title"), onBack }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 8px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, background: "var(--mint2)", borderRadius: 999, padding: 3, border: "0.5px solid var(--hair)" } }, tabs.map(([id, label]) => {
    const on = tab === id;
    return /* @__PURE__ */ React.createElement("button", { key: id, onClick: () => setTab(id), style: {
      flex: 1,
      padding: "8px 4px",
      borderRadius: 999,
      border: "none",
      background: on ? "var(--paper)" : "transparent",
      color: on ? "var(--ink)" : "var(--ink-3)",
      boxShadow: on ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
      fontFamily: "inherit",
      fontSize: 13,
      fontWeight: on ? 500 : 400,
      cursor: "pointer"
    } }, label);
  }))), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "8px 20px 28px" } }, tab === "upcoming" && (joined.length ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, joined.map((e) => /* @__PURE__ */ React.createElement(
    MyEventCard,
    {
      key: e.id,
      event: e,
      kind: "joined",
      onClick: () => openManage(e, "joined")
    }
  ))) : /* @__PURE__ */ React.createElement(
    MyEventsEmpty,
    {
      icon: /* @__PURE__ */ React.createElement(Icons.calendar, { size: 26, stroke: "var(--sage)" }),
      title: t("mine.empty_upcoming_t"),
      sub: t("mine.empty_upcoming_s"),
      cta: t("mine.browse"),
      onCta: goDiscover
    }
  )), tab === "hosting" && (hosting.length ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, hosting.map((e) => /* @__PURE__ */ React.createElement(
    MyEventCard,
    {
      key: e.id,
      event: e,
      kind: "hosting",
      onClick: () => openManage(e, "hosting")
    }
  ))) : /* @__PURE__ */ React.createElement(
    MyEventsEmpty,
    {
      icon: /* @__PURE__ */ React.createElement(Icons.plus, { size: 26, stroke: "var(--sage)" }),
      title: t("mine.empty_hosting_t"),
      sub: t("mine.empty_hosting_s"),
      cta: t("mine.host_one"),
      onCta: goHost
    }
  )), tab === "past" && (past.length ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, past.map((e) => /* @__PURE__ */ React.createElement(
    MyEventCard,
    {
      key: e.id,
      event: e,
      kind: "past",
      onClick: () => openRate(e)
    }
  ))) : /* @__PURE__ */ React.createElement(
    MyEventsEmpty,
    {
      icon: /* @__PURE__ */ React.createElement(Icons.clock, { size: 26, stroke: "var(--sage)" }),
      title: t("mine.empty_past_t"),
      sub: t("mine.empty_past_s")
    }
  ))));
}
function ManageEventScreen({ event, kind, onBack, onEdit, openChat, openAttendees, openEvent, afterAction }) {
  const t = useT();
  const ev = event || mockEvents[0];
  const theme = sportThemes[ev.sport] || sportThemes.Padel;
  const [dialog, setDialog] = React.useState(null);
  const isHost = kind === "hosting";
  const attendeeCount = ev.of - ev.spots;
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: t("mine.manage"), onBack }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 28px" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => openEvent && openEvent(ev.id), style: {
    width: "100%",
    textAlign: "left",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    display: "flex",
    gap: 12,
    alignItems: "center",
    padding: 14,
    borderRadius: 18,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)"
  } }, sportTile(ev.sport, 48), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 400 } }, trTitle(t, ev.title)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 3 } }, trDate(t, ev.date), ", ", ev.time), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)" } }, ev.loc)), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 16, stroke: "var(--ink-3)" })), /* @__PURE__ */ React.createElement("button", { onClick: () => openAttendees(ev, kind), style: {
    width: "100%",
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    borderRadius: 14,
    background: "var(--mint2)",
    border: "0.5px solid var(--hair)",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement(Icons.users, { size: 18, stroke: "var(--forest)" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 400 } }, t("mine.view_attendees")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-3)" } }, attendeeCount, " ", t("event.of"), " ", ev.of, ev.spots > 0 ? ` \xB7 ${ev.spots === 1 ? t("mine.one_spot_left") : t("mine.spots_left", { n: ev.spots })}` : ` \xB7 ${t("mine.full")}`)), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 15, stroke: "var(--ink-3)" })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22, display: "flex", flexDirection: "column", gap: 8 } }, isHost && /* @__PURE__ */ React.createElement(ActionRow, { icon: /* @__PURE__ */ React.createElement(Icons.edit, { size: 18, stroke: "var(--ink)" }), label: t("mine.edit"), onClick: onEdit }), /* @__PURE__ */ React.createElement(ActionRow, { icon: /* @__PURE__ */ React.createElement(Icons.message, { size: 18, stroke: "var(--ink)" }), label: t("mine.message_group"), onClick: () => openChat(ev) }), isHost ? /* @__PURE__ */ React.createElement(
    ActionRow,
    {
      icon: /* @__PURE__ */ React.createElement(Icons.slash, { size: 18, stroke: "oklch(0.55 0.16 25)" }),
      label: t("mine.cancel_event"),
      danger: true,
      onClick: () => setDialog("cancel")
    }
  ) : /* @__PURE__ */ React.createElement(
    ActionRow,
    {
      icon: /* @__PURE__ */ React.createElement(Icons.slash, { size: 18, stroke: "oklch(0.55 0.16 25)" }),
      label: t("mine.leave_event"),
      danger: true,
      onClick: () => setDialog("leave")
    }
  ))), dialog === "cancel" && /* @__PURE__ */ React.createElement(
    ConfirmDialog,
    {
      danger: true,
      title: t("mine.cancel_confirm_t"),
      body: t("mine.cancel_confirm_s", { n: attendeeCount }),
      confirmLabel: t("mine.cancel_yes"),
      cancelLabel: t("mine.cancel_keep"),
      onConfirm: () => {
        setDialog(null);
        afterAction && afterAction();
      },
      onCancel: () => setDialog(null)
    }
  ), dialog === "leave" && /* @__PURE__ */ React.createElement(
    ConfirmDialog,
    {
      danger: true,
      title: t("mine.leave_confirm_t"),
      body: t("mine.leave_confirm_s"),
      confirmLabel: t("mine.leave_yes"),
      cancelLabel: t("mine.leave_keep"),
      onConfirm: () => {
        setDialog(null);
        afterAction && afterAction();
      },
      onCancel: () => setDialog(null)
    }
  ));
}
function ActionRow({ icon, label, onClick, danger }) {
  return /* @__PURE__ */ React.createElement("button", { onClick, style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 16px",
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 14,
    cursor: "pointer",
    fontFamily: "inherit",
    textAlign: "left",
    color: danger ? "oklch(0.55 0.16 25)" : "var(--ink)"
  } }, icon, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: 14, fontWeight: 400 } }, label), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 15, stroke: danger ? "oklch(0.55 0.16 25)" : "var(--ink-3)" }));
}
function AttendeesScreen({ event, kind, onBack, openFriend }) {
  const t = useT();
  const ev = event || mockEvents[0];
  const confirmed = ev.participants || [];
  const waitlist = ev.spots === 0 ? ["Nico A.", "Bea L."] : [];
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: t("mine.attendees_title"), onBack }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 28px" } }, /* @__PURE__ */ React.createElement("h4", { style: { marginBottom: 10 } }, t("mine.confirmed"), " \xB7 ", confirmed.length), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--paper)", border: "0.5px solid var(--hair)", borderRadius: 16, overflow: "hidden" } }, confirmed.map((p, i) => /* @__PURE__ */ React.createElement("button", { key: p, onClick: () => openFriend && openFriend(p), style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    borderBottom: i < confirmed.length - 1 ? "0.5px solid var(--hair)" : "none",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: p, size: 38 }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: 14, fontWeight: 400 } }, p), i === 0 && /* @__PURE__ */ React.createElement("span", { className: "chip chip-outline" }, t("mine.host_label")), /* @__PURE__ */ React.createElement(Icons.chevron_right, { size: 14, stroke: "var(--ink-3)" })))), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 26, marginBottom: 10 } }, t("mine.waitlist"), " \xB7 ", waitlist.length), waitlist.length ? /* @__PURE__ */ React.createElement("div", { style: { background: "var(--paper)", border: "0.5px solid var(--hair)", borderRadius: 16, overflow: "hidden" } }, waitlist.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: p, style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    borderBottom: i < waitlist.length - 1 ? "0.5px solid var(--hair)" : "none"
  } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 12, color: "var(--ink-3)", width: 18 } }, i + 1), /* @__PURE__ */ React.createElement(Avatar, { name: p, size: 38 }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: 14, fontWeight: 400 } }, p)))) : /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-3)", fontSize: 13, padding: "4px 2px" } }, t("mine.no_waitlist"))));
}
Object.assign(window, {
  ConfirmDialog,
  MyEventsScreen,
  ManageEventScreen,
  AttendeesScreen,
  MyEventCard
});
