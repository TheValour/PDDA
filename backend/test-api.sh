#!/bin/bash

echo "=== Testing PDA Backend API ==="
echo

echo "1. Testing Root Endpoint:"
curl -s http://localhost:3000/ | python3 -m json.tool
echo

echo "2. Testing Ports List:"
curl -s http://localhost:3000/api/ports | python3 -m json.tool | head -20
echo

echo "3. Testing Specific Port (INNSA - Mumbai):"
curl -s http://localhost:3000/api/ports/INNSA | python3 -m json.tool
echo

echo "4. Testing Vessel Types:"
curl -s http://localhost:3000/api/vessel-types | python3 -m json.tool
echo

echo "5. Testing Cargo Types:"
curl -s http://localhost:3000/api/cargo-types | python3 -m json.tool
echo

echo "6. Testing Berth Types:"
curl -s http://localhost:3000/api/berth-types | python3 -m json.tool
echo

echo "=== API Testing Complete ==="
