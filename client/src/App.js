import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, Routes } from 'react-router-dom';

import { UserProvider } from "./contexts/userContext";

import { About } from "./components/About/About";
import { Contacts } from "./components/Contacts/Contacts";
import { Home } from "./components/Home/Home";
import { Register } from './components/Register/Register';
import { Auctions } from "./components/Auctions/Auctions";
import { Login } from "./components/Login/Login"
import { AuctionDetails } from "./components/AuctionDetails/AuctionDetails";
import { CreateAuction } from "./components/CreateAuction/CreateAuction";
import { EditAuction } from "./components/EditAuction/EditAucttion";
import { CloseAuction } from "./components/CloseAuction/CloseAuction";
import { RouteGuard } from './components/common/RouteGuard';
import { AuctionProvider } from './contexts/auctionContext';

function App() {



    return (

        <UserProvider>
            <AuctionProvider>
                <div className="App">
                    <Routes>
                        <Route path="/" element={< Home />} />
                        <Route path="/about" element={< About />} />
                        <Route path="/contacts" element={< Contacts />} />
                        <Route path="/auctions" element={< Auctions />} />
                        <Route path="/auctions/:auctionId" element={< AuctionDetails />} />
                        <Route element={<RouteGuard />}>
                            <Route path="/auctions/create" element={< CreateAuction />} />
                            <Route path="/auctions/edit/:auctionId" element={< EditAuction />} />
                            <Route path="/auctions/close/:auctionId" element={< CloseAuction />} />
                        </Route>
                        <Route path="/register" element={< Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </AuctionProvider>
        </UserProvider>
    );
}

export default App;
