import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "home"
declare module "C:/Users/17028/OneDrive/Documents/GitHub/mina-resume.github.io/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}