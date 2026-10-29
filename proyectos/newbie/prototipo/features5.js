function SheetShell({ onClose, children, pad = "20px 22px 30px" }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    zIndex: 70,
    background: "rgba(20,30,22,0.4)",
    display: "flex",
    alignItems: "flex-end"
  }, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: {
    width: "100%",
    background: "var(--paper)",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    padding: pad,
    animation: "slideUp 0.25s ease",
    maxHeight: "88%",
    overflowY: "auto"
  } }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 4, background: "var(--hair-2)", borderRadius: 99, margin: "0 auto 16px" } }), children));
}
function SheetRow({ icon, label, danger, onClick }) {
  return /* @__PURE__ */ React.createElement("button", { onClick, style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "14px 4px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    textAlign: "left",
    color: danger ? "oklch(0.55 0.16 25)" : "var(--ink)"
  } }, icon, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: 15, fontWeight: 400 } }, label));
}
function ProfileOptionsSheet({ name, onClose, onReport, onBlock, onShare }) {
  const t = useT();
  return /* @__PURE__ */ React.createElement(SheetShell, { onClose }, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 18, fontWeight: 400, marginBottom: 6 } }, t("safe.options")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement(SheetRow, { icon: /* @__PURE__ */ React.createElement(Icons.share, { size: 19, stroke: "var(--ink)" }), label: t("safe.share_profile"), onClick: onShare }), /* @__PURE__ */ React.createElement("div", { style: { height: 0.5, background: "var(--hair)" } }), /* @__PURE__ */ React.createElement(SheetRow, { icon: /* @__PURE__ */ React.createElement(Icons.flag, { size: 19, stroke: "oklch(0.55 0.16 25)" }), label: t("safe.report", { name }), danger: true, onClick: onReport }), /* @__PURE__ */ React.createElement(SheetRow, { icon: /* @__PURE__ */ React.createElement(Icons.slash, { size: 19, stroke: "oklch(0.55 0.16 25)" }), label: t("safe.block", { name }), danger: true, onClick: onBlock })));
}
function ReportSheet({ name, onClose, onSubmitted }) {
  const t = useT();
  const [reason, setReason] = React.useState(null);
  const [done, setDone] = React.useState(false);
  const reasons = [
    ["spam", t("safe.reason_spam")],
    ["harass", t("safe.reason_harass")],
    ["fake", t("safe.reason_fake")],
    ["noshow", t("safe.reason_noshow")],
    ["safety", t("safe.reason_safety")],
    ["other", t("safe.reason_other")]
  ];
  if (done) {
    return /* @__PURE__ */ React.createElement(SheetShell, { onClose }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "8px 0 8px" } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "var(--mint)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 16px"
    } }, /* @__PURE__ */ React.createElement(Icons.check, { size: 30, stroke: "var(--forest)", sw: 2 })), /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 19, fontWeight: 400 } }, t("safe.reported_t")), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 8, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55, maxWidth: 280, margin: "8px auto 0" } }, t("safe.reported_s")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { width: "100%", marginTop: 22 }, onClick: () => onSubmitted && onSubmitted() }, t("safe.close"))));
  }
  return /* @__PURE__ */ React.createElement(SheetShell, { onClose }, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 18, fontWeight: 400 } }, t("safe.report_title", { name })), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 6, color: "var(--ink-3)", fontSize: 13, lineHeight: 1.5 } }, t("safe.report_sub")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, display: "flex", flexDirection: "column", gap: 8 } }, reasons.map(([k, label]) => {
    const on = reason === k;
    return /* @__PURE__ */ React.createElement("button", { key: k, onClick: () => setReason(k), style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "13px 14px",
      borderRadius: 14,
      cursor: "pointer",
      fontFamily: "inherit",
      textAlign: "left",
      background: on ? "var(--mint)" : "var(--paper-2)",
      border: "0.5px solid " + (on ? "var(--forest)" : "var(--hair-2)"),
      color: "var(--ink)"
    } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      flexShrink: 0,
      border: "1.5px solid " + (on ? "var(--forest)" : "var(--hair-2)"),
      background: on ? "var(--forest)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, on && /* @__PURE__ */ React.createElement(Icons.check, { size: 11, stroke: "var(--paper)", sw: 2.4 })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontWeight: 400 } }, label));
  })), /* @__PURE__ */ React.createElement("h4", { style: { marginTop: 18, marginBottom: 8 } }, t("safe.add_detail")), /* @__PURE__ */ React.createElement("textarea", { rows: 3, placeholder: t("safe.detail_ph"), className: "input", style: { resize: "none", fontFamily: "inherit" } }), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-primary",
      style: { width: "100%", marginTop: 16, opacity: reason ? 1 : 0.45 },
      disabled: !reason,
      onClick: () => setDone(true)
    },
    t("safe.submit_report")
  ));
}
function BlockDialog({ name, onClose, onConfirm }) {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    ConfirmDialog,
    {
      danger: true,
      title: t("safe.block_title", { name }),
      body: t("safe.block_sub"),
      confirmLabel: t("safe.block_confirm"),
      cancelLabel: t("safe.close"),
      onConfirm,
      onCancel: onClose
    }
  );
}
function VerifiedHostSheet({ onClose }) {
  const t = useT();
  return /* @__PURE__ */ React.createElement(SheetShell, { onClose }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "4px 0" } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "var(--mint)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 14px"
  } }, /* @__PURE__ */ React.createElement(Icons.shield, { size: 30, stroke: "var(--forest)" })), /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 19, fontWeight: 400 } }, t("safe.verified_title")), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 8, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55, maxWidth: 280, margin: "8px auto 0" } }, t("safe.verified_sub")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", style: { width: "100%", marginTop: 22 }, onClick: onClose }, t("safe.close"))));
}
function CancellationPolicy() {
  const t = useT();
  const rows = [
    [/* @__PURE__ */ React.createElement(Icons.check, { size: 15, stroke: "var(--forest)", sw: 2 }), t("cp.free_before")],
    [/* @__PURE__ */ React.createElement(Icons.check, { size: 15, stroke: "var(--forest)", sw: 2 }), t("cp.refund")],
    [/* @__PURE__ */ React.createElement(Icons.clock, { size: 15, stroke: "var(--ink-3)" }), t("cp.late")]
  ];
  return /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--paper-2)",
    border: "0.5px solid var(--hair)",
    borderRadius: 14,
    padding: 14
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 10 } }, /* @__PURE__ */ React.createElement(Icons.shield, { size: 15, stroke: "var(--forest)" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 400 } }, t("cp.title"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, rows.map(([ic, label], i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "flex-start", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { marginTop: 1 } }, ic), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--ink-2)", lineHeight: 1.45 } }, label)))));
}
function Toast({ msg }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    bottom: 28,
    left: 20,
    right: 20,
    zIndex: 90,
    background: "var(--ink)",
    color: "var(--paper)",
    borderRadius: 14,
    padding: "13px 16px",
    fontSize: 13,
    fontWeight: 400,
    textAlign: "center",
    animation: "slideUp 0.25s ease",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)"
  } }, msg);
}
Object.assign(window, {
  SheetShell,
  ProfileOptionsSheet,
  ReportSheet,
  BlockDialog,
  VerifiedHostSheet,
  CancellationPolicy,
  Toast
});
