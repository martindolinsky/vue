<template>
    <div class="single-planet">
        <div class="parameter">Name: <span class="text">{{planet.name}}</span></div>
        <div class="parameter">Terrain: <span class="text">{{planet.terrain}}</span></div>
        <div class="parameter">Gravity: <span class="text">{{planet.gravity}}</span></div>
        <div class="parameter">Climate: <span class="text">{{planet.climate}}</span></div>
        <div class="parameter">Population: <span class="text">{{planet.population}}</span></div>
        <div class="parameter">Diameter: <span class="text">{{planet.diameter}}</span></div>
    </div>
</template>

<script>
    export default {
        name: "Planet",
        data() {
            return {
                id: this.$route.params.id,
                planet: {}
            };
        },

        created() {
            fetch("https://swapi.dev/api/planets/" + this.id)
                .then(response => response.json())
                .then(data => {
                    this.planet = data;
                });
        }
    };
</script>

<style scoped>
    .single-planet {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }

    .parameter {
        text-align: center;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 20px 0 20px 0;
        text-decoration: none;
        color: black;
        background-color: whitesmoke;
        font-size: 1.5em;
    }

    .text {
        color: dimgray;
    }

    @media only screen and (min-width: 300px) {
        .single-planet {
            margin: 0 10%;

        }
    }
</style>
