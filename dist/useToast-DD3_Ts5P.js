import * as i from "react";
const p = 1, A = 1e6;
let u = 0;
function O() {
  return u = (u + 1) % Number.MAX_SAFE_INTEGER, u.toString();
}
const c = /* @__PURE__ */ new Map(), S = (t) => {
  if (c.has(t))
    return;
  const s = setTimeout(() => {
    c.delete(t), a({
      type: "REMOVE_TOAST",
      toastId: t
    });
  }, A);
  c.set(t, s);
}, E = (t, s) => {
  switch (s.type) {
    case "ADD_TOAST":
      return {
        ...t,
        toasts: [s.toast, ...t.toasts].slice(0, p)
      };
    case "UPDATE_TOAST":
      return {
        ...t,
        toasts: t.toasts.map(
          (e) => e.id === s.toast.id ? { ...e, ...s.toast } : e
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: e } = s;
      return e ? S(e) : t.toasts.forEach((o) => {
        S(o.id);
      }), {
        ...t,
        toasts: t.toasts.map(
          (o) => o.id === e || e === void 0 ? {
            ...o,
            open: !1
          } : o
        )
      };
    }
    case "REMOVE_TOAST":
      return s.toastId === void 0 ? {
        ...t,
        toasts: []
      } : {
        ...t,
        toasts: t.toasts.filter((e) => e.id !== s.toastId)
      };
  }
}, r = [];
let T = { toasts: [] };
function a(t) {
  T = E(T, t), r.forEach((s) => {
    s(T);
  });
}
function _({ ...t }) {
  const s = O(), e = (n) => a({
    type: "UPDATE_TOAST",
    toast: { ...n, id: s }
  }), o = () => a({ type: "DISMISS_TOAST", toastId: s });
  return a({
    type: "ADD_TOAST",
    toast: {
      ...t,
      id: s,
      open: !0,
      onOpenChange: (n) => {
        n || o();
      }
    }
  }), {
    id: s,
    dismiss: o,
    update: e
  };
}
function m() {
  const [t, s] = i.useState(T);
  return i.useEffect(() => (r.push(s), () => {
    const e = r.indexOf(s);
    e > -1 && r.splice(e, 1);
  }), [t]), {
    ...t,
    toast: _,
    dismiss: (e) => a({ type: "DISMISS_TOAST", toastId: e })
  };
}
const I = () => {
  const { toast: t } = m();
  return { showToast: ({
    title: e,
    description: o,
    duration: n = 5e3,
    variant: d = "default",
    action: f
  }) => {
    t({
      title: e,
      description: o,
      duration: n,
      variant: d,
      action: f
    });
  } };
};
export {
  m as a,
  I as u
};
