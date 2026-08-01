#!/bin/bash
echo "Starting Backend and Frontend servers..."
npx -y concurrently -k -p "[{name}]" -n "Backend,Frontend" -c "bgBlue.bold,bgGreen.bold" \
  "cd backend && npm run dev" \
  "cd frontend && npm run dev"
