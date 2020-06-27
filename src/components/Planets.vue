<template>
    <div id="planets">
        <div v-for="(planet, index) in planets" :key="index" class="planet">
            <router-link class="item" v-bind:to="'/planets/' + parseInt(index+1) ">
                <div :bind:id="1">{{planet.name}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Panets",
        data() {
            return {
                planets: [],
                id: ""
            };
        },
        methods: {},
        created() {
            fetch("https://swapi.dev/api/planets/")
                .then(response => response.json())
                .then(data => {
                    this.planets = data.results;
                });
        }
    };
</script>

<style scoped>
    #planets {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }

    .planet {
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
        #planets {
            margin: 0 10%;

        }
    }
</style>
