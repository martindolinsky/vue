<template>
    <div class="single-person">
        <div class="parameter">Name: <span class="text">{{person.name}}</span></div>
        <div class="parameter">Height: <span class="text">{{person.height}}</span></div>
        <div class="parameter">Mass: <span class="text">{{person.mass}}</span></div>
        <div class="parameter">Skin color: <span class="text">{{person.skin_color}}</span></div>
        <div class="parameter">Birth year: <span class="text">{{person.birth_year}}</span></div>
        <div class="parameter">Gender: <span class="text">{{person.gender}}</span></div>
        <div class="parameter">Created: <br> <span class="text">{{person.created}}</span></div>
    </div>
</template>

<script>
    export default {
        name: "Person",
        data() {
            return {
                id: this.$route.params.id,
                person: {}
            };
        },

        created() {
            fetch("https://swapi.dev/api/people/" + this.id)
                .then(response => response.json())
                .then(data => {
                    this.person = data;
                });
        }
    };
</script>

<style scoped>
    .single-person {
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
        .single-person {
            margin: 0 10%;

        }
    }
</style>
