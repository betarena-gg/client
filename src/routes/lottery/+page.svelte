<script>
  import Main from "$lib/pages/lottory/main/index.svelte"
  import Mobile from "$lib/pages/lottory/mobile/index.svelte"
  import "../../styles/lottery/mobile/index.css"
  import "../../styles/lottery/lottery.css"
//   import "../../styles/lottery/mobile/history.css"
  import "../../styles/lottery/mobile/rules.css"
  import "../../styles/lottery/mobile/instructions.css"
  import "../../styles/lottery/mobile/guides.css"

  let loooo = true

</script>

{#if loooo}
  <div class="sc-lhMiDA ePAxUv">
    <div class="sc-eCImPb cuPxwd empty full-abs">
        <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" alt="">
        <div class="msg">lottery Game is pending! </div>
    </div>
  </div>
  {:else}
  <div>
    <div class="lottery-page">
        <Main  />
    </div>
    <div class="lottery-mobile">
        <Mobile />
    </div>
</div>
{/if}



<style>
   
</style>