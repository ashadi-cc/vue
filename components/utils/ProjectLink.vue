<template>
    <a :href="url" class="btn btn-xs btn-primary">{{ label }}</a>
</template>

<script>
export default {
    props: ['url', 'label']
}
</script>