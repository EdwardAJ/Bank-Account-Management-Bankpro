echo 'Fetch user...'
whoami
echo 'Curdir..'
ls
echo 'DIR?'
ls /home/ubuntu/bank-pro
cd /home/ubuntu/bank-pro
git stash
git checkout feature-Test
git pull origin feature-Test
echo 'Deleting screen...'
screen -X -S bank-pro quit
sudo npm install
sudo chown ubuntu node_modules
sudo chgrp ubuntu node_modules
echo 'Create executable...'
sudo npm run build
sudo npm install -g serve
echo 'Entering screen...'
screen -d -m -S wsbank serve -s build