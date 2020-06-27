<template>
    <div id="films">
        <div v-for="(film, index) in films" :key="index" class="film">
            <router-link class="item" v-bind:to="'/films/' + parseInt(index+1) ">
                <div :bind:id="1">{{film.title}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Films",
        data() {
            return {
                films: [],
                id: ""
            };
        },
        methods: {},
        created() {
            fetch("https://swapi.dev/api/films/")
                .then(response => response.json())
                .then(data => {
                    this.films = data.results;
                });
        }
    };
</script>

<style scoped>
    #films {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }

    .film {
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
        #films {
            margin: 0 10%;

        }
    }

</style>
