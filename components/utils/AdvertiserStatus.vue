<template>
    <span v-if="data == '1'" class="toggle_wrapper"><input class="toggle" type="checkbox" checked :data-id="row.id" :data-name="row.name" data-size="small" data-width="100%" data-toggle="toggle" data-on="Enabled" data-off="Disabled" data-onstyle="success" data-offstyle="danger"></span>
    <input v-else-if="data == '2'" class="toggle" type="checkbox" disabled data-size="small" data-width="100%" data-toggle="toggle" data-off="Email Verification" data-offstyle="warning">
    <input v-else-if="data == '3'" class="toggle" type="checkbox" disabled data-size="small" data-width="100%" data-toggle="toggle" data-off="Capabilities Pending" data-offstyle="warning">
    <input v-else-if="data == '4'" class="toggle" type="checkbox" disabled data-size="small" data-width="100%" data-toggle="toggle" data-off="Account Terminated" data-offstyle="danger">
    <input v-else-if="data == '6'" class="toggle" type="checkbox" disabled data-size="small" data-width="100%" data-toggle="toggle" data-off="Contract Pending" data-offstyle="warning">
    <span v-else class="toggle_wrapper"><input class="toggle" type="checkbox" :data-id="row.id" :data-name="row.name" data-size="small" data-width="100%" data-toggle="toggle" data-on="Enabled" data-off="Disabled" data-onstyle="success" data-offstyle="danger"></span>
</template>

<script>
export default {
    props: ['data', 'row']
}
</script>