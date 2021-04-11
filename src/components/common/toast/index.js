import Toast from './Toast'

export default {
  install(Vue) {
    const componentsConstruct = Vue.extend(Toast)
    const comp = new componentsConstruct()
    comp.$mount(document.createElement('div'))
    document.body.appendChild(comp.$el)
    Vue.prototype.$toast = comp
    // console.log('--');
  }
}

