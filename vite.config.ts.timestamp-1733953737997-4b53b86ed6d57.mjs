// vite.config.ts
import path from "path";
import { defineConfig } from "file:///home/majax/Bureau/xReact/node_modules/.pnpm/vite@5.4.11_@types+node@22.10.2/node_modules/vite/dist/node/index.js";
import react from "file:///home/majax/Bureau/xReact/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.2_@swc+helpers@0.5.15_vite@5.4.11_@types+node@22.10.2_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import dts from "file:///home/majax/Bureau/xReact/node_modules/.pnpm/vite-plugin-dts@4.3.0_@types+node@22.10.2_rollup@4.28.1_typescript@5.7.2_vite@5.4.11_@types+node@22.10.2_/node_modules/vite-plugin-dts/dist/index.mjs";
import tailwindcss from "file:///home/majax/Bureau/xReact/node_modules/.pnpm/tailwindcss@3.4.10/node_modules/tailwindcss/lib/index.js";
var __vite_injected_original_dirname = "/home/majax/Bureau/xReact";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tYWpheC9CdXJlYXUveFJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9tYWpheC9CdXJlYXUveFJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL21hamF4L0J1cmVhdS94UmVhY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuXG5jb25zdCBtb2R1bGVzID0gW1xuICBcInByb3ZpZGVyc1wiLFxuICBcInV0aWxzXCIsXG4gIFwiYnV0dG9uXCIsXG4gIFwidGhlbWVcIixcbiAgXCJob29rc1wiLFxuICBcInR5cG9ncmFwaHlcIixcbiAgXCJzZWxlY3RcIixcbiAgXCJpbnB1dFwiLFxuICBcImNoYXJ0XCIsXG4gIFwiZGF0ZVwiLFxuICBcImNhcmRcIixcbiAgXCJwb3BvdmVyXCIsXG4gIFwibGF5b3V0XCIsXG4gIFwic2hlZXRcIixcbiAgXCJhY2NvcmRpb25cIixcbiAgXCJtb2RhbFwiLFxuICBcImRhdGFncmlkXCIsXG4gIFwidG9hc3RcIixcbiAgXCJ0YWJzXCIsXG4gIFwidG9vbHRpcFwiLFxuICBcInByb2dyZXNzYmFyXCIsXG4gIFwic2xpZGVyXCIsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBkdHMoe1xuICAgICAgZXhjbHVkZTogW1wic3JjL3NoYXJlZC8qKi8qXCIsIFwic3JjL3Rlc3RzLyoqLypcIiwgXCJzcmMvdWkvKiovKlwiXSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICB9LFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3NdLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICBtb2R1bGVzLm1hcCgobW9kdWxlKSA9PiBbXG4gICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGBzcmMvJHttb2R1bGV9YCksXG4gICAgICAgIF0pLFxuICAgICAgKSxcbiAgICAgIG5hbWU6IFwiQGVsc194ZWZpL3gtcmVhY3RcIixcbiAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQsIGVudHJ5TmFtZSkgPT5cbiAgICAgICAgYCR7ZW50cnlOYW1lID8gZW50cnlOYW1lICsgXCIvXCIgOiBcIlwifUBlbHNfeGVmaS94LXJlYWN0LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1xuICAgICAgICAvLyBQZWVyIERlcGVuZGVuY2llc1xuICAgICAgICBcInJlYWN0XCIsXG4gICAgICAgIFwicmVhY3QtZG9tXCIsXG4gICAgICAgIC8vIERlcGVuZGVuY2llc1xuICAgICAgICBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiLFxuICAgICAgICBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiLFxuICAgICAgICBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiLFxuICAgICAgICBcIkBuZXh0dWktb3JnL3JlYWN0XCIsXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LWFjY29yZGlvblwiLFxuICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1hbGVydC1kaWFsb2dcIixcbiAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtY2hlY2tib3hcIixcbiAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtZGlhbG9nXCIsXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LXBvcG92ZXJcIixcbiAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtcHJvZ3Jlc3NcIixcbiAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtcmFkaW8tZ3JvdXBcIixcbiAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3Qtc2VsZWN0XCIsXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNsaWRlclwiLFxuICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1zbG90XCIsXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LXN3aXRjaFwiLFxuICAgICAgICBcIkByYWRpeC11aS9yZWFjdC10YWJzXCIsXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LXRvYXN0XCIsXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LXRvb2x0aXBcIixcbiAgICAgICAgXCJAcmVhY3QtdHlwZXMvc2hhcmVkXCIsXG4gICAgICAgIFwiQHRhYmxlci9pY29ucy1yZWFjdFwiLFxuICAgICAgICBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiLFxuICAgICAgICBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeS1kZXZ0b29sc1wiLFxuICAgICAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiLFxuICAgICAgICBcImF1dG9wcmVmaXhlclwiLFxuICAgICAgICBcImNoYXJ0LmpzXCIsXG4gICAgICAgIFwiY2hlY2stcGFzc3dvcmQtc3RyZW5ndGhcIixcbiAgICAgICAgXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIixcbiAgICAgICAgXCJjbHN4XCIsXG4gICAgICAgIFwiY21ka1wiLFxuICAgICAgICBcImRhdGUtZm5zXCIsXG4gICAgICAgIFwiZGx4XCIsXG4gICAgICAgIFwiZnJvbVwiLFxuICAgICAgICBcImltcG9ydFwiLFxuICAgICAgICBcImlucHV0LW90cFwiLFxuICAgICAgICBcImx1Y2lkZS1yZWFjdFwiLFxuICAgICAgICBcIm5leHQtdGhlbWVzXCIsXG4gICAgICAgIFwicmVhY3QtY2hhcnRqcy0yXCIsXG4gICAgICAgIFwicmVhY3QtZGF5LXBpY2tlclwiLFxuICAgICAgICBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiLFxuICAgICAgICBcInNoYWRjbi11aVwiLFxuICAgICAgICBcInRhaWx3aW5kLW1lcmdlXCIsXG4gICAgICAgIFwidGFpbHdpbmQtdmFyaWFudHNcIixcbiAgICAgICAgXCJ0YWlsd2luZGNzc1wiLFxuICAgICAgICBcInZhdWxcIixcbiAgICAgICAgXCJ2aXRlLXBsdWdpbi1kdHNcIixcbiAgICAgICAgXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCIsXG4gICAgICBdLFxuXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXG4gICAgICAgICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxuICAgICAgICAgIHRhaWx3aW5kY3NzOiBcInRhaWx3aW5kY3NzXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlAsT0FBTyxVQUFVO0FBRTlRLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFMeEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTSxVQUFVO0FBQUEsRUFDZDtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0YsU0FBUyxDQUFDLG1CQUFtQixrQkFBa0IsYUFBYTtBQUFBLElBQzlELENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsV0FBVztBQUFBLElBQ3ZCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxPQUFPO0FBQUEsUUFDWixRQUFRLElBQUksQ0FBQyxXQUFXO0FBQUEsVUFDdEI7QUFBQSxVQUNBLEtBQUssUUFBUSxrQ0FBVyxPQUFPLE1BQU0sRUFBRTtBQUFBLFFBQ3pDLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsSUFBSTtBQUFBLE1BQ2QsVUFBVSxDQUFDLFFBQVEsY0FDakIsR0FBRyxZQUFZLFlBQVksTUFBTSxFQUFFLHFCQUFxQixNQUFNO0FBQUEsSUFDbEU7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVI7QUFBQSxRQUNBO0FBQUE7QUFBQSxRQUVBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BRUEsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
