// TODO: Run react in strict mode by wrapping the application in <React.StrictMode>
// TODO: Install react developer tools https://react.dev/learn/react-developer-tools

// When developing my UI, think about it in "states" instead of I need to show X button when Y is clicked.
// This way I create React functions for each of these states which contain the UI components that are needed for that state.
// E.g. In here https://react.dev/learn/reacting-to-input-with-state

/*
TODO
-- Implement bootstrap in the app. Learn it and start with navbar
1. Look into how to use routing to create a single page application and then update the navbar so it works with this
1. Create a UI of the website
 - Register/login
 - Home page 
  - For looged in users, they can see upcoming bookins
  - For logged out users, they can see a list of vehicles
 - Past orders
  - Cancel orders
 - Make an order
2. Once I have the UI, make connections to the backend to pull data
3. Make sure UI works as is (e.g. refreshing seems to refresh the state)
4. Start adding functionality to the UI (e.g. booking a vehicle)

Use bootstrap for the UI styling
*/

import { React, StrictMode, useState } from 'react';

import { createRoot } from 'react-dom/client';

// Import routing components so the single page application knows which links map to which JS component
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Layout from './layouts'; // Only use {} when importing from a file with multiple exports

import Routes from './routes/index';

import  Page404  from './404';

const root = createRoot(document.getElementById('app'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


export default function App(){

 // initialize a browser router
 const router = createBrowserRouter([
  {
  // parent route component
  element: <Layout />,
  // 404 route component in case the page cannot be found
  errorElement: <Page404 />,
  // child route components
  children: Routes
  }
])

return (
    <RouterProvider router={router} />
)
}