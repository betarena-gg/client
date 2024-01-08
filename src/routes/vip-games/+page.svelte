<script>
    import Main from "$lib/pages/vip/main/index.svelte";
    import Mobile from "$lib/pages/vip/mobile/index.svelte";
    import "../../styles/vip/main/index.css"
    import "../../styles/vip/mobile/index.css"
    let vip = true
</script>

{#if vip}
<div class="sc-lhMiDA ePAxUv">
    <div class="sc-eCImPb cuPxwd empty full-abs">
        <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" alt="">
        <div class="msg">VIP management is not ready yet </div>
    </div>
</div>
{:else}
<div class="sc-lhMiDA ePAxUv">
    <div class="vip-main-page">
        <Main />
    </div>
    <div class="vip-mobile-page">
        <Mobile />
    </div>
</div>
{/if}



<style>
.vip-mobile-page{
    display: none;
}
</style>