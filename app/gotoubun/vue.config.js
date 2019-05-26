module.exports = {
  pwa: {
    workboxOptions: {
      // Exclude from the precache
      exclude: [/\.(?:png|jpg|jpeg|svg|json)$/],

      // Define runtime caching rules.
      runtimeCaching: [
        {
          urlPattern: /data\/.*\.json$/,
          handler: 'networkFirst',
          options: {
            cacheName: 'datajson',
            expiration: {
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
        {
          urlPattern: /\.(?:json)$/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'json',
            expiration: {
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
        {
          // Match any request ends with .png, .jpg, .jpeg or .svg.
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
          // Apply a cache-first strategy.
          handler: 'cacheFirst',
          options: {
            // Use a custom cache name.
            cacheName: 'images',
            // Only cache 30 days.
            expiration: {
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
      ],
    }
  }
}
