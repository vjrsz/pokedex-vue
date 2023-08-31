<template>
    <div id="themeToggle" @click="toggleTheme">
        <div class="pokeball anim-jumpy">
            <div class="pokeball__line">
                <div class="pokeball__inner-circle"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: 'ThemeToggle',
    props: {
        isChecked: Boolean
    },
    methods: {
        ...mapActions(['changeTheme']),
        toggleTheme() {
            this.changeTheme()
        },
    },
};
</script>

<style scoped>
    #themeToggle {
        cursor: pointer;
    }
    img{
        width: 100%;
        image-rendering: high-quality;
    }

    .pokeball {
        position: relative;
        width: 50px;
        height: 50px;

        margin: 0 auto 1rem;
        border: 2px solid;
        border-radius: 50%;
        overflow: hidden;
    }

    .pokeball__inner-circle {
        position: absolute;
        left: 15px;
        top: -8px;
        width: 15px;
        height: 15px;
        border: 2px solid;
        border-radius: 50%;
        background-color: white;
    }

    .pokeball__line {
        position: relative;
        top: 22px;
        width: 100%;
        border-top: 2px solid;
    }
</style>
