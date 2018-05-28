import EventBus from './src/EventBus'

export default {
    /**
     * Install Vue deps
     * @param  Object Vue
     * @param  Object options
     */
    install(Vue, options){
        Vue.prototype.$bus = new EventBus(Vue)
    }
}

