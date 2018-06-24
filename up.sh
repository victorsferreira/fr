npm install
npm run prd
sudo docker stop frontend
sudo docker rm frontend
sudo docker-compose build
sudo docker-compose up --force-recreate