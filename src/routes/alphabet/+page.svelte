<script>
  import { onMount } from 'svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import AlphabetCard from '$lib/components/AlphabetCard.svelte';
  import SearchBar from '$lib/components/SearchBar.svelte';
  import { getAllLetters, search } from '$lib/services/datasetService.js';
  import { speak } from '$lib/services/speechService.js';

  let sections = $state([]);
  let loading = $state(true);
  let error = $state('');
  let searchResults = $state([]);
  let isSearching = $state(false);
  let selectedId = $state(null);

  onMount(async () => {
    try {
      sections = await getAllLetters();
    } catch (err) {
      error = 'Failed to load alphabet data. Please ensure the dataset files exist.';
      console.error(err);
    } finally {
      loading = false;
    }
  });

  const sectionIcons = {
    vowels: 'bi-mic',
    consonants: 'bi-blockquote-left',
    vowelCombinations: 'bi-link-45deg',
    conjuncts: 'bi-intersect',
    numbers: 'bi-123'
  };

  function handleCardSelect(text) {
    speak(text);
  }

  function handleSearchResults(results) {
    searchResults = results;
    isSearching = results.length > 0;
  }
</script>

<PageHeader title="Kannada Alphabet" subtitle="Explore the complete Kannada writing system" />

<SearchBar onResults={handleSearchResults} />

{#if loading}
  <div class="text-center py-5">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <p class="mt-2 text-muted">Loading alphabet data...</p>
  </div>
{:else if error}
  <div class="alert alert-warning d-flex align-items-center gap-2" role="alert">
    <i class="bi bi-exclamation-triangle-fill"></i>
    <div>{error}</div>
  </div>
{/if}

<!-- Search Results -->
{#if isSearching}
  <div class="mb-4">
    <SectionHeader title="Search Results" icon="bi-search" />
    <div class="row g-3">
      {#each searchResults as item}
        <div class="col-6 col-md-4 col-lg-2">
          <AlphabetCard
            letter={item.letter || item.number}
            roman={item.roman}
            tts={item.tts || item.letter || item.number}
            selected={selectedId === item.id}
            onSelect={() => { selectedId = item.id; handleCardSelect(item.tts || item.letter || item.number); }}
          />
        </div>
      {/each}
    </div>
  </div>
{/if}

<!-- Alphabet Sections -->
{#each sections as section}
  <div class="mb-5">
    <SectionHeader title={section.title} icon={sectionIcons[section.section] || 'bi-book'} />
    
    {#if section.data.length === 0}
      <p class="text-muted">No data available for this section.</p>
    {:else}
      <div class="row g-3">
        {#each section.data as item}
          <div class="col-6 col-md-4 col-lg-2">
            <AlphabetCard
              letter={item.letter || item.number}
              roman={item.roman}
              tts={item.tts || item.letter || item.number}
              selected={selectedId === item.id}
              onSelect={() => { selectedId = item.id; handleCardSelect(item.tts || item.letter || item.number); }}
            />
          </div>
        {/each}
      </div>
    {/if}
  </div>
{/each}