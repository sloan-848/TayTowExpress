#/bin/bash
cd ~/taylortower.org/public/
git fetch --all
git reset --hard origin/master
rm LICENSE
rm README.md
