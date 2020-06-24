<template>
    <section>
 {{ $route.params.id }} /  {{ $route.params.name }}
        <hr>
            distance: <input v-model="distance"><br>
            weight: <input v-model="weight" type="number"><br><br>
            your deliveryCost = {{deliveryCost}}<br>
            can make order: {{isFormValid}}
            <br>

            <button ref="btn" @click="changeUserAdress">changeUserAdress</button>
            <button ref="btn" @click="login">login</button>
<br>
            {{addres}}


    </section>
</template>

<script>
export default {
    name: 'Demo',
    beforeRouteEnter(_, __, next){
        console.log('beforeRouteEnter')
        next()
    },
    data(){
        return {
            // deliveryCost: 0,
            weight: 10,
            distance: 10,
            addres: {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            }
        }
    },

    // $refs
    // $router
    // $store

    // $axios
    // ...

    mounted(){
        window.addEventListener('scroll', (e) => {
            //console.log('scroll', window.scrollY)
            console.log(this.$refs.btn.getBoundingClientRect().top)

        })
    },
    computed: {
        deliveryCost(){
            const cost = this.weight * 1.2 * this.distance
             console.log(cost)
            return cost < 1000 ? 1100 : cost
        },
        isFormValid(){
            return this.weight > 10 && this.distance > 10
        }
    },
    watch: {
        weight: function(newVal, oldVal){
            console.log(newVal, oldVal)
        },
        'addres.street': {
            handler: function (val, oldVal) {
                console.log(val)
            },
            deep: true,
        }
    },
    methods: {
        login(){

            this.$router.push({
                name: 'Home',
                params: { userId: 123 }
            })

        },
        changeUserAdress(){
            this.addres.zipcode = '123456'
            console.log(this.$refs.btn.getBoundingClientRect().top)
        }   
    }
}
</script>

<style>

</style>