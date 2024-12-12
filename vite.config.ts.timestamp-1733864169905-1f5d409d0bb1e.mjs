// vite.config.ts
import path from "path";
import { defineConfig } from "file:///home/majax/T%C3%A9l%C3%A9chargements/lib-ui-xefi/xReact/node_modules/.pnpm/vite@5.4.9_@types+node@22.7.7/node_modules/vite/dist/node/index.js";
import react from "file:///home/majax/T%C3%A9l%C3%A9chargements/lib-ui-xefi/xReact/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.1_@swc+helpers@0.5.13_vite@5.4.9_@types+node@22.7.7_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import dts from "file:///home/majax/T%C3%A9l%C3%A9chargements/lib-ui-xefi/xReact/node_modules/.pnpm/vite-plugin-dts@4.2.4_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_vite@5.4.9_@types+node@22.7.7_/node_modules/vite-plugin-dts/dist/index.mjs";
import tailwindcss from "file:///home/majax/T%C3%A9l%C3%A9chargements/lib-ui-xefi/xReact/node_modules/.pnpm/tailwindcss@3.4.10/node_modules/tailwindcss/lib/index.js";
var __vite_injected_original_dirname = "/home/majax/T\xE9l\xE9chargements/lib-ui-xefi/xReact";
var modules = [
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
  "slider"
];
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["src/shared/**/*", "src/tests/**/*", "src/ui/**/*"]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  },
  build: {
    lib: {
      entry: Object.fromEntries(
        modules.map((module) => [
          module,
          path.resolve(__vite_injected_original_dirname, `src/${module}`)
        ])
      ),
      name: "@els_xefi/x-react",
      formats: ["es"],
      fileName: (format, entryName) => `${entryName ? entryName + "/" : ""}@els_xefi/x-react.${format}.js`
    },
    rollupOptions: {
      external: [
        // Peer Dependencies
        "react",
        "react-dom",
        // Dependencies
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/react-fontawesome",
        "@radix-ui/react-alert-dialog",
        "@radix-ui/react-accordion",
        "@radix-ui/react-checkbox",
        "@radix-ui/react-radio-group",
        "@radix-ui/react-progress",
        "@radix-ui/react-dialog",
        "@radix-ui/react-popover",
        "@radix-ui/react-select",
        "@radix-ui/react-slot",
        "@radix-ui/react-switch",
        "@radix-ui/react-slider",
        "@radix-ui/react-toast",
        "@radix-ui/react-tooltip",
        "@radix-ui/react-tabs",
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
        "vite-tsconfig-paths"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tYWpheC9UXHUwMEU5bFx1MDBFOWNoYXJnZW1lbnRzL2xpYi11aS14ZWZpL3hSZWFjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbWFqYXgvVFx1MDBFOWxcdTAwRTljaGFyZ2VtZW50cy9saWItdWkteGVmaS94UmVhY3Qvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbWFqYXgvVCVDMyVBOWwlQzMlQTljaGFyZ2VtZW50cy9saWItdWkteGVmaS94UmVhY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuXG5jb25zdCBtb2R1bGVzID0gW1xuICBcInByb3ZpZGVyc1wiLFxuICBcInV0aWxzXCIsXG4gIFwiYnV0dG9uXCIsXG4gIFwidGhlbWVcIixcbiAgXCJob29rc1wiLFxuICBcInR5cG9ncmFwaHlcIixcbiAgXCJzZWxlY3RcIixcbiAgXCJpbnB1dFwiLFxuICBcImNoYXJ0XCIsXG4gIFwiZGF0ZVwiLFxuICBcImNhcmRcIixcbiAgXCJwb3BvdmVyXCIsXG4gIFwibGF5b3V0XCIsXG4gIFwic2hlZXRcIixcbiAgXCJhY2NvcmRpb25cIixcbiAgXCJtb2RhbFwiLFxuICBcImRhdGFncmlkXCIsXG4gIFwidG9hc3RcIixcbiAgXCJ0YWJzXCIsXG4gIFwidG9vbHRpcFwiLFxuICBcInByb2dyZXNzYmFyXCIsXG4gIFwic2xpZGVyXCIsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBkdHMoe1xuICAgICAgZXhjbHVkZTogW1wic3JjL3NoYXJlZC8qKi8qXCIsIFwic3JjL3Rlc3RzLyoqLypcIiwgXCJzcmMvdWkvKiovKlwiXSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICB9LFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3NdLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICBtb2R1bGVzLm1hcCgobW9kdWxlKSA9PiBbXG4gICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGBzcmMvJHttb2R1bGV9YCksXG4gICAgICAgIF0pLFxuICAgICAgKSxcbiAgICAgIG5hbWU6IFwiQGVsc194ZWZpL3gtcmVhY3RcIixcbiAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQsIGVudHJ5TmFtZSkgPT5cbiAgICAgICAgYCR7ZW50cnlOYW1lID8gZW50cnlOYW1lICsgXCIvXCIgOiBcIlwifUBlbHNfeGVmaS94LXJlYWN0LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1xuICAgICAgICAvLyBQZWVyIERlcGVuZGVuY2llc1xuICAgICAgICBcInJlYWN0XCIsXG4gICAgICAgIFwicmVhY3QtZG9tXCIsXG4gICAgICAgIC8vIERlcGVuZGVuY2llc1xuICAgICAgICBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiLFxuICAgICAgICBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiLFxuICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1hbGVydC1kaWFsb2dcIixcbiAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtYWNjb3JkaW9uXCIsXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LWNoZWNrYm94XCIsXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LXJhZGlvLWdyb3VwXCIsXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LXByb2dyZXNzXCIsXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LWRpYWxvZ1wiLFxuICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1wb3BvdmVyXCIsXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNlbGVjdFwiLFxuICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1zbG90XCIsXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LXN3aXRjaFwiLFxuICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1zbGlkZXJcIixcbiAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtdG9hc3RcIixcbiAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtdG9vbHRpcFwiLFxuICAgICAgICBcIkByYWRpeC11aS9yZWFjdC10YWJzXCIsXG4gICAgICAgIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCIsXG4gICAgICAgIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5LWRldnRvb2xzXCIsXG4gICAgICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCIsXG4gICAgICAgIFwiYXV0b3ByZWZpeGVyXCIsXG4gICAgICAgIFwiY2hhcnQuanNcIixcbiAgICAgICAgXCJjaGVjay1wYXNzd29yZC1zdHJlbmd0aFwiLFxuICAgICAgICBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiLFxuICAgICAgICBcImNsc3hcIixcbiAgICAgICAgXCJjbWRrXCIsXG4gICAgICAgIFwiZGF0ZS1mbnNcIixcbiAgICAgICAgXCJkbHhcIixcbiAgICAgICAgXCJpbnB1dC1vdHBcIixcbiAgICAgICAgXCJsdWNpZGUtcmVhY3RcIixcbiAgICAgICAgXCJuZXh0LXRoZW1lc1wiLFxuICAgICAgICBcInJlYWN0LWNoYXJ0anMtMlwiLFxuICAgICAgICBcInJlYWN0LWRheS1waWNrZXJcIixcbiAgICAgICAgXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIixcbiAgICAgICAgXCJzaGFkY24tdWlcIixcbiAgICAgICAgXCJ0YWlsd2luZC1tZXJnZVwiLFxuICAgICAgICBcInRhaWx3aW5kLXZhcmlhbnRzXCIsXG4gICAgICAgIFwidGFpbHdpbmRjc3NcIixcbiAgICAgICAgXCJ2YXVsXCIsXG4gICAgICAgIFwidml0ZS1wbHVnaW4tZHRzXCIsXG4gICAgICAgIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiLFxuICAgICAgXSxcblxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxuICAgICAgICAgIFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIixcbiAgICAgICAgICB0YWlsd2luZGNzczogXCJ0YWlsd2luZGNzc1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNVLE9BQU8sVUFBVTtBQUV2VixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBTHhCLElBQU0sbUNBQW1DO0FBT3pDLElBQU0sVUFBVTtBQUFBLEVBQ2Q7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxtQkFBbUIsa0JBQWtCLGFBQWE7QUFBQSxJQUM5RCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLFdBQVc7QUFBQSxJQUN2QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sT0FBTztBQUFBLFFBQ1osUUFBUSxJQUFJLENBQUMsV0FBVztBQUFBLFVBQ3RCO0FBQUEsVUFDQSxLQUFLLFFBQVEsa0NBQVcsT0FBTyxNQUFNLEVBQUU7QUFBQSxRQUN6QyxDQUFDO0FBQUEsTUFDSDtBQUFBLE1BQ0EsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLElBQUk7QUFBQSxNQUNkLFVBQVUsQ0FBQyxRQUFRLGNBQ2pCLEdBQUcsWUFBWSxZQUFZLE1BQU0sRUFBRSxxQkFBcUIsTUFBTTtBQUFBLElBQ2xFO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQSxRQUVSO0FBQUEsUUFDQTtBQUFBO0FBQUEsUUFFQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUVBLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxVQUNiLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
