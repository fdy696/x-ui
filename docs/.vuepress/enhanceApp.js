export default ({ Vue, options, router, siteData, isServer }) => {
  if (!isServer) {
    import('./public/iconfont.js').then((module) => {
      Vue.component(module.xButton)
    })
  }
}
