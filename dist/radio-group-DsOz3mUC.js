import { j as r } from "./jsx-runtime-B6kdoens.js";
import * as n from "react";
import { forwardRef as x, useState as g, useEffect as O } from "react";
import { passwordStrength as z } from "check-password-strength";
import { cn as s } from "./utils/@els_xefi/x-react.es.js";
import { EyeOff as E, Eye as G, Search as V, Mail as Y, Check as F, Dot as M, Circle as $ } from "lucide-react";
import * as h from "@radix-ui/react-checkbox";
import * as j from "@radix-ui/react-switch";
import { OTPInput as A, OTPInputContext as D } from "input-otp";
import * as f from "@radix-ui/react-radio-group";
const U = ({
  error: e,
  classNameError: t
}) => /* @__PURE__ */ r.jsx("p", { className: s("text-error mt-1 text-start", t), children: e }), q = ({
  className: e,
  setIsPasswordVisible: t,
  isPasswordVisible: o,
  size: i = 16
}) => {
  const a = () => {
    t((d) => !d);
  };
  return /* @__PURE__ */ r.jsx(r.Fragment, { children: o ? /* @__PURE__ */ r.jsx(
    E,
    {
      className: s("text-muted-foreground right-3 absolute", e),
      id: "eye-icon",
      size: i,
      style: { top: "50%", transform: "translateY(-50%)" },
      onClick: a
    }
  ) : /* @__PURE__ */ r.jsx(
    G,
    {
      className: s("text-muted-foreground right-3 absolute", e),
      size: i,
      style: { top: "50%", transform: "translateY(-50%)" },
      onClick: a
    }
  ) });
}, _ = ({ className: e, size: t = 13 }) => /* @__PURE__ */ r.jsx(
  V,
  {
    className: s("text-muted-foreground right-3 absolute", e),
    size: t,
    style: { top: "50%", transform: "translateY(-50%)" }
  }
), B = ({ className: e, size: t = 13 }) => /* @__PURE__ */ r.jsx(
  Y,
  {
    className: s("text-muted-foreground right-3 absolute", e),
    size: t,
    style: { top: "50%", transform: "translateY(-50%)" }
  }
), H = ({
  type: e,
  isPasswordVisible: t,
  setIsPasswordVisible: o,
  error: i,
  classNameIcon: a,
  value: d,
  iconSise: c
}) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  e === "password" && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(
    q,
    {
      className: s(
        { "text-error": i && i !== "" },
        a
      ),
      isPasswordVisible: t,
      setIsPasswordVisible: o,
      size: c
    }
  ) }),
  e === "search" && d === "" && /* @__PURE__ */ r.jsx(
    _,
    {
      className: s({ "text-error": i && i !== "" }, a),
      size: c
    }
  ),
  e === "email" && /* @__PURE__ */ r.jsx(
    B,
    {
      className: s({ "text-error": i && i !== "" }, a),
      size: c
    }
  )
] }), w = n.forwardRef(
  ({ className: e, type: t, ...o }, i) => /* @__PURE__ */ r.jsx(
    "input",
    {
      ref: i,
      className: s(
        "flex h-11 w-full rounded-md border border-border bg-white dark:bg-background focus:border-outline px-3 py-2 text-[13px] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:opacity-50 placeholder:text-[13px] focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      type: t,
      ...o
    }
  )
);
w.displayName = "Input";
const k = n.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ r.jsx(
  h.Root,
  {
    ref: o,
    className: s(
      "peer size-[18px] shrink-0 rounded-sm border border-border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r.jsx(
      h.Indicator,
      {
        className: s("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ r.jsx(F, { className: "size-4" })
      }
    )
  }
));
k.displayName = h.Root.displayName;
const I = n.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ r.jsx(
  j.Root,
  {
    className: s(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: o,
    children: /* @__PURE__ */ r.jsx(
      j.Thumb,
      {
        className: s(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
I.displayName = j.Root.displayName;
const R = n.forwardRef(
  ({ className: e, ...t }, o) => /* @__PURE__ */ r.jsx(
    "textarea",
    {
      ref: o,
      className: s(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
);
R.displayName = "TextareaRoot";
const J = ({
  strength: e,
  maxStrength: t = 4,
  className: o
}) => /* @__PURE__ */ r.jsx("div", { className: s("flex space-x-1", o), children: Array.from({ length: t }).map((i, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s("h-2 flex-1 transition-all duration-300 rounded-sm", {
      "bg-error": e >= 0 && a === 0,
      "bg-orange-500": e >= 1 && a <= 1,
      "bg-yellow-500": e >= 2 && a <= 2,
      "bg-green": e >= 3 && a <= 3,
      "bg-light dark:bg-card": a > e
    })
  },
  `strength-indicator-${crypto.randomUUID()}`
)) }), K = x(
  ({
    type: e = "text",
    classNames: t,
    onChange: o,
    iconSize: i,
    error: a,
    width: d = "100%",
    isPasswordStrength: c,
    min: m,
    max: N,
    ...l
  }, u) => {
    const [y, P] = g(!1), [T, S] = g(0), [p, v] = g("");
    O(() => {
      if (typeof u == "object" && (u != null && u.current) && v(u.current.value), e === "password" && typeof p == "string") {
        const b = z(p).id;
        S(b);
      }
    }, [p, e, u]);
    const C = (b) => {
      v(b.target.value), o == null || o(b);
    };
    return /* @__PURE__ */ r.jsxs("div", { className: t == null ? void 0 : t.root, children: [
      l.label && e !== "checkbox" && /* @__PURE__ */ r.jsx("label", { className: t == null ? void 0 : t.label, children: l.label }),
      /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: s("relative", {
            "flex items-center gap-1": e === "checkbox"
          }),
          style: { width: d },
          children: [
            /* @__PURE__ */ r.jsx(
              w,
              {
                ref: u,
                className: s(
                  "text-sm",
                  { "border-error": a },
                  {
                    "size-4 rounded-sm cursor-pointer": e === "checkbox"
                  },
                  t == null ? void 0 : t.input
                ),
                placeholder: l.placeholder,
                type: y ? "text" : e,
                value: l.value,
                onChange: C,
                ...l,
                max: N,
                min: m
              }
            ),
            /* @__PURE__ */ r.jsx(
              H,
              {
                classNameIcon: t == null ? void 0 : t.icon,
                error: a,
                iconSise: i,
                isPasswordVisible: y,
                setIsPasswordVisible: P,
                type: e,
                value: l.value
              }
            ),
            l.label && e === "checkbox" && /* @__PURE__ */ r.jsx("label", { className: t == null ? void 0 : t.label, children: l.label })
          ]
        }
      ),
      c && /* @__PURE__ */ r.jsx(J, { className: "my-1 px-0.5", strength: T }),
      a && e !== "checkbox" && /* @__PURE__ */ r.jsx(U, { error: a })
    ] });
  }
);
K.displayName = "Input";
const L = x(
  ({ className: e, ...t }, o) => /* @__PURE__ */ r.jsx(R, { ref: o, ...t, className: e })
);
L.displayName = "Textarea";
const Q = x(({ className: e, ...t }, o) => /* @__PURE__ */ r.jsx(I, { ref: o, ...t, className: e }));
Q.displayName = "Switch";
const W = x(({ className: e, ...t }, o) => /* @__PURE__ */ r.jsx(k, { ref: o, ...t, className: e }));
W.displayName = "Checkbox";
const X = n.forwardRef(({ className: e, containerClassName: t, ...o }, i) => /* @__PURE__ */ r.jsx(
  A,
  {
    ref: i,
    className: s("disabled:cursor-not-allowed", e),
    containerClassName: s(
      "flex items-center has-[:disabled]:opacity-50",
      t
    ),
    ...o
  }
));
X.displayName = "InputOTP";
const Z = n.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ r.jsx("div", { ref: o, className: s("flex items-center ", e), ...t }));
Z.displayName = "InputOTPGroup";
const ee = n.forwardRef(({ index: e, className: t, ...o }, i) => {
  const a = n.useContext(D), { char: d, hasFakeCaret: c, isActive: m } = a.slots[e];
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: i,
      className: s(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-border text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        m && "z-10 ring-2 ring-ring ring-offset-background",
        t
      ),
      ...o,
      children: [
        d,
        c && /* @__PURE__ */ r.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ r.jsx("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
      ]
    }
  );
});
ee.displayName = "InputOTPSlot";
const te = n.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ r.jsx(M, {}) }));
te.displayName = "InputOTPSeparator";
const re = n.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ r.jsx(
  f.Root,
  {
    className: s("grid gap-2", e),
    ...t,
    ref: o
  }
));
re.displayName = f.Root.displayName;
const oe = n.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ r.jsx(
  f.Item,
  {
    ref: o,
    className: s(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r.jsx(f.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ r.jsx($, { className: "size-2.5 fill-current text-current" }) })
  }
));
oe.displayName = f.Item.displayName;
export {
  W as C,
  ee as I,
  re as R,
  Q as S,
  L as T,
  Z as a,
  te as b,
  X as c,
  oe as d,
  K as e
};
