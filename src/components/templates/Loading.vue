<template>
    <div class="loading">
        <img class="ball" src="@/assets/img/pokeball.png" />
    </div>
</template>

<script>
    export default {
        name: "Loading",
    }
</script>

<style scoped>
.loading{
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #0009;
    width: 100%;
    height: 100vh;
    z-index: 99;
}
.ball {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
    animation: roll 1s ease-in-out infinite;
}

@-webkit-keyframes roll {
    from { transform: rotate(0);}
    90%,
    to { transform: rotate(720deg); }
}

@-webkit-keyframes button {
    from,
    50%,
    to { box-shadow: 0 0 15px -2px #c62828 inset; }
    25%,
    75% { box-shadow: 0 0 10px -2px #1300ea inset; }
}
</style>