<template>
    <div id="filters" class="filters-box">
        <div class="row">
            <div class="form-group col-md-2">
                <label class="control-label">Status</label>
                <select class="form-control" name="status" id="status" v-model="filter.status" v-on:change="postEvent">
                    <option value="">All</option>
                    <option value="0">Inactive</option>
                    <option value="1">Active</option>
                    <option value="2">Email Verification</option>
                    <option value="4">Terminated</option>
                </select>
            </div>
            <div class="form-group col-md-3">
                <label class="control-label">Advertiser Name</label>
                <input type="search" class="form-control" id="name" name="name" v-model="filter.name" v-on:keyup="keyUpInput">
            </div>
            <div class="form-group col-md-3">
                <label class="control-label">Destination Number</label>
                <input type="search" class="form-control" id="destination_number" name="destination_number" v-model="filter.destNumber" v-on:keyup="keyUpInput">
            </div>
            <div class="form-group col-md-2">
                <label class="control-label">My Select</label>
                <select class="form-control" name="my_select" id="my_select" v-model="filter.mySelect" v-on:change="postEvent">
                    <option value="">All</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
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
    created() {
        this.debounceFilter = dash.debounce(this.postEvent, 500)
    },
    data() {
        return {
            filter: {
                status: '',
                name: '', 
                destNumber: '', 
                mySelect: ''
            }
        }
    },
    methods: {
        resetFilter() {
            this.filter.status = ''
            this.filter.name = ''
            this.filter.destNumber = ''
            this.filter.mySelect = ''
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
