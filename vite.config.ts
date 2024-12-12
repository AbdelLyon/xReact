import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

const modules = [
  "providers",
  "utils",
  "button",
  "theme",
  "hooks",
  "typography",
  "select",
  "input",
  "chart",
  "date",
  "card",
  "popover",
  "layout",
  "sheet",
  "accordion",
  "modal",
  "datagrid",
  "toast",
  "tabs",
  "tooltip",
  "progressbar",
  "slider",
];

export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["src/shared/**/*", "src/tests/**/*", "src/ui/**/*"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    lib: {
      entry: Object.fromEntries(
        modules.map((module) => [
          module,
          path.resolve(__dirname, `src/${module}`),
        ]),
      ),
      name: "@els_xefi/x-react",
      formats: ["es"],
      fileName: (format, entryName) =>
        `${entryName ? entryName + "/" : ""}@els_xefi/x-react.${format}.js`,
    },
    rollupOptions: {
      external: [
        // Peer Dependencies
        "react",
        "react-dom",
        // Dependencies
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/react-fontawesome",
        "@nextui-org/react",
        "@radix-ui/react-accordion",
        "@radix-ui/react-alert-dialog",
        "@radix-ui/react-checkbox",
        "@radix-ui/react-dialog",
        "@radix-ui/react-popover",
        "@radix-ui/react-progress",
        "@radix-ui/react-radio-group",
        "@radix-ui/react-select",
        "@radix-ui/react-slider",
        "@radix-ui/react-slot",
        "@radix-ui/react-switch",
        "@radix-ui/react-tabs",
        "@radix-ui/react-toast",
        "@radix-ui/react-tooltip",
        "@react-types/shared",
        "@tabler/icons-react",
        "@tanstack/react-query",
        "@tanstack/react-query-devtools",
        "@vitejs/plugin-react-swc",
        "autoprefixer",
        "chart.js",
        "check-password-strength",
        "class-variance-authority",
        "clsx",
        "cmdk",
        "date-fns",
        "dlx",
        "from",
        "import",
        "input-otp",
        "lucide-react",
        "next-themes",
        "react-chartjs-2",
        "react-day-picker",
        "react-intersection-observer",
        "shadcn-ui",
        "tailwind-merge",
        "tailwind-variants",
        "tailwindcss",
        "vaul",
        "vite-plugin-dts",
        "vite-tsconfig-paths",
      ],

      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
});
