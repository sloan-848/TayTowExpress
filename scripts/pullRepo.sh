#/bin/bash
cd /var/www/taylortower.org/public/
git fetch --all
git reset --hard origin/master
# Remove non-retrievable files
rm LICENSE
rm README.md
# Reset ownership of logs
chown ubuntu:ubuntu /var/www/taylortower.org/public/data/DVD_Log.csv
