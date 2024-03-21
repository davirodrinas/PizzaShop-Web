import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/dashboard";
import { SingIn } from "./pages/aut/sing-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SingUp } from "./pages/aut/sing-up";
import { Orders } from "./pages/app/orders/orders";


export const router = createBrowserRouter([
    {
        path: '/', 
        element: <AppLayout />,
        children: [
            {path: '/', element: <Dashboard /> },
            {path: '/orders', element: <Orders /> }

        ],
    },

    {
        path: '/', 
        element: <AuthLayout />,
        children: [
            {path: '/sing-in', element: <SingIn /> },
            {path: '/sing-up', element: <SingUp /> }
        ],
        }

])