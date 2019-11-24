<template>
    <div class="nav-tabs-custom">
        <tab-link v-bind:items="links" v-bind:activetab="activeTab"/>
        <div class="tab-content">
            <AccountSetting 
                v-bind:class="{ active : activeTab == '#account' }"
                :first_name="first_name"
                :last_name="last_name"
                :email="email"
            />
            <AdvanceSetting v-bind:class="{ active : activeTab == '#advanced' }"/>
        </div>
    </div>
</template>

<script>
import HasRoute from '@/js/mixin/HasRoute'
import TabLink from '@/js/components/tab/TabLink'
import AccountSetting from '@/js/components/AccountSetting'
import AdvanceSetting from '@/js/components/AdvanceSetting'
export default {
    mixins: [ HasRoute ],
    props: ['first_name', 'last_name', 'email'],
    data() {
        return {
            links: [
                {id: '#account', name: 'Account'},
                {id: '#advanced', name: 'Advanced'}
            ]
        }
    },
    computed: {
        activeTab() {
            if (this.currentHash == "") return '#account'
            return this.currentHash
        }
    },
    components: {
        TabLink,AccountSetting, AdvanceSetting
    }
}
</script>