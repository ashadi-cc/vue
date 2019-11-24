<template>
    <div>
        <span v-if="data == '1'" class="toggle_wrapper_ap"><input class="toggle_ap" type="checkbox" checked :data-id="row.id" :data-name="row.name" data-toggle="toggle" data-size="small" data-on="Active" data-onstyle="success" data-off="Inactive"  data-offstyle="danger" data-width="100%"></span>
        <span v-else-if="data == '5'" class="toggle_wrapper_ap"><input disabled class="toggle_ap" type="checkbox" :data-id="data.id" :data-name="data.name" data-status="5" data-toggle="toggle" data-size="small" data-off="Awaiting Approval" data-offstyle="warning" data-width="100%"></span>
        <span v-else-if="data == '4'" class="toggle_wrapper"><input class="toggle_ap" disabled type="checkbox" :data-id="row.id" :data-name="row.name" data-toggle="toggle" data-size="small" data-off="Project Terminated" data-offstyle="danger" data-width="100%"></span>
        <span v-else-if="case4 == true" class="toggle_wrapper"><input class="toggle_ap" disabled type="checkbox" :data-id="row.id" :data-name="row.name" data-toggle="toggle" data-size="small" data-off="Advertiser ON-HOLD"  data-offstyle="warning" data-width="100%"></span>
        <span v-else-if="data == '7'" class="toggle_wrapper"><input class="toggle_ap" disabled type="checkbox" :data-id="row.id" :data-name="row.name" data-toggle="toggle" data-size="small" data-off="Project Unavailable"  data-offstyle="danger" data-width="100%"></span>
        <span v-else-if="data == '8'" class="toggle_wrapper"><input class="toggle_ap" disabled type="checkbox" :data-id="row.id" :data-name="row.name" data-toggle="toggle" data-size="small" data-off="Project Declined"  data-offstyle="danger" data-width="100%"></span>
        <span v-else class="toggle_wrapper_ap"><input class="toggle_ap" type="checkbox" :data-id="row.id" :data-name="row.name" data-status="0" data-toggle="toggle" data-size="small" data-on="Active" data-onstyle="success" data-off="Inactive"  data-offstyle="danger" data-width="100%"></span>
    </div>
</template>
<script>
export default {
    props: ['row', 'data'],
    computed: {
        case4: () => {
            if (this.data == '0' && this.row.advertiser_status == '0') return true;

            return false;
        }
    }
}
</script>
