<script>
  let { title = '', subtitle = '', icon = '' } = $props();
</script>

<div class="mb-4">
  <div class="d-flex align-items-center gap-3 mb-2">
    {#if icon}
      <div class="rounded-circle p-3" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
        <i class="bi {icon} fs-4 text-white"></i>
      </div>
    {/if}
    <div>
      <h1 class="h3 mb-1 fw-bold">{title}</h1>
      {#if subtitle}
        <p class="text-muted mb-0">{subtitle}</p>
      {/if}
    </div>
  </div>
</div>