<template>
<div class="btn-group">  
    <a :href="url" type="button" class="btn btn-sm btn-default">Edit</a>  
    <button type="button" class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  
    <span class="caret"></span>  
    <span class="sr-only">Toggle Dropdown</span>  
    </button>  
    <ul class="dropdown-menu pull-right" role="menu">  
        <li v-if="row.status == 4">
            <a href="#" class="text-danger archive_account" :data-id="data" :data-name="row.name">
                <i class="fa fa-trash"></i> Archive
            </a>
        </li> 
        <li v-else>
            <a href="#" class="text-danger terminate_account" :data-id="data" :data-name="row.name">
                <i class="fa fa-trash"></i> Terminate
            </a>
        </li>
    </ul>  
</div>
</template>

<script>
export default {
    props: ['data', 'row'],
    computed: {
        url: function() {
            return `/advertisers/${this.row.id}/edit`
        }
    }
}
</script>