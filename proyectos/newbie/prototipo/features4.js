function Skel({ w = "100%", h = 14, r = 8, style = {} }) {
  return /* @__PURE__ */ React.createElement("div", { style: { width: w, height: h, borderRadius: r, background: "var(--hair)", position: "relative", overflow: "hidden", ...style } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
    animation: "shimmer 1.3s infinite"
  } }));
}
function EventListSkeleton({ count = 4 }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, Array.from({ length: count }).map((_, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    display: "flex",
    gap: 12,
    padding: 12,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 18
  } }, /* @__PURE__ */ React.createElement(Skel, { w: 84, h: 84, r: 14 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 8, paddingTop: 4 } }, /* @__PURE__ */ React.createElement(Skel, { w: "40%", h: 10 }), /* @__PURE__ */ React.createElement(Skel, { w: "80%", h: 15 }), /* @__PURE__ */ React.createElement(Skel, { w: "60%", h: 12 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Skel, { w: "45%", h: 11 })))));
}
function OfflineBanner({ onRetry }) {
  const t = useT();
  return /* @__PURE__ */ React.createElement("div", { style: {
    margin: "0 20px 12px",
    padding: "12px 14px",
    borderRadius: 14,
    background: "oklch(0.96 0.03 75)",
    border: "0.5px solid oklch(0.85 0.08 75)",
    display: "flex",
    alignItems: "center",
    gap: 12
  } }, /* @__PURE__ */ React.createElement(Icons.wifi_off, { size: 18, stroke: "oklch(0.55 0.12 60)" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 400, color: "oklch(0.4 0.1 60)" } }, t("state.offline_t")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "oklch(0.5 0.08 60)", marginTop: 1 } }, t("state.offline_s"))), /* @__PURE__ */ React.createElement("button", { onClick: onRetry, style: {
    padding: "6px 12px",
    borderRadius: 999,
    border: "0.5px solid oklch(0.7 0.1 60)",
    background: "transparent",
    color: "oklch(0.45 0.12 60)",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 12,
    fontWeight: 400
  } }, t("state.retry")));
}
function EmptyState({ icon, title, sub, cta, onCta, compact }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: compact ? "32px 24px" : "48px 24px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "var(--mint2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16
  } }, icon), /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 17, fontWeight: 400 } }, title), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 8, color: "var(--ink-3)", fontSize: 13, lineHeight: 1.55, maxWidth: 250 } }, sub), cta && /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", style: { marginTop: 20 }, onClick: onCta }, cta));
}
function ErrorState({ onRetry }) {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    EmptyState,
    {
      icon: /* @__PURE__ */ React.createElement(Icons.slash, { size: 26, stroke: "oklch(0.55 0.16 25)" }),
      title: t("state.error_t"),
      sub: t("state.error_s"),
      cta: t("state.retry"),
      onCta: onRetry
    }
  );
}
Object.assign(window, { Skel, EventListSkeleton, OfflineBanner, EmptyState, ErrorState });
