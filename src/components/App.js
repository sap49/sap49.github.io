import React from "react";
import {Route, Routes} from "react-router-dom";
import SignUp from "./account/SignUp";
import Home from "./home/Home";
import {AuthContextProvider} from "../context/AuthContext";
import ProtectedRoute from "./security/ProtectedRoute";
import FAQ from "./faq/FAQ";
import TravelAcc from "./travelacc/TravelAcc";
import WedParty from "./wedparty/WedParty";
import Story from "./story/Story";
import Festivities from "./festivities/Festivities";
import RSVP from "./rsvp/RSVP";

function App() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route path="/"
                       element={
                           <ProtectedRoute>
                               <Home/>
                           </ProtectedRoute>
                       }
                />
                { /*<Route path="/signup" element={<SignUp/>}/>*/}
                <Route path="/home"
                       element={
                           <ProtectedRoute>
                               <Home/>
                           </ProtectedRoute>
                       }
                />
                <Route path="/faq"
                       element={
                           <ProtectedRoute>
                               <FAQ/>
                           </ProtectedRoute>
                       }
                />
                <Route path="/travelacc"
                       element={
                           <ProtectedRoute>
                               <TravelAcc/>
                           </ProtectedRoute>
                       }
                />
                <Route path="/wedparty"
                       element={
                           <ProtectedRoute>
                               <WedParty/>
                           </ProtectedRoute>
                       }
                />
                <Route path="/story"
                       element={
                           <ProtectedRoute>
                               <Story/>
                           </ProtectedRoute>
                       }
                />
                <Route path="/festivities"
                       element={
                           <ProtectedRoute>
                               <Festivities/>
                           </ProtectedRoute>
                       }
                />
                <Route path="/rsvp"
                       element={
                           <ProtectedRoute>
                               <RSVP/>
                           </ProtectedRoute>
                       }
                />
                {
                    /*<Route path="/registry"
                           element={
                               <ProtectedRoute>
                                   <Registry/>
                               </ProtectedRoute>
                           }
                    />*/
                }
            </Routes>
        </AuthContextProvider>
    )
}

export default App;
