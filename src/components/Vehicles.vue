<template>
    <div id="vehicles">
        <div v-for="(vehicle, index) in vehicles" :key="index" class="vehicle">
            <router-link class="item" v-bind:to="'/vehicles/' + vehicle.url.slice(30,32)">
                <div>{{vehicle.name}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Vehicles",
        data() {
            return {
                vehicles: [],
                id: ""
            };
        },
        methods: {},
        created() {
            fetch("https://swapi.dev/api/vehicles/")
                .then(response => response.json())
                .then(data => {
                    this.vehicles = data.results;
                });
        }
    };
</script>

<style scoped>
    #vehicles {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }

    .vehicle {
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
        #vehicles {
            margin: 0 10%;

        }
    }
</style>
