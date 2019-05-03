module.exports = {
  pwa: {
    workboxOptions: {
      // Exclude images from the precache
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],

      // Define runtime caching rules.
      runtimeCaching: [{
        // Match any request ends with .png, .jpg, .jpeg or .svg.
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

        // Apply a cache-first strategy.
        handler: 'cacheFirst',

        options: {
          // Use a custom cache name.
          cacheName: 'images',

          // Only cache 10 images.
          expiration: {
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
        },
      }],
    }
  }
}
