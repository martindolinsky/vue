<template>
    <nav class="header">
        <div>
            <img id="logo" src="../assets/logo.png" alt="Logo">
        </div>
        <div id="title">
            Star Wars Catalogue
        </div>
        <div>
            <router-link class="home" to="/" exact>Home</router-link>
        </div>

    </nav>
</template>

<script>
    export default {
        name: "Header"
    };
</script>

<style scoped>
    a {
        color: whitesmoke;
        text-decoration: none;
        padding: 6px 8px;
        border-radius: 10px;
    }

    nav {
        background: #444;
        padding: 14px 0;
        margin-bottom: 40px;
    }

    .header {
        background-color: whitesmoke;
        border-radius: 0 0 100px 100px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

    }

    .home {
        margin-right: 35px;
        color: black;
        font-size: 1.3em;
        background-color: lightgray;
        border-radius: 20px 0 20px 0;
    }

    #title {
        font-size: 2em;
    }

    #logo {
        width: 30px;
        margin-left: 15px;
    }

    .router-link-active {
        background: #000;
        color: #fff;
    }

    @media only screen and (min-width: 300px) {
        #title {
            font-size: 1em;
        }
        .home {
            font-size: 0.8em;
            margin-right: 20px;
        }
    }
    @media only screen and (min-width: 400px) {
        #title {
            font-size: 1.5em;
        }
        .home {
            font-size: 1.2em;
        }
    }
    @media only screen and (min-width: 700px) {
        #title {
            font-size: 2.5em;
        }
        .home {
            font-size: 1.5em;
            margin-right: 35px;
        }
    }
</style>
