import _Auth from './core/auth'
import _Scheme from './schemes/_scheme'

export type Auth = _Auth
export type Scheme = _Scheme<SchemeOptions | any> & {
  refreshTokens: Function
  check: () => boolean
}

export type HTTPRequest = {
  method?: 'get' | 'post' | string
  url?: string,
  baseURL?: boolean
  data?: object | any,
  headers?: { [name: string]: string }
}

export type HTTPResponse = {
  data: object | any
}

export type SchemeOptions = {
  name: string,
  [key: string]: any
}

export type AuthOptions = {
  resetOnError: boolean | Function
  defaultStrategy: string
  watchLoggedIn?: boolean
  rewriteRedirects: boolean
  fullPathRedirect: boolean
  scopeKey: string
  redirect: { [from: string]: string }

  // TODO: Token options and handling should be from scheme
  token: { prefix: string, type: string }
  tokenExpiration: { prefix: string }
  refreshToken: { prefix: string }
  refreshTokenExpiration: { prefix: string }
}

declare module '@nuxt/types' {
  interface Context {
    $auth: Auth;
  }
  interface NuxtAppOptions {
    $auth: Auth;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    auth?: true | false | 'guest';
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $auth: Auth;
  }
}
