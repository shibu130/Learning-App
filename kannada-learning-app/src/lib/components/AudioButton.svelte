<script>
  import { speak } from '$lib/services/speechService.js';
  
  let { text = '' } = $props();
  let playing = $state(false);

  async function handleClick(event) {
    debugger
    event.stopPropagation();
    if (playing) return;
    playing = true;
    await speak(text);
    playing = false;
  }
</script>


<button
  class="btn btn-sm btn-outline-secondary rounded-circle audio-btn"
  onclick={handleClick}
  disabled={playing}
  title="Play pronunciation"
>
  {#if playing}
    <i class="bi bi-volume-up-fill"></i>
  {:else}
    <i class="bi bi-volume-up"></i>
  {/if}
</button>

<style>
  .audio-btn {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }
  .audio-btn:hover {
    background-color: var(--bs-primary);
    color: white;
    border-color: var(--bs-primary);
  }
  .audio-btn:disabled {
    opacity: 1;
    background-color: var(--bs-primary);
    color: white;
    border-color: var(--bs-primary);
  }
</style>