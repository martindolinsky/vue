<template>
    <div class="single-vehicle">
        <div class="parameter">Name: <span class="text">{{vehicle.name}}</span></div>
        <div class="parameter">Model: <span class="text">{{vehicle.model}}</span></div>
        <div class="parameter">Cost: <span class="text">{{vehicle.cost_in_credits}}</span></div>
        <div class="parameter">Max speed: <span class="text">{{vehicle.max_atmosphering_speed}}</span></div>
        <div class="parameter">Length: <span class="text">{{vehicle.length}}</span></div>
        <div class="parameter">Cargo capacity: <span class="text">{{vehicle.cargo_capacity}}</span></div>
    </div>
</template>

<script>
    export default {
        name: "Vehicle",
        data() {
            return {
                id: this.$route.params.id,
                vehicle: {}
            };
        },

        created() {
            fetch("https://swapi.dev/api/vehicles/" + this.id)
                .then(response => response.json())
                .then(data => {
                    this.vehicle = data;
                });
        }
    };
</script>

<style scoped>
    .single-vehicle {
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
        .single-vehicle {
            margin: 0 10%;

        }
    }
</style>
