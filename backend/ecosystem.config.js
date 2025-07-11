// backend/ecosystem.config.js
module.exports = {
  apps : [{
    name: "expressit", // IMPORTANT: Make sure this name matches the 'expressit' in the .sh scripts
    script: "index.js", // IMPORTANT: Change this to your main backend entry file (e.g., app.js, index.js)
    instances: "max", // Use max instances for all CPU cores
    exec_mode: "cluster", // Enable Node.js cluster mode for better performance
    watch: false, // Set to true if you want PM2 to watch for file changes and restart (usually false for production)
    max_memory_restart: "1G", // Restart if app memory exceeds 1GB
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 5000, // IMPORTANT: Change to your backend's listening port
      // Your application code will fetch MONGO_URI, JWT_SECRET from Parameter Store/Secrets Manager
      // No need to list them here directly, as your app code will fetch them
    }
  }]
};