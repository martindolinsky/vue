<template>
    <div class="single-film">
        <div class="parameter">Title: <span class="text">{{film.title}}</span></div>
        <div class="parameter">Director: <span class="text">{{film.director}}</span></div>
        <div class="parameter">Producer: <span class="text">{{film.producer}}</span></div>
        <div class="parameter">Release date: <span class="text">{{film.release_date}}</span></div>
        <div class="parameter">Episode ID: <span class="text">{{film.episode_id}}</span></div>
    </div>

</template>

<script>
    export default {
        name: "Film",
        data() {
            return {
                id: this.$route.params.id,
                film: {}
            };
        },

        created() {
            fetch("https://swapi.dev/api/films/" + this.id)
                .then(response => response.json())
                .then(data => {
                    this.film = data;
                });
        }
    };
</script>

<style scoped>
    .single-film {
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
        .single-film {
            margin: 0 10%;

        }
    }
</style>
