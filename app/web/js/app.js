let salut = function (el, binding) {

    el.value = binding.value;

    console.log('bind', binding)

};


let vm = new Vue({
    el: '#app',
    directives: {
        salut
    },
    data: {
        message: 'Walid',
    },
    methods: {

        demo: function () {
            console.log('Salut')
        },

        demo2: function () {

            console.log('demo 2 ')
        }
    }


});
