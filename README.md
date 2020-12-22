# MongoDB    
Requirements and questions are in CS660 Labs (2020 Fall) - Lab 12 (PA5).pdf      

## Question I met: cannot start mongod (mongo server) becuase the permission setting on /var/lib/mongodb and /tmp/mongodb-27017.lock are wrong.    
Solution: You will have to change the owner to monogdb user.    
```
chown -R mongodb:mongodb /var/lib/mongodb     
chown mongodb:mongodb /tmp/mongodb-27017.sock     
```
from: https://www.digitalocean.com/community/questions/mongo-cant-start-service   

## Use mongodb shell   
sudo systemctl start mongod                         
sudo systemctl status mongod      
mongo    

## My own solution   
Q3,8,9 are not correct, check for solution pdf.   
