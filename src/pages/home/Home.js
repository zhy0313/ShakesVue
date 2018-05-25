export default {
    data () {
        return {
            isTop: false
        }
    },
    mounted () {

    },
    methods: {
        onClickLeft () {
            this.isTop = !this.isTop
        },
        onClickRight () {
            console.log(22222222)
        }
    }
}
