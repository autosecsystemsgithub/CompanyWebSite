client code
-----------

for production build

ng build (without aot) which will generate a 'dist' folder...copy content to webserver

ng build --prod 



server code
-------------


node emailer-imap.js

if not installed first install 'npm install forever -g'


forever start emailer-imap.js

forever stopall

forever list