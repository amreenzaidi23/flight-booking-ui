# flight-booking-system

Spring book project setup and execution:-
(used Eclipse)

application.properties:-
Provide database connection , username and password.
First time replace "none" with "create" in below line:
spring.jpa.hibernate.ddl-auto=none

In case of any change go to project directory and run below commands to build and run project:-
Build project
	mvn clean install
Run project
	java -jar target/flight-booking-0.0.1-SNAPSHOT.jar


Angular project build and execution:-
(used Visual Studio)

Go to project directory and run below commands:-
Create node-module
>npm install 

Create dist folder
>npm run ng build

Run project using below command
>npm run ng serve

Go to browser and see the project
http://localhost:4200

Note: Springboot port is http://localhost:8080 which will be called from angular.
Here we are maintaining 2 different ports and have not created proxy for springboot.

If we want we can set up a proxy in angular app - this will forward the request from angular port 4200  to the spring boot port 8080
•	In the proxy.conf.json
    	Any requests coming with /server  will be forwarded to the port mentioned in the target in line#3 of file
•	In package.json
	Add this line  	"start": "ng serve --proxy-config proxy.conf.json"




