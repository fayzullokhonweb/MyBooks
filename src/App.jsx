// pages
import { Home, About, Create, Contact, Login, Signup } from "./pages";

// components
import { BooksList, ProtectedRoutes } from "./components";

// context
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/globalContext";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";

// action
import { action as SignUpAction } from "./pages/Signup";
import { action as LoginAction } from "./pages/Login";

// react-router-dom
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// layout
import MainLayout from "./layout/MainLayout";

function App() {
  const { user, dispatch, authReady } = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "create",
          element: <Create />,
        },
        {
          path: "books",
          element: <BooksList />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
      action: SignUpAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      dispatch({ type: "LOG_IN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });
  }, []);

  return <RouterProvider router={routes} />;
}

export default App;
