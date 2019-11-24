<template>
    <div id="filters" class="filters-box">
        <div class="row">
            <div class="form-group col-md-2">
                <label class="control-label">Status</label>
                <select class="form-control" name="status" id="status" v-model="filter.status" v-on:change="postEvent">
                    <option value="">All</option>
                    <option value="0">Inactive</option>
                    <option value="1">Active</option>
                </select>
            </div>
            <div class="form-group col-md-4">
                <label class="control-label">Advertiser Name</label>
                <input type="search" class="form-control" id="advertiser_name" name="advertiser_name" v-model="filter.name" v-on:keyup="keyUpInput">
            </div>
            <div class="form-group col-md-4">
                <label class="control-label">Project Name</label>
                <input type="search" class="form-control" id="project_name" name="project_name" v-model="filter.project" v-on:keyup="keyUpInput">
            </div>
            <div class="form-group col-md-2">
                <button id="reset_filters" type="button" class="btn btn-primary" v-on:click="resetFilter">Reset Filters</button>
            </div>
        </div>
    </div>
</template>

<script>
import dash from 'lodash'

export default {
    data() {
        return {
            filter : {
                status: '',
                name: '',
                project: ''
            }
        }
    },

    created() {
        this.debounceFilter = dash.debounce(this.postEvent, 500)
    },
    methods: {
        resetFilter() {
            this.filter.status = ''
            this.filter.name = ''
            this.filter.project = ''
            this.postEvent()
        },

        keyUpInput() {
           this.debounceFilter()
        },

        postEvent() {
            this.$emit('changeFilter', this.filter)
        }
    }
}
</script>
