#/bin/bash
cd ~/taylortower.org/public/
git fetch --all
git reset --hard origin/master
# Remove non-retrievable files
rm LICENSE
rm README.md
# Reset ownership of logs
chown ubuntu ~/taylortower.org/public/data/DVD_Log.csv
