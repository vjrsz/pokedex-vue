<template>
    <section id="search" class="my-3">
        <form class="form" @submit.prevent="submitForm">
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="filter" placeholder="Buscar Pokémon">
                <button class="input-group-text">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </button>
            </div>
        </form>
    </section>
</template>
<script>
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

    export default {
        name: 'Search',
        components: {FontAwesomeIcon},
        data: function(){
            return {
                filter: ''
            }
        },
        methods:{
            submitForm(){
                console.log(this.filter)
            }
        }
    }
</script>
<style scoped>
    #search{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form{
        width: 70%;
    }
    .form .input-group{
        border: 1px solid var(--bs-red);
        border-radius: 10px;
    }
    .form .input-group input, .form .input-group input:focus, .form .input-group .input-group-text {
        outline: none;
        border: none;
        box-shadow: none;
        background: transparent;
        color: white;
    }
    .form .input-group input::placeholder{
        color: #ccc;
    }
    .form .input-group .input-group-text {
        background: none;

    }
</style>