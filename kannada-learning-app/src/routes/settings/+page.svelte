<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
  import { isSpeechSupported, stop } from '$lib/services/speechService.js';
  import { clearCache } from '$lib/services/datasetService.js';

  let speechSupported = $state(true);
  let audioRate = $state(0.85);
  let pitch = $state(1.0);

  function handleRateChange(e) {
    audioRate = parseFloat(e.target.value);
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      stop();
    }
  }

  function handleClearCache() {
    clearCache();
    alert('Cache cleared. Data will be reloaded on next navigation.');
  }

  function testSpeech() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const u = new SpeechSynthesisUtterance('ನಮಸ್ಕಾರ');
      u.lang = 'kn-IN';
      u.rate = audioRate;
      u.pitch = pitch;
      window.speechSynthesis.speak(u);
    }
  }
</script>

<PageHeader title="Settings" subtitle="Customize your learning experience" />

<div class="row g-4">
  <div class="col-lg-8">
    <div class="card border-0 shadow-sm rounded-4 mb-4">
      <div class="card-body p-4">
        <h5 class="fw-bold mb-4">
          <i class="bi bi-volume-up text-primary me-2"></i>Speech Settings
        </h5>
        
        {#if !speechSupported}
          <div class="alert alert-warning">
            <i class="bi bi-exclamation-triangle me-2"></i>
            Text-to-Speech is not supported in your browser. Please use a modern browser like Chrome, Edge, or Safari.
          </div>
        {/if}

        <div class="mb-3">
          <label class="form-label fw-medium" for="speech-rate">Speech Rate: <span class="text-primary">{audioRate.toFixed(2)}</span></label>
          <input id="speech-rate" type="range" class="form-range" min="0.5" max="2" step="0.05" value={audioRate} oninput={handleRateChange} />
          <div class="d-flex justify-content-between small text-muted">
            <span>Slow</span>
            <span>Fast</span>
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label fw-medium" for="speech-pitch">Pitch: <span class="text-primary">{pitch.toFixed(2)}</span></label>
          <input id="speech-pitch" type="range" class="form-range" min="0.5" max="2" step="0.1" bind:value={pitch} />
          <div class="d-flex justify-content-between small text-muted">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>

        <button class="btn btn-primary" onclick={testSpeech}>
          <i class="bi bi-play-circle me-2"></i>Test Speech
        </button>
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
      <div class="card-body p-4">
        <h5 class="fw-bold mb-4">
          <i class="bi bi-database text-primary me-2"></i>Data Management
        </h5>
        <button class="btn btn-outline-danger" onclick={handleClearCache}>
          <i class="bi bi-arrow-clockwise me-2"></i>Clear Cache & Reload Data
        </button>
        <p class="text-muted small mt-2 mb-0">Clears the app cache and forces fresh data loading from the server.</p>
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4">
      <div class="card-body p-4">
        <h5 class="fw-bold mb-4">
          <i class="bi bi-info-circle text-primary me-2"></i>About
        </h5>
        <p class="mb-1"><strong>Kannada Learning App</strong> v1.0.0</p>
        <p class="text-muted small mb-0">Built with SvelteKit &amp; Bootstrap 5. Uses the browser's Web Speech API for pronunciation. Dataset: Phase 1 (Kannada Writing System).</p>
      </div>
    </div>
  </div>

  <div class="col-lg-4">
    <div class="card border-0 shadow-sm rounded-4" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
      <div class="card-body p-4 text-center">
        <i class="bi bi-book-half fs-1 mb-3 d-block"></i>
        <h5 class="fw-bold">Quick Tips</h5>
        <ul class="list-unstyled small text-start mt-3">
          <li class="mb-2"><i class="bi bi-check-circle me-2"></i>Click any card to hear pronunciation</li>
          <li class="mb-2"><i class="bi bi-check-circle me-2"></i>Use the search bar to find letters</li>
          <li class="mb-2"><i class="bi bi-check-circle me-2"></i>Adjust speech rate for clarity</li>
          <li class="mb-2"><i class="bi bi-check-circle me-2"></i>Cards highlight when selected</li>
        </ul>
      </div>
    </div>
  </div>
</div>