<script>
    import MainPage from "$lib/pages/affiliate/main/index.svelte"
    import Mobile from "$lib/pages/affiliate/mobile/index.svelte"
    import '../../styles/affilate/main/index.css'
    import '../../styles/affilate/mobile/index.css'
    let rioo = true
</script>

<div>
    {#if rioo}
    <div class="sc-lhMiDA ePAxUv">
        <div class="sc-eCImPb cuPxwd empty full-abs">
            <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" alt="">
            <div class="msg">affilate page is not ready yet </div>
        </div>
    </div>
    {:else}
        <div class="casino-page">
            <MainPage />
        </div>
        <div class="affiliate-page">
                <Mobile />
        </div>
    {/if}

</div>
