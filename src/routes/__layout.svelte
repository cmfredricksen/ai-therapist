<script>
    import "../global.css"
    import Header from "../lib/header.svelte";
    import Footer from "../lib/footer.svelte";
</script>


<div class="wrapper">

    <div class="left-column">
        <Header />
    </div>

    <div class="right-column">
        <slot />
        <Footer />
    </div>

</div>


<style>
    .wrapper {
        width: 98%;
        margin: 0 auto;
        display: flex;
    }
    
    .left-column {
        padding: 1rem;
        background-color: #111;
        width: 25%;
    }

    .right-column {
        width: 75%;
    }
</style>