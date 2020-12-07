# MongoDB    

Question I met: cannot start mongod (mongo server) becuase the permission setting on /var/lib/mongodb and /tmp/mongodb-27017.lock are wrong.    
Solution: You will have to change the owner to monogdb user.    
chown -R mongodb:mongodb /var/lib/mongodb     
chown mongodb:mongodb /tmp/mongodb-27017.sock     
