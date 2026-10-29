const Icon = ({ children, size = 24, stroke = "currentColor", fill = "none", sw = 1.5 }) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill,
    stroke,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  children
);
const Icons = {
  home: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 11l9-8 9 8" }), /* @__PURE__ */ React.createElement("path", { d: "M5 10v10h14V10" })),
  compass: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M15.5 8.5l-2 5.5-5.5 2 2-5.5z" })),
  chart: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 19V5" }), /* @__PURE__ */ React.createElement("path", { d: "M4 19h16" }), /* @__PURE__ */ React.createElement("path", { d: "M8 15v-3" }), /* @__PURE__ */ React.createElement("path", { d: "M12 15V8" }), /* @__PURE__ */ React.createElement("path", { d: "M16 15v-5" })),
  user: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "8", r: "4" }), /* @__PURE__ */ React.createElement("path", { d: "M4 21c0-4 4-7 8-7s8 3 8 7" })),
  plus: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 5v14M5 12h14" })),
  search: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "11", r: "7" }), /* @__PURE__ */ React.createElement("path", { d: "M21 21l-4-4" })),
  filter: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 5h18M6 12h12M10 19h4" })),
  map: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 4v14M15 6v14" })),
  list: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 6h16M4 12h16M4 18h16" })),
  pin: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 21s-7-7.5-7-12a7 7 0 0114 0c0 4.5-7 12-7 12z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "9", r: "2.5" })),
  calendar: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "5", width: "18", height: "16", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M3 9h18M8 3v4M16 3v4" })),
  clock: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M12 7v5l3 2" })),
  arrow_left: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M15 5l-7 7 7 7" })),
  arrow_right: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M9 5l7 7-7 7" })),
  chevron_right: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M9 6l6 6-6 6" })),
  chevron_down: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M6 9l6 6 6-6" })),
  close: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M6 6l12 12M18 6L6 18" })),
  settings: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "3" }), /* @__PURE__ */ React.createElement("path", { d: "M19 12a7 7 0 00-.1-1.1l2-1.5-2-3.5-2.4 1a7 7 0 00-1.9-1.1L14 3h-4l-.6 2.7a7 7 0 00-1.9 1.1l-2.4-1-2 3.5 2 1.5A7 7 0 005 12c0 .4 0 .7.1 1.1l-2 1.5 2 3.5 2.4-1a7 7 0 001.9 1.1L10 21h4l.6-2.7a7 7 0 001.9-1.1l2.4 1 2-3.5-2-1.5c.1-.4.1-.7.1-1.1z" })),
  bell: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M6 8a6 6 0 1112 0c0 7 3 9 3 9H3s3-2 3-9" }), /* @__PURE__ */ React.createElement("path", { d: "M10 21a2 2 0 004 0" })),
  edit: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 20h4l10-10-4-4L4 16v4z" }), /* @__PURE__ */ React.createElement("path", { d: "M14 6l4 4" })),
  trophy: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M8 4h8v6a4 4 0 01-8 0V4z" }), /* @__PURE__ */ React.createElement("path", { d: "M8 6H5v2a3 3 0 003 3M16 6h3v2a3 3 0 01-3 3" }), /* @__PURE__ */ React.createElement("path", { d: "M10 14v3h4v-3M8 21h8" })),
  spark: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" })),
  sun: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "4.5" }), /* @__PURE__ */ React.createElement("path", { d: "M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" })),
  moon: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M20 14.5A8 8 0 119.5 4a6.5 6.5 0 1010.5 10.5z" })),
  fire: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 3s-1 4-4 6-3 6-1 9 5 3 7 2 3-3 3-6c0-2-2-4-3-6 0 2-1 3-2 3s0-4 0-8z" })),
  target: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "5" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "1.5", fill: "currentColor" })),
  heart: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 20s-7-4.5-7-10a4 4 0 017-2.7A4 4 0 0119 10c0 5.5-7 10-7 10z" })),
  check: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 12l5 5 9-11" })),
  lock: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M8 11V7a4 4 0 018 0v4" })),
  card: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2.5" }), /* @__PURE__ */ React.createElement("path", { d: "M3 10h18" })),
  trash: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 7h16" }), /* @__PURE__ */ React.createElement("path", { d: "M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2" }), /* @__PURE__ */ React.createElement("path", { d: "M6 7l1 13a1 1 0 001 1h8a1 1 0 001-1l1-13" })),
  lightning: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M13 3L5 14h6l-1 7 8-11h-6l1-7z" })),
  google: (p) => /* @__PURE__ */ React.createElement("svg", { width: p.size || 20, height: p.size || 20, viewBox: "0 0 48 48" }, /* @__PURE__ */ React.createElement("path", { fill: "#FFC107", d: "M43.6 20.1H42V20H24v8h11.3c-1.6 4.7-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" }), /* @__PURE__ */ React.createElement("path", { fill: "#FF3D00", d: "M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" }), /* @__PURE__ */ React.createElement("path", { fill: "#4CAF50", d: "M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.1 35 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" }), /* @__PURE__ */ React.createElement("path", { fill: "#1976D2", d: "M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4.1 5.6l6.2 5.2C40.5 35.4 44 30.1 44 24c0-1.3-.1-2.6-.4-3.9z" })),
  users: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "8", r: "3.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "17", cy: "9", r: "2.5" }), /* @__PURE__ */ React.createElement("path", { d: "M2 20c0-3 3-5 7-5s7 2 7 5" }), /* @__PURE__ */ React.createElement("path", { d: "M16 20c0-2 2-3.5 5-3.5" })),
  star: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z" })),
  star_fill: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p, fill: p.stroke || "currentColor" }, /* @__PURE__ */ React.createElement("path", { d: "M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z" })),
  shield: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 12l2 2 4-4" })),
  flag: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 21V4M5 4h11l-2 4 2 4H5" })),
  slash: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M6 6l12 12" })),
  wifi_off: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 3l18 18M9.5 17.5a3.5 3.5 0 015 0M5.5 13a9 9 0 0110-1.8M2 8.8a14 14 0 016-3.4M22 8.8a14 14 0 00-5-3.1" })),
  message: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 5h16v11H8l-4 4z" })),
  ticket: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 8a2 2 0 012-2h12a2 2 0 012 2 2 2 0 000 4 2 2 0 010 4 2 2 0 01-2 2H6a2 2 0 01-2-2 2 2 0 000-4 2 2 0 010-4z" }), /* @__PURE__ */ React.createElement("path", { d: "M14 6v12", strokeDasharray: "2 2" })),
  more: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "5", cy: "12", r: "1.4", fill: "currentColor", stroke: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "1.4", fill: "currentColor", stroke: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "19", cy: "12", r: "1.4", fill: "currentColor", stroke: "none" })),
  share: (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 3v13M12 3l-4 4M12 3l4 4M5 13v6a1 1 0 001 1h12a1 1 0 001-1v-6" }))
};
const SportIcons = {
  // Padel: paddle racket (solid head, no strings)
  Padel: ({ size = 24, color = "currentColor" }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("ellipse", { cx: "11", cy: "9", rx: "6.5", ry: "7" }), /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "7", r: "0.8", fill: color }), /* @__PURE__ */ React.createElement("circle", { cx: "13", cy: "6.5", r: "0.8", fill: color }), /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "10.5", r: "0.8", fill: color }), /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "11", r: "0.8", fill: color }), /* @__PURE__ */ React.createElement("circle", { cx: "14", cy: "11", r: "0.8", fill: color }), /* @__PURE__ */ React.createElement("path", { d: "M11 16v4M9.5 20h3" })),
  // Tennis: racket with strings + ball
  Tennis: ({ size = 24, color = "currentColor" }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("ellipse", { cx: "10", cy: "9", rx: "5.5", ry: "6.5" }), /* @__PURE__ */ React.createElement("path", { d: "M5.8 6.5l8.4 5M4.7 9l10.6 2M5.5 11.5l9-1M7 14l6.5-4" }), /* @__PURE__ */ React.createElement("path", { d: "M10 15.5l-3.5 4.5M8 20h3" })),
  // Running: stylized runner
  Running: ({ size = 24, color = "currentColor" }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "16", cy: "4.5", r: "1.6" }), /* @__PURE__ */ React.createElement("path", { d: "M16 7.5l-3.5 3 2 3 3 1.5" }), /* @__PURE__ */ React.createElement("path", { d: "M12.5 10.5l-3.5 1-1.5 4" }), /* @__PURE__ */ React.createElement("path", { d: "M14.5 13.5l-1.5 4-3 1.5" }), /* @__PURE__ */ React.createElement("path", { d: "M5 8.5h3" })),
  // Yoga: meditation / lotus pose
  Yoga: ({ size = 24, color = "currentColor" }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "6", r: "1.8" }), /* @__PURE__ */ React.createElement("path", { d: "M12 9v5" }), /* @__PURE__ */ React.createElement("path", { d: "M12 14l-5 4.5h10z" }), /* @__PURE__ */ React.createElement("path", { d: "M7 13.5C5 12.5 3.5 14 4 15.5" }), /* @__PURE__ */ React.createElement("path", { d: "M17 13.5c2-1 3.5.5 3 2" })),
  // Climbing: mountain with route line
  Climbing: ({ size = 24, color = "currentColor" }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M3 20l5-8 3 4 3-7 4 5 3-3v9z" }), /* @__PURE__ */ React.createElement("circle", { cx: "15", cy: "6", r: "1", fill: color })),
  // Cycling: bicycle
  Cycling: ({ size = 24, color = "currentColor" }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "5.5", cy: "16", r: "3.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "18.5", cy: "16", r: "3.5" }), /* @__PURE__ */ React.createElement("path", { d: "M5.5 16l4-7h6l3 7" }), /* @__PURE__ */ React.createElement("path", { d: "M9.5 9h3" }), /* @__PURE__ */ React.createElement("path", { d: "M15.5 9l-1-3h-2" })),
  // Football (soccer): hexagon ball
  Football: ({ size = 24, color = "currentColor" }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "8.5" }), /* @__PURE__ */ React.createElement("path", { d: "M12 7l3 2.2-1.2 3.6h-3.6L9 9.2z", fill: color, stroke: "none" }), /* @__PURE__ */ React.createElement("path", { d: "M12 7V3.5M15 9.2l3.2-1M13.8 12.8L16 16M10.2 12.8L8 16M9 9.2L5.8 8.2" })),
  // Basketball: ball with seams
  Basketball: ({ size = 24, color = "currentColor" }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "8.5" }), /* @__PURE__ */ React.createElement("path", { d: "M12 3.5v17M3.5 12h17" }), /* @__PURE__ */ React.createElement("path", { d: "M6 6c2 2 3 4 3 6s-1 4-3 6M18 6c-2 2-3 4-3 6s1 4 3 6" })),
  // Swimming: waves
  Swimming: ({ size = 24, color = "currentColor" }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "17", cy: "6", r: "1.6" }), /* @__PURE__ */ React.createElement("path", { d: "M5 11.5c2.5 0 2.5-1.5 5-1.5l3-5 4 3-3 4" }), /* @__PURE__ */ React.createElement("path", { d: "M2 17c2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2 2 1.2 4 1.2 2-1.2 4-1.2" }), /* @__PURE__ */ React.createElement("path", { d: "M2 20.5c2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2 2 1.2 4 1.2 2-1.2 4-1.2" })),
  // Pilates: reformer / stretch posture
  Pilates: ({ size = 24, color = "currentColor" }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "7", cy: "6", r: "1.6" }), /* @__PURE__ */ React.createElement("path", { d: "M7 8.5v3l4 1.5" }), /* @__PURE__ */ React.createElement("path", { d: "M11 13l3 -2 4 .5" }), /* @__PURE__ */ React.createElement("path", { d: "M11 13l-1 5 -3.5 1" }), /* @__PURE__ */ React.createElement("path", { d: "M3 20h18" })),
  // Hiking: figure with stick + mountain
  Hiking: ({ size = 24, color = "currentColor" }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "13", cy: "4.5", r: "1.4" }), /* @__PURE__ */ React.createElement("path", { d: "M13 7l-2 3 2.5 2v4l-2 4" }), /* @__PURE__ */ React.createElement("path", { d: "M13.5 12l3 .5 1.5 3" }), /* @__PURE__ */ React.createElement("path", { d: "M11 10l-2.5 0M8.5 10v10" })),
  // CrossFit: dumbbell
  CrossFit: ({ size = 24, color = "currentColor" }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M2 12h2M22 12h-2" }), /* @__PURE__ */ React.createElement("rect", { x: "4", y: "8", width: "3", height: "8", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "17", y: "8", width: "3", height: "8", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "7", y: "10", width: "10", height: "4", rx: "1" }))
};
const tokens = {
  forest: "oklch(0.32 0.06 150)",
  pine: "oklch(0.42 0.07 148)",
  sage: "oklch(0.62 0.08 148)",
  moss: "oklch(0.78 0.07 145)",
  mint: "oklch(0.94 0.028 155)",
  mint2: "oklch(0.97 0.018 155)",
  lime: "oklch(0.86 0.14 132)",
  paper: "oklch(0.987 0.004 150)",
  paper2: "oklch(0.97 0.005 150)",
  ink: "oklch(0.20 0.015 150)",
  ink2: "oklch(0.42 0.012 150)",
  ink3: "oklch(0.62 0.010 150)",
  hair: "oklch(0.90 0.008 150)"
};
function NewbieLogo({ size = 28, color = "var(--forest)" }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", alignItems: "baseline", gap: 0, color } }, /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: "Manrope",
    fontWeight: 200,
    fontSize: size,
    letterSpacing: "-0.04em",
    lineHeight: 1
  } }, "newbie"), /* @__PURE__ */ React.createElement("span", { style: {
    width: size * 0.12,
    height: size * 0.12,
    borderRadius: "50%",
    background: "var(--lime)",
    marginLeft: size * 0.04,
    alignSelf: "flex-end",
    marginBottom: size * 0.06
  } }));
}
const userPhotos = {
  "Alex Rivera": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  "Marta P\xE9rez": "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  "Marta P.": "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  "Pablo Kim": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
  "Pablo K.": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
  "Lin Wang": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
  "Lin W.": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
  "Ari Solano": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  "Ari S.": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  "Dani Torres": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  "Dani T.": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  "Eva Ruiz": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  "Eva R.": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  "Joan L.": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
  "Sara M.": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  "Iv\xE1n S.": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  "Lola D.": "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "Noa H.": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
  "Tomi B.": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  "Pep G.": "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  "Jon V.": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  "Mei C.": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
  "Lex F.": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
  "Bru K.": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  "Hugo M.": "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  "Nico A.": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
};
const sportPhotos = {
  Padel: "assets/padel.jpg",
  // local — rackets & balls on a padel court
  Tennis: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6",
  Running: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
  Yoga: "https://images.unsplash.com/photo-1588286840104-8957b019727f",
  Climbing: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
  Cycling: "https://images.unsplash.com/photo-1485965120184-e220f721d03e",
  Football: "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
  Basketball: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
  Swimming: "https://images.unsplash.com/photo-1530549387789-4c1017266635",
  Pilates: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  Hiking: "https://images.unsplash.com/photo-1551632811-561732d1e306",
  CrossFit: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
};
function unsplashSrc(url, w = 400) {
  if (!url) return "";
  if (!url.startsWith("http")) return url;
  return `${url}?w=${w}&auto=format&fit=crop&q=70`;
}
function Avatar({ name = "?", size = 36, hue = 150, ring = false }) {
  const initial = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const h = name ? (name.charCodeAt(0) * 11 + (name.charCodeAt(1) || 0) * 7) % 360 : hue;
  const photo = userPhotos[name];
  const [errored, setErrored] = React.useState(false);
  const baseStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    flexShrink: 0,
    position: "relative",
    overflow: "hidden",
    border: ring ? `2px solid var(--paper)` : "none",
    outline: ring ? `1.5px solid var(--forest)` : "none"
  };
  if (photo && !errored) {
    return /* @__PURE__ */ React.createElement("div", { style: baseStyle }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: unsplashSrc(photo, Math.max(160, size * 2)),
        alt: name,
        onError: () => setErrored(true),
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          background: `oklch(0.85 0.08 ${h})`
        }
      }
    ));
  }
  return /* @__PURE__ */ React.createElement("div", { style: {
    ...baseStyle,
    background: `oklch(0.85 0.08 ${h})`,
    color: `oklch(0.28 0.08 ${h})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Manrope",
    fontWeight: 400,
    fontSize: size * 0.36,
    letterSpacing: "0.02em"
  } }, initial);
}
function PadelIllustration({ width = "100%", height = "100%" }) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: "0 0 400 280",
      preserveAspectRatio: "xMidYMid slice",
      width,
      height,
      style: { display: "block" }
    },
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "padelSky", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "oklch(0.55 0.13 145)" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "oklch(0.82 0.06 145)" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "padelFloor", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "oklch(0.58 0.12 145)" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "oklch(0.38 0.13 145)" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "padelGlass", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "rgba(255,255,255,0.28)" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "rgba(255,255,255,0.06)" })), /* @__PURE__ */ React.createElement("radialGradient", { id: "padelBallG", cx: "0.35", cy: "0.35", r: "0.7" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "oklch(0.97 0.20 110)" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "oklch(0.78 0.22 100)" })), /* @__PURE__ */ React.createElement("radialGradient", { id: "padelFlare", cx: "0.5", cy: "0.5", r: "0.5" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "rgba(255,240,200,0.45)" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "rgba(255,240,200,0)" })), /* @__PURE__ */ React.createElement("radialGradient", { id: "padelVig", cx: "0.5", cy: "0.55", r: "0.75" }, /* @__PURE__ */ React.createElement("stop", { offset: "55%", stopColor: "rgba(0,0,0,0)" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "rgba(0,0,0,0.4)" }))),
    /* @__PURE__ */ React.createElement("rect", { x: "0", y: "0", width: "400", height: "280", fill: "url(#padelSky)" }),
    /* @__PURE__ */ React.createElement("circle", { cx: "330", cy: "40", r: "100", fill: "url(#padelFlare)" }),
    /* @__PURE__ */ React.createElement("g", { opacity: "0.18", fill: "oklch(0.32 0.10 145)" }, /* @__PURE__ */ React.createElement("rect", { x: "80", y: "80", width: "60", height: "40" }), /* @__PURE__ */ React.createElement("rect", { x: "150", y: "70", width: "40", height: "50" }), /* @__PURE__ */ React.createElement("rect", { x: "220", y: "78", width: "80", height: "42" }), /* @__PURE__ */ React.createElement("rect", { x: "305", y: "65", width: "45", height: "55" })),
    /* @__PURE__ */ React.createElement("path", { d: "M 0 280 L 400 280 L 268 130 L 132 130 Z", fill: "url(#padelFloor)" }),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M 0 280 L 132 130 L 132 75 L 0 200 Z",
        fill: "url(#padelGlass)",
        stroke: "rgba(255,255,255,0.45)",
        strokeWidth: "0.8"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M 400 280 L 268 130 L 268 75 L 400 200 Z",
        fill: "url(#padelGlass)",
        stroke: "rgba(255,255,255,0.45)",
        strokeWidth: "0.8"
      }
    ),
    /* @__PURE__ */ React.createElement("g", { stroke: "rgba(255,255,255,0.22)", strokeWidth: "0.5", fill: "none" }, /* @__PURE__ */ React.createElement("line", { x1: "44", y1: "237", x2: "132", y2: "125" }), /* @__PURE__ */ React.createElement("line", { x1: "88", y1: "183", x2: "132", y2: "125" })),
    /* @__PURE__ */ React.createElement("g", { stroke: "rgba(255,255,255,0.22)", strokeWidth: "0.5", fill: "none" }, /* @__PURE__ */ React.createElement("line", { x1: "356", y1: "237", x2: "268", y2: "125" }), /* @__PURE__ */ React.createElement("line", { x1: "312", y1: "183", x2: "268", y2: "125" })),
    /* @__PURE__ */ React.createElement(
      "rect",
      {
        x: "132",
        y: "75",
        width: "136",
        height: "55",
        fill: "url(#padelGlass)",
        stroke: "rgba(255,255,255,0.55)",
        strokeWidth: "0.9"
      }
    ),
    /* @__PURE__ */ React.createElement("line", { x1: "200", y1: "75", x2: "200", y2: "130", stroke: "rgba(255,255,255,0.28)", strokeWidth: "0.6" }),
    /* @__PURE__ */ React.createElement("line", { x1: "166", y1: "75", x2: "166", y2: "130", stroke: "rgba(255,255,255,0.18)", strokeWidth: "0.5" }),
    /* @__PURE__ */ React.createElement("line", { x1: "234", y1: "75", x2: "234", y2: "130", stroke: "rgba(255,255,255,0.18)", strokeWidth: "0.5" }),
    /* @__PURE__ */ React.createElement("line", { x1: "132", y1: "75", x2: "268", y2: "75", stroke: "rgba(255,255,255,0.55)", strokeWidth: "1.1" }),
    /* @__PURE__ */ React.createElement("g", { stroke: "white", fill: "none", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("line", { x1: "132", y1: "130", x2: "268", y2: "130", strokeOpacity: "0.75", strokeWidth: "1" }), /* @__PURE__ */ React.createElement("line", { x1: "148", y1: "155", x2: "252", y2: "155", strokeOpacity: "0.72", strokeWidth: "1" }), /* @__PURE__ */ React.createElement("line", { x1: "100", y1: "185", x2: "300", y2: "185", strokeOpacity: "0.92", strokeWidth: "1.4" }), /* @__PURE__ */ React.createElement("line", { x1: "60", y1: "216", x2: "340", y2: "216", strokeOpacity: "0.85", strokeWidth: "1.2" }), /* @__PURE__ */ React.createElement("line", { x1: "20", y1: "262", x2: "380", y2: "262", strokeOpacity: "0.95", strokeWidth: "1.6" }), /* @__PURE__ */ React.createElement("line", { x1: "20", y1: "262", x2: "148", y2: "155", strokeOpacity: "0.85", strokeWidth: "1.2" }), /* @__PURE__ */ React.createElement("line", { x1: "380", y1: "262", x2: "252", y2: "155", strokeOpacity: "0.85", strokeWidth: "1.2" }), /* @__PURE__ */ React.createElement("line", { x1: "200", y1: "185", x2: "200", y2: "155", strokeOpacity: "0.55", strokeWidth: "0.9", strokeDasharray: "3 3" }), /* @__PURE__ */ React.createElement("line", { x1: "200", y1: "185", x2: "200", y2: "262", strokeOpacity: "0.55", strokeWidth: "1", strokeDasharray: "4 4" })),
    /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("ellipse", { cx: "200", cy: "200", rx: "105", ry: "3", fill: "rgba(0,0,0,0.25)" }), /* @__PURE__ */ React.createElement("rect", { x: "100", y: "170", width: "200", height: "15", fill: "rgba(230,240,232,0.78)" }), /* @__PURE__ */ React.createElement("line", { x1: "100", y1: "170", x2: "300", y2: "170", stroke: "white", strokeOpacity: "0.95", strokeWidth: "1.4" }), /* @__PURE__ */ React.createElement("line", { x1: "100", y1: "185", x2: "300", y2: "185", stroke: "rgba(20,40,30,0.55)", strokeWidth: "0.7" }), /* @__PURE__ */ React.createElement("g", { stroke: "rgba(20,40,30,0.45)", strokeWidth: "0.35" }, Array.from({ length: 28 }).map((_, i) => /* @__PURE__ */ React.createElement("line", { key: i, x1: 102 + i * 7.1, y1: "171", x2: 102 + i * 7.1, y2: "184" }))), /* @__PURE__ */ React.createElement("g", { stroke: "rgba(20,40,30,0.3)", strokeWidth: "0.3" }, /* @__PURE__ */ React.createElement("line", { x1: "100", y1: "175", x2: "300", y2: "175" }), /* @__PURE__ */ React.createElement("line", { x1: "100", y1: "180", x2: "300", y2: "180" })), /* @__PURE__ */ React.createElement("rect", { x: "95", y: "166", width: "6", height: "22", rx: "1", fill: "oklch(0.28 0.06 145)" }), /* @__PURE__ */ React.createElement("rect", { x: "299", y: "166", width: "6", height: "22", rx: "1", fill: "oklch(0.28 0.06 145)" })),
    /* @__PURE__ */ React.createElement("g", { transform: "translate(248 196)" }, /* @__PURE__ */ React.createElement("ellipse", { cx: "0", cy: "34", rx: "11", ry: "2.4", fill: "rgba(0,0,0,0.28)" }), /* @__PURE__ */ React.createElement("circle", { r: "9.5", fill: "url(#padelBallG)" }), /* @__PURE__ */ React.createElement("path", { d: "M -7.5 -2 Q 0 -7.5 7.5 -2", fill: "none", stroke: "rgba(255,255,255,0.7)", strokeWidth: "0.7" }), /* @__PURE__ */ React.createElement("path", { d: "M -7 3.5 Q 0 8.5 7 3", fill: "none", stroke: "rgba(255,255,255,0.7)", strokeWidth: "0.7" })),
    /* @__PURE__ */ React.createElement("path", { d: "M 60 262 L 340 262 L 268 200 L 132 200 Z", fill: "white", opacity: "0.04" }),
    /* @__PURE__ */ React.createElement("rect", { x: "0", y: "0", width: "400", height: "280", fill: "url(#padelVig)" })
  );
}
function SportPhoto({ sport, height = 120, radius = 14, children, overlay = true, w = 600, style = {} }) {
  const t = sportThemes[sport] || sportThemes.Padel;
  const SportIcon = SportIcons[sport] || SportIcons.Padel;
  const photo = sportPhotos[sport];
  const [errored, setErrored] = React.useState(false);
  const showFallback = !photo || errored;
  const fallbackBg = `linear-gradient(135deg, oklch(0.78 0.10 ${t.h}), oklch(0.55 0.13 ${t.h}))`;
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    height,
    borderRadius: radius,
    overflow: "hidden",
    background: fallbackBg,
    ...style
  } }, photo && !errored && /* @__PURE__ */ React.createElement(
    "img",
    {
      src: unsplashSrc(photo, w),
      alt: sport,
      onError: () => setErrored(true),
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }
  ), showFallback && /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: `oklch(0.95 0.04 ${t.h})`
  } }, /* @__PURE__ */ React.createElement(SportIcon, { size: Math.min(height * 0.55, 96), color: `oklch(0.95 0.04 ${t.h})` })), overlay && /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.45) 100%)"
  } }), children && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0 } }, children));
}
function Header({ title, onBack, right, large = false, subtitle }) {
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "54px 20px 12px", background: "var(--paper)" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 28,
    marginBottom: large ? 14 : 0
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, minWidth: 28 } }, onBack && /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: {
    background: "transparent",
    border: "none",
    padding: 4,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: "var(--ink)"
  } }, /* @__PURE__ */ React.createElement(Icons.arrow_left, { size: 22 }))), !large && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 400, color: "var(--ink)" } }, title), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, minWidth: 28, justifyContent: "flex-end" } }, right)), large && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 32, fontWeight: 200, letterSpacing: "-0.03em" } }, title), subtitle && /* @__PURE__ */ React.createElement("p", { style: { marginTop: 6, color: "var(--ink-2)", fontSize: 14, fontWeight: 400 } }, subtitle)));
}
function BottomNav({ tab, onTab }) {
  const t = useT();
  const items = [
    { id: "home", label: "Home", labelEs: "Inicio", Icon: Icons.home },
    { id: "discover", label: "Discover", labelEs: "Descubrir", Icon: Icons.compass },
    { id: "progress", label: "Progress", labelEs: "Progreso", Icon: Icons.chart },
    { id: "profile", label: "Profile", labelEs: "Perfil", Icon: Icons.user }
  ];
  const isEs = useLang().lang === "es";
  return /* @__PURE__ */ React.createElement("div", { className: "bottom-nav" }, items.map((it) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: it.id,
      className: "nav-item" + (tab === it.id ? " active" : ""),
      onClick: () => onTab(it.id)
    },
    /* @__PURE__ */ React.createElement(it.Icon, { size: 22, sw: tab === it.id ? 2 : 1.5 }),
    /* @__PURE__ */ React.createElement("span", null, isEs ? it.labelEs : it.label)
  )));
}
const sportThemes = {
  Padel: { h: 145, label: "Padel" },
  Tennis: { h: 90, label: "Tennis" },
  Running: { h: 30, label: "Running" },
  Yoga: { h: 270, label: "Yoga" },
  Climbing: { h: 20, label: "Climbing" },
  Cycling: { h: 200, label: "Cycling" },
  Football: { h: 140, label: "Football" },
  Basketball: { h: 40, label: "Basketball" },
  Swimming: { h: 220, label: "Swimming" },
  Pilates: { h: 320, label: "Pilates" },
  Hiking: { h: 110, label: "Hiking" },
  CrossFit: { h: 10, label: "CrossFit" }
};
function sportTile(sport, size = 56) {
  const t = sportThemes[sport] || sportThemes.Padel;
  const SportIcon = SportIcons[sport] || SportIcons.Padel;
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: size,
    height: size,
    borderRadius: 14,
    background: `linear-gradient(135deg, oklch(0.88 0.07 ${t.h}), oklch(0.78 0.10 ${t.h}))`,
    color: `oklch(0.25 0.08 ${t.h})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  } }, /* @__PURE__ */ React.createElement(SportIcon, { size: Math.round(size * 0.55), color: `oklch(0.25 0.08 ${t.h})` }));
}
const mockUser = {
  name: "Alex Rivera",
  username: "@alex.r",
  age: 28,
  city: "Barcelona",
  level: "Intermediate",
  sports: ["Padel", "Running", "Yoga"],
  goals: ["Stay consistent", "Meet new people"],
  weight: 72,
  height: 178,
  streak: 12,
  joinedCount: 47,
  metCount: 23
};
const mockEvents = [
  { id: "e1", sport: "Padel", title: "Padel doubles \xB7 friendly", host: "Marta P.", date: "Tue 28", time: "19:00", loc: "Padel Indoor Les Corts", level: "Intermediate", price: "\u20AC8", spots: 1, of: 4, distance: "1.2km", participants: ["Marta P.", "Joan L.", "Sara M."] },
  { id: "e2", sport: "Running", title: "Sunrise run \xB7 5K Ciutadella", host: "Pablo K.", date: "Wed 29", time: "07:30", loc: "Parc de la Ciutadella", level: "All levels", price: "Free", spots: 6, of: 12, distance: "0.8km", participants: ["Pablo K.", "Iv\xE1n S.", "Lola D.", "Noa H."] },
  { id: "e3", sport: "Yoga", title: "Vinyasa flow in the park", host: "Lin W.", date: "Wed 29", time: "18:00", loc: "Montju\xEFc", level: "Beginner", price: "\u20AC5", spots: 3, of: 10, distance: "3.4km", participants: ["Lin W.", "Eva R.", "Tomi B.", "Pep G."] },
  { id: "e4", sport: "Climbing", title: "Indoor bouldering session", host: "Ari S.", date: "Thu 30", time: "20:00", loc: "Sputnik Climbing", level: "Intermediate", price: "\u20AC12", spots: 2, of: 6, distance: "2.1km", participants: ["Ari S.", "Jon V.", "Mei C."] },
  { id: "e5", sport: "Cycling", title: "Group ride to Collserola", host: "Dani T.", date: "Sat 1", time: "08:00", loc: "Pla\xE7a Espanya", level: "Advanced", price: "Free", spots: 4, of: 10, distance: "4.0km", participants: ["Dani T.", "Lex F.", "Bru K."] },
  { id: "e6", sport: "Football", title: "Pickup 5-a-side", host: "Hugo M.", date: "Sat 1", time: "17:00", loc: "Poliesportiu Poblenou", level: "All levels", price: "\u20AC6", spots: 2, of: 10, distance: "5.0km", participants: ["Hugo M.", "Lex F.", "Bru K.", "Nico A."] }
];
const mockFriends = [
  { name: "Marta P\xE9rez", last: "Padel \xB7 1h ago", sport: "Padel" },
  { name: "Pablo Kim", last: "Run 7.2K \xB7 today", sport: "Running" },
  { name: "Lin Wang", last: "Yoga \xB7 yesterday", sport: "Yoga" },
  { name: "Ari Solano", last: "Climbing \xB7 2d", sport: "Climbing" },
  { name: "Dani Torres", last: "32K ride \xB7 3d", sport: "Cycling" },
  { name: "Eva Ruiz", last: "Yoga \xB7 3d", sport: "Yoga" }
];
Object.assign(window, {
  Icons,
  Icon,
  NewbieLogo,
  Avatar,
  Header,
  BottomNav,
  sportTile,
  sportThemes,
  sportPhotos,
  SportIcons,
  userPhotos,
  unsplashSrc,
  SportPhoto,
  tokens,
  mockUser,
  mockEvents,
  mockFriends
});
