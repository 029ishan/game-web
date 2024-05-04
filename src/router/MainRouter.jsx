import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";

import Detail from "../Componets/Detail";
import Login from "../Componets/user/Login";
import SignUp from "../Componets/user/SignUp";
import About from "../Componets/detail/About";
import Contact from "../Componets/detail/Contact";

import PaymentMethod from "../Componets/user/PaymentMethod";




export const MainRouter = createBrowserRouter(
    createRoutesFromElements(

        <Route>
            <Route path="/" element={<App />}>

               
            </Route>
            <Route path="/detail" element={<Detail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<PaymentMethod />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Route>
    )
)