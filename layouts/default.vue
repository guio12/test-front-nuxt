<template>
  <div class="mb-4">
    <AppHeader />
    <div class="container mx-auto row">
      <main class="col-12 col-lg-8">
        <slot />
      </main>
      <nav class="col-lg-4 sm:mt-2 mt-4 mt-lg-0">
        <MobileResult />
      </nav>
    </div>
  </div>
</template>
