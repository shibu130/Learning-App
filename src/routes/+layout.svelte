<script>
  import '../app.css';
  import { onMount } from 'svelte';
  
  let { children } = $props();
  
  onMount(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  });
</script>

<div class="min-vh-100 d-flex flex-column">
  <nav class="navbar navbar-expand-lg navbar-dark shadow-sm" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <div class="container">
      <a href="/" class="navbar-brand d-flex align-items-center gap-2">
        <i class="bi bi-book-half fs-4"></i>
        <span class="fw-bold">Kannada Learning</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a href="/" class="nav-link"><i class="bi bi-house-door me-1"></i>Home</a></li>
          <li class="nav-item"><a href="/alphabet" class="nav-link"><i class="bi bi-fonts me-1"></i>Alphabet</a></li>
          <li class="nav-item"><a href="/settings" class="nav-link"><i class="bi bi-gear me-1"></i>Settings</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container py-4 flex-grow-1">
    {@render children()}
  </main>

  <footer class="bg-light border-top py-3 mt-auto">
    <div class="container text-center text-muted small">
      <p class="mb-0">Kannada Learning App &copy; 2026</p>
    </div>
  </footer>
</div>

<svelte:head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
</svelte:head>