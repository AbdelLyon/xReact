/* empty css                   */
import { j as e } from "../../jsx-runtime-B6kdoens.js";
import * as m from "react";
import { isValidElement as F, cloneElement as G, memo as p, forwardRef as Q, useRef as $, useEffect as y, useState as q, useCallback as J } from "react";
import { FontAwesomeIcon as j } from "@fortawesome/react-fontawesome";
import { ChevronDown as k, ChevronUp as K, Check as W, User as w, AlignLeft as X } from "lucide-react";
import * as n from "@radix-ui/react-select";
import { cn as o } from "../../utils/@els_xefi/x-react.es.js";
import { T as Y } from "../../ToggleTheme-h1r3shhc.js";
import { P as Z } from "../../Popover-DiRGGoN_.js";
import { P as _ } from "../../popover-DBcyieFX.js";
const D = n.Root, O = n.Group, ee = n.Value, S = m.forwardRef(({ className: s, children: t, ...a }, r) => /* @__PURE__ */ e.jsxs(
  n.Trigger,
  {
    ref: r,
    className: o(
      "flex h-10 w-full items-center justify-between rounded-md bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      s
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ e.jsx(n.Icon, { asChild: !0, children: /* @__PURE__ */ e.jsx(k, { className: "ml-1 size-4 opacity-50" }) })
    ]
  }
));
S.displayName = n.Trigger.displayName;
const z = m.forwardRef(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  n.ScrollUpButton,
  {
    ref: a,
    className: o(
      "flex cursor-default items-center justify-center py-1",
      s
    ),
    ...t,
    children: /* @__PURE__ */ e.jsx(K, { className: "size-4" })
  }
));
z.displayName = n.ScrollUpButton.displayName;
const C = m.forwardRef(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  n.ScrollDownButton,
  {
    ref: a,
    className: o(
      "flex cursor-default items-center justify-center py-1",
      s
    ),
    ...t,
    children: /* @__PURE__ */ e.jsx(k, { className: "size-4" })
  }
));
C.displayName = n.ScrollDownButton.displayName;
const R = m.forwardRef(({ className: s, children: t, position: a = "popper", ...r }, l) => /* @__PURE__ */ e.jsx(n.Portal, { children: /* @__PURE__ */ e.jsxs(
  n.Content,
  {
    ref: l,
    className: o(
      "relative z-50 max-h-96 min-w-6  overflow-hidden rounded-md border bg-border text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      s
    ),
    position: a,
    ...r,
    children: [
      /* @__PURE__ */ e.jsx(z, {}),
      /* @__PURE__ */ e.jsx(
        n.Viewport,
        {
          className: o(
            "p-1",
            a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ e.jsx(C, {})
    ]
  }
) }));
R.displayName = n.Content.displayName;
const se = m.forwardRef(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  n.Label,
  {
    ref: a,
    className: o("py-1.5 pl-8 pr-2 text-sm font-semibold", s),
    ...t
  }
));
se.displayName = n.Label.displayName;
const I = m.forwardRef(({ className: s, children: t, ...a }, r) => /* @__PURE__ */ e.jsxs(
  n.Item,
  {
    ref: r,
    className: o(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      s
    ),
    ...a,
    children: [
      /* @__PURE__ */ e.jsx("span", { className: "absolute right-1 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ e.jsx(n.ItemIndicator, { children: /* @__PURE__ */ e.jsx(W, { className: "size-4 text-green-500" }) }) }),
      /* @__PURE__ */ e.jsx(n.ItemText, { children: t })
    ]
  }
));
I.displayName = n.Item.displayName;
const te = m.forwardRef(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  n.Separator,
  {
    ref: a,
    className: o("-mx-1 my-1 h-px bg-muted", s),
    ...t
  }
));
te.displayName = n.Separator.displayName;
const ae = ({
  value: s,
  languages: t,
  onLanguageChange: a
}) => /* @__PURE__ */ e.jsxs(
  D,
  {
    value: s ?? "fr",
    onValueChange: (r) => {
      const l = t == null ? void 0 : t.find((d) => d.value === r);
      l && (a == null || a(l));
    },
    children: [
      /* @__PURE__ */ e.jsx(
        S,
        {
          className: o(
            "focus:ring-0 shadow-none bg-transparent dark:text-white border-none w-max",
            { "text-muted-foreground": s === "" }
          ),
          children: /* @__PURE__ */ e.jsx(ee, { placeholder: s })
        }
      ),
      /* @__PURE__ */ e.jsx(R, { children: /* @__PURE__ */ e.jsx(O, { children: t == null ? void 0 : t.map(
        (r) => {
          var l;
          return /* @__PURE__ */ e.jsx(I, { value: r.value, children: /* @__PURE__ */ e.jsx(
            "img",
            {
              alt: r.label ?? r.value,
              className: "h-[14px] w-[18px] rounded-sm",
              src: (l = r == null ? void 0 : r.flag) == null ? void 0 : l.src
            }
          ) }, r.value);
        }
      ) }) })
    ]
  }
), L = ({
  navigation: s,
  pathname: t,
  className: a,
  isOpenDropdown: r,
  isNavbar: l
}) => {
  const d = (i) => {
    const x = t === i.pathname;
    return o(
      "flex items-center justify-center p-3 cursor-pointer my-2 menu-transition transition-all duration-300 ease-in-out rounded-md line-transition w-full text-white lg:justify-start lg:gap-4",
      l ? "hover:bg-background" : "hover:bg-sidebarHoverLink",
      x ? "border-l border-primary" : "",
      x && (l ? "bg-background" : "bg-sidebarHoverLink"),
      { "justify-start gap-4 text-text": r }
    );
  };
  return /* @__PURE__ */ e.jsx("div", { className: a, children: s == null ? void 0 : s.map(
    (i) => i.hasAccess && /* @__PURE__ */ e.jsx("div", { className: d(i), children: F(i.link) ? G(i.link, {
      className: o(
        "flex items-center w-full",
        i.link.props.className
      ),
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        i.icon && /* @__PURE__ */ e.jsx(
          j,
          {
            className: o("size-5", {
              "text-primary": t === i.pathname
            }),
            icon: i.icon
          }
        ),
        /* @__PURE__ */ e.jsx(
          "span",
          {
            className: o("sr-only lg:not-sr-only", {
              "not-sr-only": r
            }),
            children: i.name
          }
        )
      ] })
    }) : i.link }, i.name)
  ) });
}, M = p(
  ({ navigation: s = [] }) => /* @__PURE__ */ e.jsx("nav", { className: "border border-border bg-white p-2 shadow-none dark:bg-card", children: s.map((t) => {
    const a = typeof t == "string" ? { name: t } : t;
    return /* @__PURE__ */ e.jsxs(
      _,
      {
        className: "flex w-full items-center gap-2 rounded-md p-2 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-background",
        onClick: a.onClick,
        children: [
          a.icon && /* @__PURE__ */ e.jsx(j, { className: "size-4", icon: a.icon }),
          /* @__PURE__ */ e.jsx("span", { children: a.name })
        ]
      },
      t.name
    );
  }) })
);
M.displayName = "MenuBarNavigation";
const T = p(
  ({
    currentUser: s,
    profileNavigation: t
  }) => /* @__PURE__ */ e.jsx(
    Z,
    {
      classNames: { popover: "w-[200px]", trigger: "border-none" },
      trigger: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative hidden cursor-pointer items-center gap-2 rounded-md px-3 py-2 font-medium dark:text-white lg:flex", children: [
          /* @__PURE__ */ e.jsx(w, { className: "size-5" }),
          /* @__PURE__ */ e.jsx("p", { className: "truncate", children: s })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex size-10 cursor-pointer items-center justify-center rounded-md dark:bg-background dark:text-white lg:hidden", children: /* @__PURE__ */ e.jsx(w, { className: "size-5" }) })
      ] }),
      children: /* @__PURE__ */ e.jsx(M, { navigation: t })
    }
  )
);
T.displayName = "UserPopover";
const P = Q(({ isOpenDropdown: s, mobileNavigation: t, pathname: a, buttonAction: r }, l) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    ref: l,
    className: o(
      "flex flex-col gap-2 overflow-hidden transition-all duration-300 ease-in-out",
      s ? "opacity-100 max-h-[var(--navbar-content-height)]" : "opacity-0 max-h-0"
    ),
    children: [
      /* @__PURE__ */ e.jsx(
        L,
        {
          isNavbar: !0,
          className: "w-full",
          isOpenDropdown: s,
          navigation: t,
          pathname: a
        }
      ),
      r && /* @__PURE__ */ e.jsx("div", { className: "mb-4", children: r() })
    ]
  }
));
P.displayName = "MobileMenu";
const B = p(
  ({
    applicationName: s,
    currentUser: t,
    profileNavigation: a,
    className: r,
    setOpenDropdown: l,
    isOpenDropdown: d,
    mobileNavigation: i,
    pathname: x,
    logo: c,
    buttonAction: f,
    languages: N,
    languageSelected: u,
    onLanguageChange: E,
    notification: h
  }) => {
    const b = $(null);
    y(() => {
      if (b.current) {
        const g = d ? b.current.scrollHeight : 0;
        document.documentElement.style.setProperty(
          "--navbar-content-height",
          `${g}px`
        );
      }
    }, [d]);
    const A = o(
      "fixed top-0 z-40 flex w-full flex-col border-b border-border bg-white dark:bg-sidebar shadow-lg dark:shadow-none px-4 transition-all duration-300 ease-in-out",
      d ? "h-[calc(var(--navbar-content-height)+4rem)]" : "h-16",
      r
    ), v = (g) => c && /* @__PURE__ */ e.jsx("div", { className: g, children: c() }), V = () => /* @__PURE__ */ e.jsx(
      "button",
      {
        className: "rounded-md border border-border bg-white px-2.5 py-2 dark:bg-background sm:hidden",
        onClick: () => l == null ? void 0 : l(!d),
        children: /* @__PURE__ */ e.jsx(X, { className: "text-text size-5" })
      }
    ), H = () => /* @__PURE__ */ e.jsxs("nav", { className: "flex items-center justify-end gap-4 rounded-md border border-border bg-white dark:bg-background", children: [
      N && /* @__PURE__ */ e.jsx(
        ae,
        {
          languages: N,
          value: (u == null ? void 0 : u.value) ?? "",
          onLanguageChange: E
        }
      ),
      /* @__PURE__ */ e.jsx(Y, { className: "dark:text-white" }),
      /* @__PURE__ */ e.jsx("div", { className: "h-10 w-[2px] bg-border" }),
      h && /* @__PURE__ */ e.jsx(
        j,
        {
          className: "size-4 cursor-pointer dark:text-white",
          icon: h.icon,
          onClick: h.onClick
        }
      ),
      /* @__PURE__ */ e.jsx(
        T,
        {
          currentUser: t,
          profileNavigation: a
        }
      )
    ] });
    return /* @__PURE__ */ e.jsxs("header", { className: A, children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex h-16 w-full items-center justify-between", children: [
        v(
          "border-border w-[275px] justify-center border-r hidden lg:block"
        ),
        V(),
        /* @__PURE__ */ e.jsxs("div", { className: "flex w-full flex-1 items-center justify-end text-black lg:pl-8", children: [
          s ? /* @__PURE__ */ e.jsx("h1", { className: "hidden w-full cursor-default select-none text-2xl font-semibold dark:text-white sm:block", children: s }) : v(
            "border-border hidden sm:flex w-full justify-start border-r lg:hidden"
          ),
          H()
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(
        P,
        {
          ref: b,
          buttonAction: f,
          isOpenDropdown: d || !1,
          mobileNavigation: i,
          pathname: x
        }
      )
    ] });
  }
);
B.displayName = "Navbar";
const U = p(
  ({
    navigation: s,
    pathname: t,
    className: a,
    isOpenDropdown: r,
    buttonSidebar: l
  }) => /* @__PURE__ */ e.jsx(
    "aside",
    {
      className: o(
        "border-border bg-sidebar fixed inset-y-0 z-10 mt-16 flex min-h-screen",
        a
      ),
      children: /* @__PURE__ */ e.jsx("div", { className: "sticky left-2 top-16 lg:fixed lg:w-[270px]", children: /* @__PURE__ */ e.jsxs("nav", { className: "mt-4 flex w-full flex-col items-center justify-center gap-4", children: [
        l == null ? void 0 : l(),
        /* @__PURE__ */ e.jsx(
          L,
          {
            className: "w-full",
            isOpenDropdown: r,
            navigation: s,
            pathname: t
          }
        )
      ] }) })
    }
  )
);
U.displayName = "Sidebar";
const fe = ({
  header: s,
  children: t,
  className: a,
  sidebar: r
}) => {
  const [l, d] = q(!1), i = J((c) => {
    d(c);
  }, []);
  y(() => {
    const c = window.matchMedia("(min-width: 768px)"), f = () => d(!1);
    return c.matches && d(!1), c.addEventListener("change", f), () => {
      c.removeEventListener("change", f);
    };
  }, []);
  const x = {
    buttonSidebar: r.buttonSidebar,
    className: o(
      "w-16 px-1.5 flex-col lg:px-3 border-r transition-all duration-300 ease-in-out",
      "lg:w-[290px] lg:min-w-[290px] lg:mt-0 md:sticky",
      "hidden sm:flex",
      a
    ),
    isOpenDropdown: l,
    navigation: r.navigation,
    pathname: r.pathname
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " min-h-screen w-full overflow-x-auto", children: [
    /* @__PURE__ */ e.jsx(
      B,
      {
        ToggleTheme: s.ToggleTheme,
        applicationName: s.applicationName,
        buttonAction: s.buttonAction,
        className: s.className,
        currentUser: s.currentUser,
        isOpenDropdown: l,
        languageSelected: s.languageSelected,
        languages: s.languages,
        logo: s.logo,
        mobileNavigation: s.mobileNavigation,
        notification: s.notification,
        pathname: s.pathname,
        profileNavigation: s.profileNavigation,
        setOpenDropdown: i,
        onLanguageChange: s.onLanguageChange
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "relative z-20 flex w-full", children: [
      !l && /* @__PURE__ */ e.jsx(U, { ...x }),
      /* @__PURE__ */ e.jsx(
        "main",
        {
          className: o(
            "mx-auto w-full mt-20 mb-4 sm:ml-16 md:ml-0",
            a
          ),
          children: t
        }
      ),
      l && /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "fixed inset-0 bg-black/20 backdrop-blur-sm",
          onClick: () => d(!1)
        }
      )
    ] })
  ] });
};
export {
  fe as Layout
};
