#!/usr/bin/env bash
npm run dist
scp -r ./dist root@10.112.5.65:/home/work/data/www.gomecloud.com/
scp -r ./dist root@10.112.5.63:/home/work/data/www.gomecloud.com/
