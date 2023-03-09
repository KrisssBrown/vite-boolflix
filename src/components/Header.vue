<template>
    <header class="container flex">
        <h1>
            <a href="#">
                Boolflix
            </a>
        </h1>
        <div class="search-input">
            <input type="text" placeholder="Cerca un film..." v-model="store.search" @keyup.enter="$emit('onSearch')">
            <button @click="$emit('onSearch')">Cerca</button>
        </div>

    </header>
</template>

<!-- ****************************************************************************** -->


<script>

import store from '../store'

export default {

    data() {
        return {
            store
        }
    }
}
</script>


<!-- ****************************************************************************** -->
<style lang="scss" scoped>
.container {
    background-color: black;

    h1 {
        color: red;
    }
    .search-input {
        display: flex;
        gap: 15px;

        input {
            padding: 3px 10px;
            border-radius: 10px;
        }

        button {
            padding: 0 10px;
            color: white;
            background-color: red;
            border-radius: 10px;
        }
    }
}


.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;

}
</style>