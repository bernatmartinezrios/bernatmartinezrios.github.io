const SCREEN_W = 390;
const SCREEN_H = 844;
function App() {
  const [history, setHistory] = React.useState([{ name: "splash" }]);
  const route = history[history.length - 1];
  const [quizData, setQuizData] = React.useState({
    motivation: null,
    schedule: {},
    sports: [],
    weight: 72,
    height: 178,
    goals: [],
    city: null,
    cityRegion: null,
    radius: 5
  });
  const [tab, setTab] = React.useState("home");
  const [addSheet, setAddSheet] = React.useState(false);
  const [location, setLocation] = React.useState({ city: "Barcelona", region: "Spain", radius: 5 });
  const [locationOpen, setLocationOpen] = React.useState(false);
  const nav = (name, params = {}) => setHistory((h) => [...h, { name, ...params }]);
  const goBack = () => setHistory((h) => h.length > 1 ? h.slice(0, -1) : h);
  const goHome = () => {
    setTab("home");
    setHistory([{ name: "main" }]);
  };
  const resetTo = (name) => setHistory([{ name }]);
  const goTab = (t) => {
    setTab(t);
    setHistory([{ name: "main" }]);
  };
  const setQ = (patch) => setQuizData((prev) => ({ ...prev, ...patch }));
  const openLocation = () => setLocationOpen(true);
  React.useEffect(() => {
    window.__nav = (name, params = {}) => {
      if (["home", "discover", "progress", "profile"].includes(name)) {
        setTab(name);
        setHistory([{ name: "main" }]);
        return;
      }
      if (["splash", "login", "forgot_password", "onb_intro", "onb_q1", "onb_q2", "onb_q3", "onb_q4", "onb_q5", "onb_q6", "onb_results", "signup"].includes(name)) {
        setHistory([{ name, ...params }]);
        return;
      }
      const p = { ...params };
      if (p.eventId && !p.ev) p.ev = mockEvents.find((e) => e.id === p.eventId);
      if (name === "event_chat" && !p.ev) p.ev = mockEvents[0];
      if ((name === "manage_event" || name === "attendees") && !p.mEvent) {
        p.mEvent = mockEvents[0];
        p.mKind = p.mKind || "hosting";
      }
      setHistory([{ name: "main" }, { name, ...p }]);
    };
  }, []);
  if (route.name === "splash") return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(SplashScreen, { onNext: nav }));
  if (route.name === "login") return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(LogIn, { onBack: goBack, onNext: goHome, onForgot: () => nav("forgot_password") }));
  if (route.name === "forgot_password") return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(ForgotPassword, { onBack: goBack, onDone: goBack }));
  if (route.name === "onb_intro") return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(OnboardIntro, { onNext: nav, onBack: goBack, onExplore: () => goTab("discover") }));
  if (route.name === "onb_q1") return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(Q1Motivation, { data: quizData, setData: setQ, onBack: goBack, onNext: () => nav("onb_q2") }));
  if (route.name === "onb_q2") return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(Q2Schedule, { data: quizData, setData: setQ, onBack: goBack, onNext: () => nav("onb_q3") }));
  if (route.name === "onb_q3") return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(Q3Sports, { data: quizData, setData: setQ, onBack: goBack, onNext: () => nav("onb_q5") }));
  if (route.name === "onb_q5") return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(Q5Goals, { data: quizData, setData: setQ, onBack: goBack, onNext: () => nav("onb_q6") }));
  if (route.name === "onb_q6") return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(Q6Location, { data: quizData, setData: setQ, onBack: goBack, onNext: () => nav("onb_results") }));
  if (route.name === "onb_results") return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(OnboardResults, { data: quizData, onBack: goBack, onNext: nav }));
  if (route.name === "signup") return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(SignUp, { onBack: goBack, onNext: goHome }));
  if (route.name === "event_detail") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(
      EventDetail,
      {
        eventId: route.eventId,
        onBack: goBack,
        openFriend: (name) => nav("friend", { friendName: name }),
        openReviews: (host) => nav("host_reviews", { hostName: host }),
        openChat: (e) => nav("event_chat", { ev: e, from: "event_detail" })
      }
    ));
  }
  if (route.name === "host_reviews") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(HostReviewsScreen, { hostName: route.hostName, onBack: goBack }));
  }
  if (route.name === "rate_activity") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(
      RateActivityScreen,
      {
        activity: route.activity,
        onBack: goBack,
        onSubmit: goBack
      }
    ));
  }
  if (route.name === "my_events") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(
      MyEventsScreen,
      {
        onBack: goBack,
        openManage: (e, k) => nav("manage_event", { mEvent: e, mKind: k }),
        openEvent: (id) => nav("event_detail", { eventId: id }),
        openRate: (e) => nav("rate_activity", { activity: e }),
        goDiscover: () => goTab("discover"),
        goHost: () => nav("create_event")
      }
    ));
  }
  if (route.name === "manage_event") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(
      ManageEventScreen,
      {
        event: route.mEvent,
        kind: route.mKind,
        onBack: goBack,
        onEdit: () => nav("edit_event", { mEvent: route.mEvent }),
        openChat: (e) => nav("event_chat", { ev: e }),
        openAttendees: (e, k) => nav("attendees", { mEvent: e, mKind: k }),
        openEvent: (id) => nav("event_detail", { eventId: id }),
        afterAction: goBack
      }
    ));
  }
  if (route.name === "attendees") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(
      AttendeesScreen,
      {
        event: route.mEvent,
        kind: route.mKind,
        onBack: goBack,
        openFriend: (n) => nav("friend", { friendName: n })
      }
    ));
  }
  if (route.name === "event_chat") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(
      EventGroupChat,
      {
        event: route.ev,
        onBack: goBack,
        openEvent: (id) => nav("event_detail", { eventId: id })
      }
    ));
  }
  if (route.name === "create_event") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(CreateEvent, { onBack: goBack, onDone: goHome, prefill: route.prefill }));
  }
  if (route.name === "edit_event") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(CreateEvent, { editEvent: route.mEvent, onBack: goBack, onDone: goBack }));
  }
  if (route.name === "friend") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(
      FriendProfile,
      {
        name: route.friendName,
        onBack: goBack,
        openEvent: (id) => nav("event_detail", { eventId: id }),
        openChat: (n) => nav("chat", { chatName: n || route.friendName }),
        openInvite: (n) => nav("invite_friend", { inviteName: n || route.friendName })
      }
    ));
  }
  if (route.name === "settings") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(
      Settings,
      {
        onBack: goBack,
        onLogout: () => resetTo("splash"),
        openSub: (k) => nav("settings_sub", { subKind: k }),
        openPayments: () => nav("payment_methods")
      }
    ));
  }
  if (route.name === "settings_sub") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(SettingsSub, { kind: route.subKind, onBack: goBack }));
  }
  if (route.name === "payment_methods") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(PaymentMethodsScreen, { onBack: goBack }));
  }
  if (route.name === "edit_profile") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(EditProfile, { onBack: goBack, onSave: goBack }));
  }
  if (route.name === "notifications") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(
      NotificationsScreen,
      {
        onBack: goBack,
        openEvent: (id) => nav("event_detail", { eventId: id }),
        openFriend: (n) => nav("friend", { friendName: n }),
        openChallenge: () => nav("challenge_detail", { challenge: null })
      }
    ));
  }
  if (route.name === "all_friends") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(
      AllFriendsScreen,
      {
        onBack: goBack,
        openFriend: (n) => nav("friend", { friendName: n }),
        openChat: (n) => nav("chat", { chatName: n })
      }
    ));
  }
  if (route.name === "social") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(
      SocialScreen,
      {
        onBack: goBack,
        openFriend: (n) => nav("friend", { friendName: n }),
        openChat: (n) => nav("chat", { chatName: n }),
        openEvent: (id) => nav("event_detail", { eventId: id })
      }
    ));
  }
  if (route.name === "messages") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(
      MessagesScreen,
      {
        onBack: goBack,
        openChat: (n) => nav("chat", { chatName: n })
      }
    ));
  }
  if (route.name === "chat") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(ChatScreen, { name: route.chatName, onBack: goBack }));
  }
  if (route.name === "activity_detail") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(
      ActivityDetail,
      {
        entry: route.entry,
        onBack: goBack,
        onRate: (e) => nav("rate_activity", { activity: e }),
        onRebook: (e) => nav("create_event", { prefill: { sport: e.sport, loc: e.loc, title: e.title || e.sport + " \xB7 " + e.loc, partners: e.partners } }),
        onMessageGroup: (e) => nav("event_chat", { ev: { sport: e.sport, title: e.title || e.sport + " \xB7 " + e.loc, host: e.partners && e.partners[0] || "You", loc: e.loc } })
      }
    ));
  }
  if (route.name === "challenge_detail") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(ChallengeDetail, { ch: route.challenge, onBack: goBack }));
  }
  if (route.name === "log_solo") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(LogSoloScreen, { onBack: goBack, onDone: goBack }));
  }
  if (route.name === "invite_friend") {
    return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement(
      InviteFriendScreen,
      {
        friendName: route.inviteName,
        onBack: goBack,
        onDone: goBack
      }
    ));
  }
  return /* @__PURE__ */ React.createElement(Frame, null, /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", minHeight: 0 } }, tab === "home" && /* @__PURE__ */ React.createElement(
    HomeTab,
    {
      location,
      openLocation,
      nav: (n) => {
        if (n === "discover") goTab("discover");
        else if (n === "create_event") setAddSheet(true);
        else nav(n);
      },
      openEvent: (id) => nav("event_detail", { eventId: id }),
      openFriend: (name) => nav("friend", { friendName: name }),
      openRate: (a) => nav("rate_activity", { activity: a, from: "main" })
    }
  ), tab === "discover" && /* @__PURE__ */ React.createElement(
    DiscoverTab,
    {
      location,
      openLocation,
      openEvent: (id) => nav("event_detail", { eventId: id }),
      nav
    }
  ), tab === "progress" && /* @__PURE__ */ React.createElement(ProgressTab, { nav }), tab === "profile" && /* @__PURE__ */ React.createElement(ProfileTab, { nav })), /* @__PURE__ */ React.createElement(BottomNav, { tab, onTab: goTab }), addSheet && /* @__PURE__ */ React.createElement(
    AddActivitySheet,
    {
      onClose: () => setAddSheet(false),
      onCreate: (go) => {
        setAddSheet(false);
        if (go === "create_event") nav("create_event");
        else if (go === "discover") goTab("discover");
        else if (go === "log_solo") nav("log_solo");
      }
    }
  ), locationOpen && /* @__PURE__ */ React.createElement(
    LocationSheet,
    {
      current: location.city,
      currentRadius: location.radius,
      onClose: () => setLocationOpen(false),
      onSave: (city, radius) => {
        setLocation({ city, region: location.region, radius });
        setLocationOpen(false);
      }
    }
  )));
}
function NotificationsScreen({ onBack, openEvent, openFriend, openChallenge }) {
  const t = useT();
  const items = [
    { t: t("notif.n1"), s: t("notif.t_15min"), sport: "Padel", unread: true, go: () => openEvent("e1") },
    { t: t("notif.n2"), s: t("notif.t_2h"), sport: "Running", unread: true, go: () => openEvent("e2") },
    { t: t("notif.n3"), s: t("notif.t_yesterday"), sport: "Yoga", go: () => openChallenge() },
    { t: t("notif.n4"), s: t("notif.t_2days"), sport: "Yoga", go: () => openEvent("e3") },
    { t: t("notif.n5"), s: t("notif.t_3days"), sport: "Padel", go: () => openEvent("e1") }
  ];
  return /* @__PURE__ */ React.createElement("div", { className: "screen" }, /* @__PURE__ */ React.createElement(Header, { title: t("notif.title"), onBack, right: /* @__PURE__ */ React.createElement("button", { style: { background: "none", border: "none", color: "var(--forest)", fontSize: 13, cursor: "pointer", fontFamily: "inherit" } }, t("notif.clear")) }), /* @__PURE__ */ React.createElement("div", { className: "screen-scroll", style: { padding: "4px 20px 24px" } }, items.map((n, i) => /* @__PURE__ */ React.createElement("button", { key: i, onClick: n.go, style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 0",
    background: "none",
    border: "none",
    borderBottom: i < items.length - 1 ? "0.5px solid var(--hair)" : "none",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "var(--ink)",
    textAlign: "left"
  } }, sportTile(n.sport, 40), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: n.unread ? 400 : 300 } }, n.t), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", marginTop: 2 } }, n.s)), n.unread && /* @__PURE__ */ React.createElement("div", { style: { width: 8, height: 8, borderRadius: "50%", background: "var(--lime)" } })))));
}
function Frame({ children }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: SCREEN_W + 22,
    height: SCREEN_H + 22,
    borderRadius: 56,
    padding: 10,
    background: "oklch(0.18 0.005 150)",
    boxShadow: "0 40px 100px rgba(20, 40, 30, 0.25), 0 0 0 1px rgba(0,0,0,0.4), inset 0 0 0 2px oklch(0.32 0.005 150)",
    position: "relative"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: SCREEN_W,
    height: SCREEN_H,
    borderRadius: 46,
    overflow: "hidden",
    background: "var(--paper)",
    position: "relative"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: 11,
    left: "50%",
    transform: "translateX(-50%)",
    width: 122,
    height: 36,
    borderRadius: 22,
    background: "#000",
    zIndex: 100
  } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: 18,
    left: 0,
    right: 0,
    zIndex: 50,
    display: "flex",
    justifyContent: "space-between",
    padding: "0 32px",
    fontFamily: '-apple-system, "SF Pro Text", system-ui',
    fontSize: 14,
    fontWeight: 500,
    color: "var(--ink)"
  } }, /* @__PURE__ */ React.createElement("span", null, "9:41"), /* @__PURE__ */ React.createElement("span", { style: { display: "flex", gap: 5, alignItems: "center" } }, /* @__PURE__ */ React.createElement("svg", { width: "16", height: "11", viewBox: "0 0 16 11", fill: "currentColor" }, /* @__PURE__ */ React.createElement("rect", { x: "0", y: "7", width: "3", height: "4", rx: "0.5" }), /* @__PURE__ */ React.createElement("rect", { x: "4.5", y: "5", width: "3", height: "6", rx: "0.5" }), /* @__PURE__ */ React.createElement("rect", { x: "9", y: "2.5", width: "3", height: "8.5", rx: "0.5" }), /* @__PURE__ */ React.createElement("rect", { x: "13.5", y: "0", width: "3", height: "11", rx: "0.5" })), /* @__PURE__ */ React.createElement("svg", { width: "24", height: "11", viewBox: "0 0 24 11", fill: "none" }, /* @__PURE__ */ React.createElement("rect", { x: "0.5", y: "0.5", width: "20", height: "10", rx: "3", stroke: "currentColor", strokeOpacity: "0.4" }), /* @__PURE__ */ React.createElement("rect", { x: "2", y: "2", width: "17", height: "7", rx: "1.5", fill: "currentColor" }), /* @__PURE__ */ React.createElement("path", { d: "M22 3.5V7.5C22.6 7.2 23 6.7 23 6c0-0.7-0.4-1.2-1-1.5z", fill: "currentColor", fillOpacity: "0.4" })))), children, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    bottom: 8,
    left: 0,
    right: 0,
    zIndex: 200,
    display: "flex",
    justifyContent: "center",
    pointerEvents: "none"
  } }, /* @__PURE__ */ React.createElement("div", { style: { width: 134, height: 5, borderRadius: 99, background: "rgba(0,0,0,0.4)" } }))), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: -2, top: 110, width: 4, height: 32, borderRadius: 2, background: "oklch(0.12 0.005 150)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: -2, top: 160, width: 4, height: 56, borderRadius: 2, background: "oklch(0.12 0.005 150)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: -2, top: 226, width: 4, height: 56, borderRadius: 2, background: "oklch(0.12 0.005 150)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: -2, top: 180, width: 4, height: 88, borderRadius: 2, background: "oklch(0.12 0.005 150)" } }));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ React.createElement(LangProvider, null, /* @__PURE__ */ React.createElement(ThemeProvider, null, /* @__PURE__ */ React.createElement(App, null)))
);
