<template>
    <span class="label" :class="classLabel">{{ data }}</span>
</template>
<script>
export default {
    props: ['data'],
    computed: {
        classLabel: function() {
            if (this.data == '0') return {'label-danger': true}

            return {'label-success': true}
        }
    }
}
</script>
