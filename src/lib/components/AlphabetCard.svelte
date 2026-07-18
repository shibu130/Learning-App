<script>
  import AudioButton from './AudioButton.svelte';
  
  let { letter = '', roman = '', tts = '', selected = false, onSelect = () => {} } = $props();
  
  let playing = $state(false);
  let isSelected = $state(false);
  
  function handleClick() {
    isSelected = !isSelected;
    playing = true;
    onSelect(tts || letter);
    setTimeout(() => { playing = false; }, 300);
  }
</script>

<button
  class="card card-hover text-center p-3 border-0 shadow-sm {isSelected ? 'selected' : ''} {playing ? 'playing' : ''}" 
  onclick={handleClick}
  style="min-height: 120px; border-radius: 12px;"
>
  <div class="kannada-text mb-1">{letter}</div>
  <div class="text-muted small mb-2" style="font-size: 0.85rem;">{roman}</div>
  <div class="d-flex justify-content-center">
    <AudioButton tts={tts || letter} size="small" />
  </div>
</button>

```