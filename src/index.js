import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// fpr the routes 
import {BrowserRouter,createBrowserRouter,Route, RouterProvider} from 'react-router-dom';
// the pages
import Index from './pages/index';


// creating the browser router
const router=createBrowserRouter([
  {
    path:'/',
    element:<Index/>
  },
  {
    path:'/index',
    element: <Index/>
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // to run not only the app but other pages too
  <RouterProvider router={router}/>
);
