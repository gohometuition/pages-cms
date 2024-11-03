<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <section class="py-12 text-center">
      <h1 class="text-4xl font-bold mb-4">
        Find Your Perfect Tutor
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Expert home tutoring services for all subjects and levels
      </p>
      <div class="flex gap-4 justify-center">
        <a 
          href="/request-tutor" 
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Find a Tutor
        </a>
        <a 
          href="/become-tutor" 
          class="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50"
        >
          Become a Tutor
        </a>
      </div>
    </section>

    <!-- Rest of your sections -->
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
