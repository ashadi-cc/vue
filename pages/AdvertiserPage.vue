<template>
    <div>
        <div style="margin-bottom: 30px">
            <div class="col-lg-12">
                <filter-advertiser v-on:changeFilter="onChangeFilter" />
            </div>
        </div>
        <div class="col-lg-12">
            <vdtnet-table 
                ref="table"
                :fields="datatable.fields"
                :opts="datatable.options"
                :details="datatable.details"
                className="table table-hover table-datatable"
            />
        </div>
    </div>

</template>

<script>
import VdtnetTable from '@/js/components/base/VdtnetTable'
import FilterAdvertiser from '@/js/components/utils/FilterAdvertiser'

export default {
    components: { VdtnetTable, FilterAdvertiser },
    data() {
        const vm = this

        return {
            filter: {
                mySelect: '',
                destNumber: ''
            },
            datatable: {
                options: {
                    processing: true,
                    serverSide: true,
                    dom: "lrtip",
                    pageLength: 10,
                    autoWidth: false,
                    responsive: false,
                    ajax: {
                        url: '/api/advertisers/data',
                        data: (d) => {
                            d.has_my_select = vm.filter.mySelect,
                            d.destination_number = vm.filter.destNumber
                        }
                    },
                    drawCallback: function( settings ) {
                        $('.toggle').bootstrapToggle();
                    }
                },
                fields: {
                    status: {
                        width: '115px',
                        label: 'Status',
                        template: '<advertiser-status :row="row" :data="data" v-once/>'
                    },
                    name: {
                        label: 'Name',
                        render: (data, type, full) => {
                            let url = '/advertisers/id'
                            url = url.replace('id', full.id)
                            
                            return '<a href=\"' + url + '\">' + data + '</a>' + ((full.agency) ? ' <span class="label label-warning">Agency</span>':'')
                        }
                    },
                    billable_calls_count: {
                        label: 'Billable Calls'
                    },
                    net_revenue: {
                        label: 'Net Revenue'
                    },
                    conversion_rate: {
                        label: 'Conversion Rate'
                    },
                    verticals: {
                        label: 'Projects',
                        className: 'text-right',
                        template: '<vertical-column :row="row" :data="data" v-once/>'
                    },
                    id: {
                        label: 'Actions',
                        className: 'text-right',
                        template: '<advertiser-action :row="row" :data="data" v-once/>'
                    }
                },
                details: {
                    template: `
                        <div class="childRowContent">
                            <strong>ID</strong>: {{ data.id }} <br>
                            <strong>Gross Revenue</strong>: $0 <br>
                            <strong>Total Calls</strong>:: {{ data.total_calls_count }} <br>
                            <strong>Sign-Up Date:</strong>: {{ data.created_at }}
                        </div>
                    `
                }
            }
        }
    },
    methods: {
        onChangeFilter(filter) {
            const dataTable = this.$refs.table.dataTable

            this.filter.mySelect = filter.mySelect
            this.filter.destNumber = filter.destNumber
            dataTable.column(1).search(filter.status)
            dataTable.column(2).search(filter.name)
            dataTable.draw()

        }
    },
    mounted() {
        const dataTable = this.$refs.table.dataTable

        const me = this;
        let el = this.$refs.table.$el;

        $(el).on('click', '.toggle_wrapper', function(e) {
                e.stopPropagation();
                var name = $(this).children().children().data('name');
                var id = $(this).children().children().data('id');
                if (!$(this).children().children().prop('checked')) {
                    $(".advertiser_name").html(name);
                    $("#enable_advertiser_id").val(id);
                    $('#enableAdvertiser').modal('toggle');
                } else {
                    $(".advertiser_name").html(name);
                    $("#disable_advertiser_id").val(id);
                    $('#disableAdvertiser').modal('toggle');
                }
        });
        $(el).on('click', '.archive_account', function(e) {
            e.stopPropagation();
            var name = $(this).data('name');
            var id = $(this).data('id');
            $(".advertiser_name").html(name);
            $("#archive_advertiser_id").val(id);
            $('#archiveAdvertiser').modal('toggle');
        });
        $("#archiveAdvertiserButton").on('click', function() {
            $('.box-body').addClass('running');
            $('#archiveAdvertiser').modal('toggle');
            url = '/advertisers/id/archive';
            url = url.replace('id', $(".archive_advertiser_id").val());

            axios.post(url)
                .then(function (response) {
                    toastr.success('Advertiser archived!');
                    advertisers_table
                        .draw();
                })
                .catch(function (error) {
                    toastr.error(error);
                })
                .then(function () {
                    $('.box-body').removeClass('running');
                });
        });
        $("#archiveConfirm").on('keyup', function() {
            if($(this).val() == "ARCHIVE")
                $("#archiveAdvertiserButton").prop('disabled', false);
            else
                $("#archiveAdvertiserButton").prop('disabled', true);
        });
        $('#archiveAdvertiser').on('hidden.bs.modal', function () {
            $("#archiveConfirm").val("");
            $("#archiveAdvertiserButton").prop('disabled', true);
        });
        $(el).on('click', '.terminate_account', function(e) {
            e.stopPropagation();
            var name = $(this).data('name');
            var id = $(this).data('id');
            $(".advertiser_name").html(name);
            $("#terminate_advertiser_id").val(id);
            $('#terminateAdvertiser').modal('toggle');
        });
        $("#terminateAdvertiserButton").on('click', function() {
            $('.box-body').addClass('running');
            $('#terminateAdvertiser').modal('toggle');
            url = '/advertisers/id/terminate';
            url = url.replace('id', $(".terminate_advertiser_id").val());

            axios.post(url)
                .then(function (response) {
                    toastr.success('Advertiser terminated!');
                    advertisers_table
                        .draw();
                })
                .catch(function (error) {
                    toastr.error(error);
                })
                .then(function () {
                    $('.box-body').removeClass('running');
                });
        });
        $("#terminateConfirm").on('keyup', function() {
            if($(this).val() == "TERMINATE")
                $("#terminateAdvertiserButton").prop('disabled', false);
            else
                $("#terminateAdvertiserButton").prop('disabled', true);
        });
        $('#terminateAdvertiser').on('hidden.bs.modal', function () {
            $("#terminateConfirm").val("");
            $("#terminateAdvertiserButton").prop('disabled', true);
        });
        $("#enableAdvertiserButton").on('click', function() {
            $('.box-body').addClass('running');
            $('#enableAdvertiser').modal('toggle');
            url = '/advertisers/id/enable';
            url = url.replace('id', $(".enable_advertiser_id").val());

            axios.post(url)
                .then(function (response) {
                    toastr.success('Advertiser enabled!');
                    $("#advertisers").find("[data-id='" + $(".enable_advertiser_id").val() + "']").bootstrapToggle('on').data('status', "1");
                })
                .catch(function (error) {
                    toastr.error(error);
                })
                .then(function () {
                    $('.box-body').removeClass('running');
                });
        });
        $("#disableAdvertiserButton").on('click', function() {
            $('.box-body').addClass('running');
            $('#disableAdvertiser').modal('toggle');
            url = '/advertisers/id/disable';
            url = url.replace('id', $(".disable_advertiser_id").val());

            axios.post(url)
                .then(function (response) {
                    toastr.success('Advertiser disabled!');
                    $("#advertisers").find("[data-id='" + $(".disable_advertiser_id").val() + "']").bootstrapToggle('off').data('status', "1");
                })
                .catch(function (error) {
                    toastr.error(error);
                })
                .then(function () {
                    $('.box-body').removeClass('running');
                });
        });
        
        // dataTable.on('responsive-resize', function ( e, datatable, columns ) {
        //     var count = columns.reduce( function (a,b) {
        //         return b === false ? a+1 : a;
        //     }, 0 );

        //     if (count > 0) {
        //         count = columns[0] == false ? count - 1 : count;
               
        //     }
        //     datatable.column(0).visible((count >0 ? false : true))
        // })
    }
}
</script>