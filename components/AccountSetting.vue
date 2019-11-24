<template>
    <div class="tab-pane">
        <div class="row">
            <div class="col-lg-12">
                <div class="form-group">
                    <label for="email" class="col-sm-4 control-label">First Name</label>

                    <div class="col-sm-5">
                        <input type="text" class="form-control" name="first_name" v-bind:value="first_name">
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="form-group">
                    <label for="email" class="col-sm-4 control-label">Last Name</label>

                    <div class="col-sm-5">
                        <input type="text" class="form-control" name="last_name" v-bind:value="last_name">
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="form-group">
                    <label for="email" class="col-sm-4 control-label">Email</label>

                    <div class="col-sm-5">
                        <input type="email" class="form-control" name="email" placeholder="E-mail" v-bind:value="email">
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="form-group">
                    <label for="password" class="col-sm-4 control-label">Password</label>

                    <div class="col-sm-5">
                        <input type="password" class="form-control" name="password" placeholder="New password">
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="form-group">
                    <label for="repassword" class="col-sm-4 control-label">Confirm Password</label>

                    <div class="col-sm-5">
                        <input type="password" class="form-control" name="password_confirmation" placeholder="Retype your new password">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['first_name', 'last_name', 'email']
}

</script>
