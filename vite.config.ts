import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       //additionalData: '@import"@/assets/css/globalstyle.scss";'
  //       //👆如果项目中其他的css文件有@forward关键字，就会提示错误
  //       additionalData: '@import "@/assets/scss/rings.scss";',
  //       //👆这样写是可以的，但是要注意
  //       //!!!!一定要将其他地方引入该css文件的地方删除，如index.html,否则会提示已经加载该module的错误！！！
  //     },
  //   },
  // },
});
