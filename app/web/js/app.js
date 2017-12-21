new Vue({
    el: '#app',
    data: {
        message: 'Hello walid !',
        link :" https://www.adservio.fr",
        cls: 'success',
        persons: ['walid','rania','yann','maher','manel'],
    },
    methods:{
        close: function () {
            this.message= "Fermé ",
            this.success = false

        }
    }
})