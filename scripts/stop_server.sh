#!/bin/bash
echo "Checking for PM2 process to stop..."
if pm2 list | grep -q "expressit"; then
    echo "Stopping and deleting PM2 process 'expressit'..."
    pm2 stop expressit
    pm2 delete expressit
    pm2 save || true # Save PM2 configuration after deleting
    echo "Application stopped."
else
    echo "PM2 process 'expressit' not found or not running. Nothing to stop."
fi