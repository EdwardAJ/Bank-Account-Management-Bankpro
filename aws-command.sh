echo 'Fetch user...'
whoami
echo 'Curdir..'
ls
echo 'DIR?'
ls /home/ubuntu/bank-pro
cd /home/ubuntu/bank-pro
sudo rm -rf *
git pull origin master
echo 'Deleting screen...'
screen -X -S bank-pro quit
sudo npm install
echo 'Create executable...'
sudo npm run build
sudo npm install -g serve
echo 'Entering screen...'
screen -d -m -S bank-pro serve -s build