<template>
    <ul class="nav nav-tabs">
        <li
            v-for="item in items"
            v-bind:key="item.id"
            v-bind:class="{ active : (item.id == currentTab) }"
        >
            <a v-bind:href="item.id" aria-expanded="false">
                {{ item.name }}
            </a>
        </li>
    </ul>    
</template>

<script>
export default {
    props: ['items', 'activetab'],
    computed: {
        currentTab() {
            if (!this.items.length) return ""

            if (!this.activetab.trim()) {
                return this.items[0].id
            }

            return this.activetab
        }
    }
}
</script>