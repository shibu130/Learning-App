<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<PageHeader title="Learn Kannada" subtitle="Master the Kannada writing system through interactive lessons" />

<div class="row g-4 mt-2">
  <div class="col-md-6 col-lg-4">
    <a href="/alphabet" class="text-decoration-none">
      <div class="card home-card p-4 shadow-lg card-hover d-flex align-items-center justify-content-center text-center">
        <i class="bi bi-fonts home-card-icon"></i>
        <h4 class="fw-bold mb-2">Learn Alphabet</h4>
        <p class="mb-0 small opacity-75">Vowels, consonants, vowel signs, conjuncts &amp; numbers</p>
      </div>
    </a>
  </div>
  <div class="col-md-6 col-lg-4">
    <div class="card home-card p-4 shadow-lg d-flex align-items-center justify-content-center text-center" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); opacity: 0.7;">
      <i class="bi bi-pencil-square home-card-icon"></i>
      <h4 class="fw-bold mb-2">Practice</h4>
      <p class="mb-0 small opacity-75">Flashcards and exercises - Coming soon!</p>
    </div>
  </div>
  <div class="col-md-6 col-lg-4">
    <a href="/settings" class="text-decoration-none">
      <div class="card home-card p-4 shadow-lg card-hover d-flex align-items-center justify-content-center text-center" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
        <i class="bi bi-gear-wide-connected home-card-icon"></i>
        <h4 class="fw-bold mb-2">Settings</h4>
        <p class="mb-0 small opacity-75">Adjust preferences and speech options</p>
      </div>
    </a>
  </div>
</div>

<div class="row mt-5">
  <div class="col-12">
    <div class="card border-0 shadow-sm rounded-4 p-4 bg-white">
      <h5 class="fw-bold mb-3"><i class="bi bi-info-circle me-2 text-primary"></i>About This App</h5>
      <p class="text-muted mb-1">This app teaches the Kannada writing system (ಕನ್ನಡ ಲಿಪಿ). It includes all independent vowels, consonants, vowel sign combinations, common conjunct letters, and Kannada numerals.</p>
      <p class="text-muted mb-0">Data-driven architecture allows easy addition of vocabulary, grammar, and lessons in the future without code changes.</p>
    </div>
  </div>
</div>


