import Homepage from "../pages/Homepage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const publicRoute = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/signin",
    component: Signin,
  },
  {
    path: "/signup",
    component: Signup,
  },
];

const privateRoute = [];

export { privateRoute, publicRoute };
