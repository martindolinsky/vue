<template>
    <div class="categories">
        <router-link class="category" to="/people" exact>People</router-link>
        <router-link class="category" to="/planets" exact>Planets</router-link>
        <router-link class="category" to="/films" exact>Films</router-link>
        <router-link class="category" to="/species" exact>Species</router-link>
        <router-link class="category" to="/vehicles" exact>Vehicles</router-link>
        <router-link class="category" to="/starships" exact>Starships</router-link>
    </div>

</template>

<script>
    export default {
        name: "Category"
    }
</script>

<style scoped>
    .categories {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }

    .category {
        text-align: center;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 20px 0 20px 0;
        text-decoration: none;
        color: black;
        background-color: whitesmoke;
        font-size: 1.5em;
    }

</style>
