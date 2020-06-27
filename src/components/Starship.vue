<template>
    <div class="single-starship">
        <div class="parameter">Name: <span class="text">{{starship.name}}</span></div>
        <div class="parameter">Model: <span class="text">{{starship.model}}</span></div>
        <div class="parameter">Cost: <span class="text">{{starship.cost_in_credits}}</span></div>
        <div class="parameter">Max speed: <span class="text">{{starship.max_atmosphering_speed}}</span></div>
        <div class="parameter">Length: <span class="text">{{starship.length}}</span></div>
        <div class="parameter">Cargo capacity: <span class="text">{{starship.cargo_capacity}}</span></div>
    </div>
</template>

<script>
    export default {
        name: "Starship",
        data() {
            return {
                id: this.$route.params.id,
                starship: {}
            };
        },

        created() {
            fetch("https://swapi.dev/api/starships/" + this.id)
                .then(response => response.json())
                .then(data => {
                    this.starship = data;
                });
        }
    };
</script>

<style scoped>
    .single-starship {
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
        .single-starship {
            margin: 0 10%;

        }
    }
</style>
