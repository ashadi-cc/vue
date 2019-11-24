<template>
    <div>
        <filter-project v-on:changeFilter="onChangeFilter" />
        <div class="col-sm-12">
            <vdtnet-table 
                ref="table"
                :fields="fields"
                :opts="options"
                :details="details"
                className="table table-hover table-datatable"
            />
        </div>
    </div>
</template>
<script>
import VdtnetTable from '@/js/components/base/VdtnetTable'
import FilterProject from '@/js/components/utils/FilterProject'
import StatusChanged from '@/js/mixin/StatusChanged'

export default {
    components: { VdtnetTable, FilterProject },    
    props: ['ajaxurl', 'superadmin', 'projecturl', 'advertiserurl'],
    mixins:[StatusChanged], 
    data() {
        const vm = this
        let projectUrl =  vm.projecturl.replace('id', '')

        let fields = {
            status: {
                width: '110px',
                label: 'Status',
                template: '<status-toggle :row="row" :data="data" />'
            },
            advertiser: {
                visible: vm.superadmin ? true : false, 
                label: 'Advertiser Name',
                render: (data, type, full) => {
                    let url = vm.advertiserurl.replace('id', full.id)
                    return `<a href="${url}">${data}</a>`
                }
            },
            name: {
                label: 'Project Name',
                render: (data, type, full) => {
                    let url = vm.projecturl.replace('id', full.id)
                    return `<a href="${url}">${data}</a>`
                }
            },
            verticalName: {
                label: 'Vertical',
                name: 'vertical.name',
                render: (data) => {
                    return `<span class="label label-default">${data}</span>`
                }
            },
            marketing_channels_count: {
                label: 'Marketing Channels',
                template: '<marketing-channel :data="data" v-once/>'
            },
            billable_calls_count: {
                label: 'Billable Calls'
            },
            total_calls_count: {
                label: 'Total Calls'
            },
            id: {
                className: 'text-right',
                label: 'Actions',
                template: `<project-link label="Reports" :url="'${projectUrl}' + data" v-once/> <project-link label="View/Edit" :url="'${projectUrl}' + data" v-once/>`
            }
        }

        if (!vm.superadmin) {
            delete fields.advertiser
        }

        return {
            options: {
                ajax: {
                    url: vm.ajaxurl
                },
                processing: true,
                serverSide: true,
                autoWidth: false,
                pageLength: 10,
                dom: "lrtip",
                drawCallback: function( settings ) {
                    $('.toggle_ap').bootstrapToggle();
                },
            },
            fields: fields,
            details: {
                template: `<div class="childRowContent">
                            <strong>ID</strong>: <a :href="'${projectUrl}' + data.id">{{ data.id }}</a> <br>
                            <strong>Start Date</strong>: {{ data.start_date }} <br>
                            <strong>Total Calls</strong>: {{ data.total_calls_count }}
                           </div>`
            }
        }
    },
    methods: {
        onChangeFilter(filter) {
            const dataTable = this.$refs.table.dataTable
            if (filter.status == "" && filter.name == "" && filter.project == "") {
                dataTable.columns().search("").draw()
            } else {
                dataTable.column(1).search(filter.status)
                dataTable.column(2).search(filter.name)
                dataTable.column(3).search(filter.project)
                dataTable.draw()
            }
        }
    },
    mounted() {
        this.initStatusChangedEvent()
        // const dataTable = this.$refs.table.dataTable
        
        // dataTable.on('responsive-resize', function ( e, datatable, columns ) {
        //     var count = columns.reduce( function (a,b) {
        //         return b === false ? a+1 : a;
        //     }, 0 );

        //     if (count > 0) {
        //         count = columns[0] == false ? count - 1 : count;
               
        //     }

        //      datatable.column(0).visible((count >0 ? false : true))
        // })
    }
}
</script>