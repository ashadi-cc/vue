export default {
    props:['advertiser_project_active', 'advertiser_project_deactive'],
    methods: {
        initStatusChangedEvent() {
            const me = this;
            let el = this.$refs.table.$el;
            $(el).on('click', '.toggle_wrapper_ap', function(e) {
                e.stopPropagation();
                var name = $(this).children().children().data('name');
                var id = $(this).children().children().data('id');
                if (!$(this).children().children().prop('checked') && $(this).children().children().data('status') == "0") {
                    $(".project_name").html('<strong>' + name + '</strong>');
                    $(".project_id").val(id);
                    $('#activateProject').modal('toggle');
                } else if($(this).children().children().data('status') == "1") {
                    $(".project_name").html('<strong>' + name + '</strong>');
                    $(".project_id").val(id);
                    $('#deactivateProject').modal('toggle');
                }
            })

            $("#activateProjectButton").on('click', function() {
                $('.box-body').addClass('running');
                $('#activateProject').modal('toggle');
                url = me.advertiser_project_active.replace('id', $(".project_id").val());
                axios.post(url)
                    .then(function (response) {
                        toastr.success('Project activated!');
                        $("#advertiser_projects").find("[data-id='" + $(".project_id").val() + "']").bootstrapToggle('on').data('status', "1");
                    })
                    .catch(function (error) {
                        toastr.error(error);
                    })
                    .then(function () {
                        $('.box-body').removeClass('running');
                    });
            });

            $("#deactivateProjectButton").on('click', function() {
                $('.box-body').addClass('running');
                $('#deactivateProject').modal('toggle');
                url = me.advertiser_project_deactive.replace('id', $(".project_id").val());

                axios.post(url)
                    .then(function (response) {
                        toastr.success('Project deactivated!');
                        $("#advertiser_projects").find("[data-id='" + $(".project_id").val() + "']").bootstrapToggle('off').data('status', "0");
                    })
                    .catch(function (error) {
                        toastr.error(error);
                    })
                    .then(function () {
                        $('.box-body').removeClass('running');
                    });
            });

        }   
    }
}