import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/17028/OneDrive/Documents/GitHub/mina-resume.github.io/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}