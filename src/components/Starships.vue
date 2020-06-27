<template>
    <div id="starships">
        <div v-for="(starship, index) in starships" :key="index" class="starship">
            <router-link class="item" v-bind:to="'/starships/' + starship.url.slice(31,33) ">
                <div>{{starship.name}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Starships",
        data() {
            return {
                starships: [],
                id: ""
            };
        },
        methods: {},
        created() {
            fetch("https://swapi.dev/api/starships/")
                .then(response => response.json())
                .then(data => {
                    this.starships = data.results;
                });
        }
    };
</script>

<style scoped>
    #starships {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }

    .starship {
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
        #starships {
            margin: 0 10%;

        }
    }
</style>
