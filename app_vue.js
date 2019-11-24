import Vue from 'vue'
import MySelect from '@/js/pages/MySelect'
import AdminSetting from '@/js/pages/AdminSetting'
import AdvertiserPage from '@/js/pages/AdvertiserPage'

import ProjectLink from '@/js/components/utils/ProjectLink'
import MarketingChannel from '@/js/components/utils/MarketingChannel'
import StatusToggle from '@/js/components/utils/StatusToggle'
import AdvertiserStatus from '@/js/components/utils/AdvertiserStatus'
import VerticalColumn from '@/js/components/utils/VerticalColumn'
import AdvertiserAction from '@/js/components/utils/AdvertiserAction'

/**
 * component for rendering row
 */
Vue.component('project-link', ProjectLink)
Vue.component('marketing-channel', MarketingChannel)
Vue.component('status-toggle', StatusToggle)
Vue.component('advertiser-status', AdvertiserStatus)
Vue.component('vertical-column', VerticalColumn)
Vue.component('advertiser-action', AdvertiserAction)

const app = new Vue({
    el: '#app-vue',
    components: {
        AdminSetting,
        MySelect,
        AdvertiserPage
    }
})

export default app