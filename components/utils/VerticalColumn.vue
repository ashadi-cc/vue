<template>
    <div class="btn-group">
        <a href="#" class="btn btn-sm" :class="btnClass">{{ row.advertiser_projects_count }} Running</a>
        <button type="button" class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown">
            <span class="caret"></span>
            <span class="sr-only">Toggle Dropdown</span>
            <ul class="dropdown-menu" role="menu">
                <li v-for="item in data" :key="item.name"><a href="#" class="text-success">
                    <span class="label label-info">
                        {{ item.advertiser_projects_count }}
                    </span>
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </button>
    </div>
</template>
<script>
export default {
    props: ['data', 'row'],
    computed: {
        btnClass: function() {
            if (this.row.advertiser_projects_count == 0) {
                return {'btn-danger': true}
            }

            return {'btn-success': true}
        }
    }
}
</script>