#!/bin/bash
#
# This script generates the types from pocketbase

print_usage() {
    echo "Usage:" 
    echo "  --url <url-to-pocketbase>"
    echo "  --output <output-file> (default: ./src/@types/pocketbase-types.ts)"
    echo "  --email <email> (default: none)"
    echo "  --password <password> (default: none)"
}

if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    print_usage
    exit 1
fi

if [ $# -lt 4 ]; then
    echo "Not enough arguments supplied"
    print_usage
    exit 1
fi
