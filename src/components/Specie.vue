<template>
    <div class="single-specie">
        <div class="parameter">Name: <span class="text">{{specie.name}}</span></div>
        <div class="parameter">Language: <span class="text">{{specie.language}}</span></div>
        <div class="parameter">Classification: <span class="text">{{specie.classification}}</span></div>
        <div class="parameter">Average lifespan: <span class="text">{{specie.average_lifespan}}</span></div>
        <div class="parameter">Designation: <span class="text">{{specie.designation}}</span></div>
        <div class="parameter">Average height: <span class="text">{{specie.average_height}}</span></div>
    </div>
</template>

<script>
    export default {
        name: "Specie",
        data() {
            return {
                id: this.$route.params.id,
                specie: {}
            };
        },

        created() {
            fetch("https://swapi.dev/api/species/" + this.id)
                .then(response => response.json())
                .then(data => {
                    this.specie = data;
                });
        }
    };
</script>

<style scoped>
    .single-specie {
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
        .single-specie {
            margin: 0 10%;

        }
    }
</style>
