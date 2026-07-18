<script>
  let { title = '', icon = '' } = $props();
</script>

<h2 class="section-heading d-flex align-items-center gap-2">
  {#if icon}
    <i class="bi {icon}"></i>
  {/if}
  {title}
</h2>
