let vm = new Vue({
    el: '#app',
    data: {
        firstName: 'Walid',
        lastName: 'NEJI',
        fullname: ''
    },
    watch :{
        fullname: function (value) {
            console.log('watch',value)
        }
    },
    // computed: {
    //     fullname: {
    //         get: function () {
    //             return this.firstName + ' ' + this.lastName
    //         },
    //         set: function (value) {
    //             console.log(value)
    //             let parts = value.split(' ')
    //             this.firstName = parts [0],
    //             this.lastName = parts [1]
    //         }
    //
    //     }
    // },


})
