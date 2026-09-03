#!/usr/bin/env bash
set -u

current_date=$(date)
host_name=$(hostname)
user_name=$(whoami)
output_dir="system-info"
process_file="$output_dir/processes.txt"

echo "Current date: $current_date"
echo "Hostname: $host_name"
echo "Username: $user_name"
echo "Disk usage:"
df -h
echo "Running processes:"
ps

read -r -p "Enter your name: " name
echo "Hello, $name"

mkdir -p "$output_dir"
touch "$process_file"
ps aux > "$process_file"
echo "Full process list saved to $process_file"
