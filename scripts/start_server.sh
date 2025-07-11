#!/bin/bash
echo "Navigating to backend deployment directory..."
cd /home/ubuntu/expressit/backend # REPLACE 'expressit' with your chosen app name

echo "Checking for PM2 global installation..."
if ! command -v pm2 &> /dev/null; then
    echo "PM2 not found, installing globally..."
    npm install pm2 -g
fi

echo "Starting Node.js application with PM2..."
# Start the Node.js application using PM2
pm2 start ecosystem.config.js --env production --name expressit
pm2 save # Save the PM2 process list so it restarts on reboot

echo "Application start script finished."