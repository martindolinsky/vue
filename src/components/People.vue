<template>
    <div id="people">
        <div v-for="(person, index) in people" :key="index" class="person">
            <router-link class="item" v-bind:to="'/people/' + parseInt(index+1) ">
                <div :bind:id="1">{{person.name}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "People",
        data() {
            return {
                people: [],
                id: "",
            };
        },
        methods: {},
        created() {
            fetch("https://swapi.dev/api/people/")
                .then(response => response.json())
                .then(data => {
                    this.people = data.results;
                });
        },
    };
</script>

<style scoped>
    #people {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }

    .person {
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
        #people {
            margin: 0 10%;

        }
    }
</style>
