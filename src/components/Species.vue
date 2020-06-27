<template>
    <div id="species">
        <div v-for="(specie, index) in species" :key="index" class="specie">
            <router-link class="item" v-bind:to="'/species/' + parseInt(index+1) ">
                <div>{{specie.name}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Species",
        data() {
            return {
                species: [],
                id: ""
            };
        },
        methods: {},
        created() {
            fetch("https://swapi.dev/api/species/")
                .then(response => response.json())
                .then(data => {
                    this.species = data.results;
                });
        }
    };
</script>

<style scoped>
    #species {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }

    .specie {
        text-align: center;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 20px 0 20px 0;
        text-decoration: none;
        color: black;
        background-color: whitesmoke;
        font-size: 1.5em;
    }

    .item {
        text-decoration: none;
        color: black;
    }

    @media only screen and (min-width: 300px) {
        #species {
            margin: 0 10%;

        }
    }
</style>
