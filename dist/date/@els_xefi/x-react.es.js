import { j as r } from "../../jsx-runtime-B6kdoens.js";
import { Calendar as f } from "lucide-react";
import { cn as o } from "../../utils/@els_xefi/x-react.es.js";
import { a as m, b as p, c as g } from "../../popover-DBcyieFX.js";
import * as x from "react";
import { Slot as y } from "@radix-ui/react-slot";
import { cva as b } from "class-variance-authority";
import { DayPicker as h, IconLeft as v, IconRight as _ } from "react-day-picker";
const c = b(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), s = x.forwardRef(
  ({ className: a, variant: e, size: n, asChild: t = !1, ...i }, d) => {
    const u = t ? y : "button";
    return /* @__PURE__ */ r.jsx(
      u,
      {
        ref: d,
        className: o(c({ variant: e, size: n, className: a })),
        ...i
      }
    );
  }
);
s.displayName = "Button";
function l({
  className: a,
  classNames: e,
  showOutsideDays: n = !0,
  ...t
}) {
  return /* @__PURE__ */ r.jsx(
    h,
    {
      className: o("p-3", a),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: o(
          c({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: o(
          c({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...e
      },
      components: {
        IconLeft: v,
        IconRight: _
      },
      showOutsideDays: n,
      ...t
    }
  );
}
l.displayName = "Calendar";
const P = ({
  className: a,
  date: e,
  setDate: n,
  classNames: t,
  ...i
}) => {
  const d = () => e != null && e.from ? e.to ? `${e.from.toLocaleDateString()} - ${e.to.toLocaleDateString()}` : e.from.toLocaleDateString() : "Date de début - Date de fin";
  return /* @__PURE__ */ r.jsx("div", { className: o("grid gap-2", a), ...i, children: /* @__PURE__ */ r.jsxs(m, { children: [
    /* @__PURE__ */ r.jsx(p, { asChild: !0, children: /* @__PURE__ */ r.jsxs(
      s,
      {
        "aria-label": "Select date range",
        className: o("justify-start text-left font-normal dark:bg-card"),
        id: "date",
        variant: "outline",
        children: [
          /* @__PURE__ */ r.jsx(
            f,
            {
              className: o("mr-2 size-4", t == null ? void 0 : t.calendarIcon)
            }
          ),
          d()
        ]
      }
    ) }),
    /* @__PURE__ */ r.jsx(
      g,
      {
        align: "start",
        className: o("w-auto p-0", t == null ? void 0 : t.popoverContent),
        children: /* @__PURE__ */ r.jsx(
          l,
          {
            initialFocus: !0,
            defaultMonth: e == null ? void 0 : e.from,
            mode: "range",
            numberOfMonths: 2,
            selected: e,
            onSelect: n
          }
        )
      }
    )
  ] }) });
};
export {
  P as RangePicker
};
