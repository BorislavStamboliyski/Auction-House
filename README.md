# Online Auction House
This project is an online platform that allows users to buy and sell items through an auction system. The platform facilitates the bidding process.

# Project Architecture
The online auction house is built using a client-server architecture. The client is the user-facing application that runs on a web browser, while the server is the backend that manages the auction process.

The aplication is built using ReactJS as Front-End. It provides a user-friendly interface for buyers and sellers to interact with the auction house. The frontend communicates with the backend through a RESTful API, which enables the client to request data from the server and receive responses in JSON format.

For the Back-end it is used a practice server, which is managing auctions, bids and users.


# Running the application
First you need to open in Command Prompt or in VScode in seperate terminal the folder server and need to start it:
### `node server.js`. 
This will start server on port: 3030.[http://localhost:3030]

Then you need to open folder client in VScode and start the application by running the command :
### `npm i` ,
so all the required packages will be dowloaded and then:
### `npm start`.
It will start the appliction and open a new tab in the browser on [http://localhost:3000].

# About the application
The application have implementation for Authentication and once user is registerd hw is aoutomatically  logged in.When the user is authenticated, he can publish his own auctions. If the user is owner of the auction he can also Edit it, if there is no bids. He can also close the auction, which will delete it from the server. However if the user is not owner of the action he has a button for bid where he can make a bid for the specific auction. Users which are not logged in can see only the basic details for the auction, they cannot make bids or even to see who is the current highest bid. Also they don't have permission to publish auctions.
