# MongoDB    
Requirements and questions are in CS660 Labs (2020 Fall) - Lab 12 (PA5).pdf     

## Question I met: cannot start mongod (mongo server) becuase the permission setting on /var/lib/mongodb and /tmp/mongodb-27017.lock are wrong.    
Solution: You will have to change the owner to monogdb user.    
```
chown -R mongodb:mongodb /var/lib/mongodb     
chown mongodb:mongodb /tmp/mongodb-27017.sock     
```

## Use mongodb shell   
sudo systemctl start mongod                         
sudo systemctl status mongod      
mongo    
