<script>
  import { search } from '$lib/services/datasetService.js';
  
  let { onResults = () => {} } = $props();
  let query = $state('');
  let results = $state([]);
  let isSearching = $state(false);
  
  async function handleInput(e) {
    query = e.target.value;
    if (query.trim().length === 0) {
      results = [];
      onResults([]);
      return;
    }
    isSearching = true;
    try {
      results = await search(query);
      onResults(results);
    } catch (err) {
      console.error('Search failed:', err);
    } finally {
      isSearching = false;
    }
  }
  
  function clearSearch() {
    query = '';
    results = [];
    onResults([]);
  }
</script>

<div class="position-relative mb-4">
  <div class="input-group">
    <span class="input-group-text bg-white border-end-0">
      <i class="bi bi-search text-muted"></i>
    </span>
    <input
      type="text"
      class="form-control border-start-0 ps-0"
      placeholder="Search by Kannada letter, Roman transliteration, or meaning..."
      value={query}
      oninput={handleInput}
      aria-label="Search"
    />
    {#if query}
      <button class="btn btn-outline-secondary" onclick={clearSearch} aria-label="Clear search">
        <i class="bi bi-x"></i>
      </button>
    {/if}
  </div>
  {#if isSearching}
    <div class="position-absolute end-0 top-50 translate-middle-y me-5">
      <div class="spinner-border spinner-border-sm text-primary" role="status">
        <span class="visually-hidden">Searching...</span>
      </div>
    </div>
  {/if}
</div>
