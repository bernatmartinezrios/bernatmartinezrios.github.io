const PAY_KEY = "newbie_cards";
const DEFAULT_CARDS = [
  { id: "c1", brand: "visa", last4: "8124", exp: "04/27", name: "Alex Rivera", isDefault: true }
];
let _cards = (() => {
  try {
    const s = localStorage.getItem(PAY_KEY);
    if (s) return JSON.parse(s);
  } catch (e) {
  }
  return DEFAULT_CARDS.slice();
})();
const _paySubs = /* @__PURE__ */ new Set();
function _payEmit() {
  try {
    localStorage.setItem(PAY_KEY, JSON.stringify(_cards));
  } catch (e) {
  }
  _paySubs.forEach((fn) => fn());
}
function usePaymentMethods() {
  const [, force] = React.useReducer((x) => x + 1, 0);
  React.useEffect(() => {
    _paySubs.add(force);
    return () => {
      _paySubs.delete(force);
    };
  }, []);
  return {
    cards: _cards,
    defaultCard: _cards.find((c) => c.isDefault) || _cards[0] || null,
    addCard: (card) => {
      const id = "c" + Date.now();
      const isFirst = _cards.length === 0;
      _cards = [
        ..._cards.map((c) => ({ ...c, isDefault: isFirst ? false : c.isDefault })),
        { ...card, id, isDefault: isFirst }
      ];
      _payEmit();
      return id;
    },
    setDefault: (id) => {
      _cards = _cards.map((c) => ({ ...c, isDefault: c.id === id }));
      _payEmit();
    },
    removeCard: (id) => {
      var _a;
      const wasDefault = (_a = _cards.find((c) => c.id === id)) == null ? void 0 : _a.isDefault;
      _cards = _cards.filter((c) => c.id !== id);
      if (wasDefault && _cards.length) _cards[0].isDefault = true;
      _payEmit();
    }
  };
}
function cardBrandFromNumber(num) {
  const n = num.replace(/\s/g, "");
  if (/^4/.test(n)) return "visa";
  if (/^5[1-5]/.test(n) || /^2[2-7]/.test(n)) return "mc";
  if (/^3[47]/.test(n)) return "amex";
  return "card";
}
function CardChip({ brand, size = "md" }) {
  const big = size === "md";
  const map = {
    visa: { bg: "oklch(0.45 0.12 260)", fg: "#fff", label: "VISA" },
    mc: { bg: "oklch(0.32 0.02 40)", fg: "#fff", label: "MC" },
    amex: { bg: "oklch(0.55 0.11 230)", fg: "#fff", label: "AMEX" },
    card: { bg: "var(--ink-2)", fg: "#fff", label: "" }
  };
  const c = map[brand] || map.card;
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: big ? 40 : 34,
    height: big ? 27 : 23,
    borderRadius: 6,
    background: c.bg,
    color: c.fg,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: brand === "amex" ? 8 : 10,
    fontWeight: 700,
    letterSpacing: "0.02em"
  } }, c.label || /* @__PURE__ */ React.createElement(Icons.card, { size: 15, stroke: "#fff" }));
}
function AddCardForm({ onSave, onCancel, compact }) {
  const t = useT();
  const [num, setNum] = React.useState("");
  const [exp, setExp] = React.useState("");
  const [cvc, setCvc] = React.useState("");
  const [name, setName] = React.useState("");
  const brand = cardBrandFromNumber(num);
  const valid = num.replace(/\s/g, "").length >= 15 && exp.length >= 4 && cvc.length >= 3 && name.trim();
  const fmtNum = (v) => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  const fmtExp = (v) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d;
  };
  const inputStyle = {
    width: "100%",
    background: "var(--paper-2)",
    border: "0.5px solid var(--hair-2)",
    borderRadius: 12,
    padding: "13px 14px",
    fontFamily: "inherit",
    fontSize: 15,
    color: "var(--ink)",
    outline: "none"
  };
  const labelStyle = { fontSize: 12, color: "var(--ink-3)", display: "block", marginBottom: 6 };
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, t("pay.card_number")), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "mono",
      value: num,
      onChange: (e) => setNum(fmtNum(e.target.value)),
      inputMode: "numeric",
      placeholder: "4242 4242 4242 4242",
      style: inputStyle
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" } }, /* @__PURE__ */ React.createElement(CardChip, { brand, size: "sm" })))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, t("pay.expiry")), /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "mono",
      value: exp,
      onChange: (e) => setExp(fmtExp(e.target.value)),
      inputMode: "numeric",
      placeholder: "MM/YY",
      style: inputStyle
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, t("pay.cvc")), /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "mono",
      value: cvc,
      onChange: (e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4)),
      inputMode: "numeric",
      placeholder: "123",
      style: inputStyle
    }
  ))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, t("pay.name_on_card")), /* @__PURE__ */ React.createElement("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "Alex Rivera", style: inputStyle })), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 11.5,
    color: "var(--ink-3)",
    padding: "2px 2px"
  } }, /* @__PURE__ */ React.createElement(Icons.lock, { size: 13, stroke: "var(--ink-3)" }), t("pay.secure_note")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: compact ? "1fr" : "1fr 2fr", gap: 10, marginTop: 2 } }, !compact && /* @__PURE__ */ React.createElement("button", { onClick: onCancel, className: "btn btn-secondary" }, t("common.cancel")), /* @__PURE__ */ React.createElement("button", { disabled: !valid, onClick: () => onSave({
    brand,
    last4: num.replace(/\s/g, "").slice(-4),
    exp,
    name: name.trim()
  }), className: "btn btn-primary", style: { opacity: valid ? 1 : 0.4 } }, t("pay.save_card"))));
}
function PaymentMethodsScreen({ onBack }) {
  const t = useT();
  const { cards, addCard, setDefault, removeCard } = usePaymentMethods();
  const [adding, setAdding] = React.useState(false);
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: t("pay.title"), onBack }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 28px" } }, cards.length === 0 && !adding && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "40px 20px 28px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 52, height: 52, borderRadius: 16, background: "var(--mint)", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(Icons.card, { size: 24, stroke: "var(--forest)" })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, color: "var(--ink)" } }, t("pay.empty_t")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--ink-3)", lineHeight: 1.5, maxWidth: 240 } }, t("pay.empty_s"))), cards.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, marginTop: 8 } }, cards.map((c) => /* @__PURE__ */ React.createElement("div", { key: c.id, style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)",
    borderRadius: 16,
    padding: "14px 14px"
  } }, /* @__PURE__ */ React.createElement(CardChip, { brand: c.brand }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 400, display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { textTransform: "capitalize" } }, c.brand === "mc" ? "Mastercard" : c.brand), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: "var(--ink-2)" } }, "\u2022\u2022 ", c.last4)), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 11, color: "var(--ink-3)", marginTop: 2 } }, t("pay.exp"), " ", c.exp)), c.isDefault ? /* @__PURE__ */ React.createElement("span", { style: {
    fontSize: 11,
    color: "var(--forest)",
    background: "var(--mint)",
    padding: "4px 10px",
    borderRadius: 999,
    fontWeight: 500
  } }, t("pay.default")) : /* @__PURE__ */ React.createElement("button", { onClick: () => setDefault(c.id), style: {
    fontSize: 11,
    color: "var(--ink-2)",
    background: "none",
    border: "0.5px solid var(--hair-2)",
    padding: "4px 10px",
    borderRadius: 999,
    cursor: "pointer",
    fontFamily: "inherit"
  } }, t("pay.make_default")), /* @__PURE__ */ React.createElement("button", { onClick: () => removeCard(c.id), "aria-label": "remove", style: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "var(--ink-3)",
    padding: 4
  } }, /* @__PURE__ */ React.createElement(Icons.trash, { size: 16, stroke: "var(--ink-3)" }))))), adding ? /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 16,
    padding: 16,
    borderRadius: 18,
    background: "var(--paper)",
    border: "0.5px solid var(--hair)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 600, marginBottom: 14 } }, t("pay.add_new")), /* @__PURE__ */ React.createElement(
    AddCardForm,
    {
      onCancel: () => setAdding(false),
      onSave: (card) => {
        addCard(card);
        setAdding(false);
      }
    }
  )) : /* @__PURE__ */ React.createElement("button", { onClick: () => setAdding(true), style: {
    width: "100%",
    marginTop: 16,
    padding: "15px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    background: "var(--mint-2)",
    border: "0.5px dashed var(--sage)",
    borderRadius: 16,
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 500,
    color: "var(--forest)"
  } }, /* @__PURE__ */ React.createElement(Icons.plus, { size: 17, stroke: "var(--forest)", sw: 2 }), t("pay.add_method")), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    marginTop: 22,
    fontSize: 12,
    color: "var(--ink-3)",
    lineHeight: 1.5
  } }, /* @__PURE__ */ React.createElement(Icons.lock, { size: 14, stroke: "var(--ink-3)" }), /* @__PURE__ */ React.createElement("span", null, t("pay.footer_note")))));
}
Object.assign(window, {
  usePaymentMethods,
  PaymentMethodsScreen,
  AddCardForm,
  CardChip,
  cardBrandFromNumber
});
