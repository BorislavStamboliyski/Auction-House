import { About } from "./components/About/About";
import { Contacts } from "./components/Contacts/Contacts";
import { Home } from "./components/Home/Home";
import { Route, Routes } from 'react-router-dom';
import { Register } from './components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Auctions } from "./components/Auctions/Auctions";
import { Login } from "./components/Login/Login"
import { AuctionDetails } from "./components/AuctionDetails/AuctionDetails";
import { CreateAuction } from "./components/CreateAuction/CreateAuction";

import { UserProvider } from "./contexts/userContext";

import { EditAuction } from "./components/EditAuction/EditAucttion";
import { CloseAuction } from "./components/CloseAuction/CloseAuction";

function App() {



    return (

        <UserProvider>
            <div className="App">

                <Routes>
                    <Route path="/" element={< Home />} />
                    <Route path="/about" element={< About />} />
                    <Route path="/contacts" element={< Contacts />} />
                    <Route path="/auctions" element={< Auctions />} />
                    <Route path="/auctions/create" element={< CreateAuction />} />
                    <Route path="/auctions/:auctionId" element={< AuctionDetails />} />
                    <Route path="/auctions/edit/:auctionId" element={< EditAuction />} />
                    <Route path="/auctions/close/:auctionId" element={< CloseAuction />} />
                    <Route path="/register" element={< Register />} />
                    <Route path="/login" element={<Login />} />

                </Routes>


            </div>
        </UserProvider>
    );
}

export default App;
