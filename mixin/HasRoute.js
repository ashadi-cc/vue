/**
 * listen for hashtag url change and passed the value to currentHash variable
 */
export default {
    data() {
        return {
            currentHash: ''
        }
    },

    created() {
        let vm = this;
        let hash = window.location.hash ? window.location.hash : ''
        vm.currentHash = hash
        window.onpopstate = e => {
            hash = window.location.hash ? window.location.hash : ''
            vm.currentHash = hash
        }
    }
}