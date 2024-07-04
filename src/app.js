import React from "react"
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Cart from "./components/Cart";
import ContactUs from "./components/ContactUs";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout=()=>{
    return <div className="app">
        <Header/>
        <Outlet/>
        
    </div>
    
}
const appRouter = createBrowserRouter ([{
    path:"/", 
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [ {
        path:"/", 
        element: <Body/>
    },{
        path:"/about", 
        element: <About/>
    },
    {
        path:"/ContactUs", 
        element: <ContactUs/>
    },{
        path:"/Cart", 
        element: <Cart/>
    },{
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
    }
]}])

const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)



