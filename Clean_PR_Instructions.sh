#!/bin/bash
# Command used by Dirk to sync this repository with Tasmia's 
git checkout -b pr-clean
git checkout upstream/main -- _config.yml
git commit -am "Revert _config.yml to match upstream for clean PR"
git push origin pr-clean
git checkout main
