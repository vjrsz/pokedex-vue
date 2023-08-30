<template>
    <header class="py-3">
        <div class="header-img">
            <img class="anim-wobble" src="../../assets/img/pokeball.png" alt="pokeball">
        </div>
        <div class="header-title">
            <h1>POKÉDEX</h1>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderHome'
}
</script>

<style scoped>
    header{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    .header-img{
        width: 50px;
        height: 50px;
    }
    .header-img img{
        width: 100%;
        image-rendering: high-quality;
    }

    .header-title h1{
        font-size: 2rem;
        font-weight: 600;
        margin: 0;
    }

    .anim-wobble{
        animation: wobble 3s linear infinite;
    }

    @keyframes wobble {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: rotateZ(10deg);
        }
        50% {
            transform: translateX(0);
        }
        65% {
            transform: rotateZ(-10deg);
        }
    }
</style>
