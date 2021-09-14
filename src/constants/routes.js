import { lazy } from "react";

const HomePage = lazy(() => import("screens/Home"));
const Login = lazy(() => import("screens/Login"));
const Register = lazy(() => import("screens/Register"));
const ResetPassword = lazy(() => import("screens/ResetPassword"));
const Dashboard = lazy(() => import("screens/Dashboard"));
const CreateInvestment = lazy(() => import("screens/CreateInvestment"));
const Profile = lazy(() => import("screens/Profile"));
const Contact = lazy(() => import("screens/Contact"));
const AccountConfirmation = lazy(() => import("screens/AccountConfirmation"));

const routes = {
  HOME: {
    label: "Welcome",
    path: "/",
    component: HomePage,
    exact: true,
  },
  LOGIN: {
    label: "Login",
    path: "/login",
    component: Login,
    exact: true,
  },
  CREATE_INVESTMENT: {
    label: "Create Investment",
    path: "/create-investment",
    component: CreateInvestment,
    exact: true,
  },
  REGISTER: {
    label: "Register",
    path: "/register",
    component: Register,
    exact: true,
  },
  RESET_PASSWORD: {
    label: "Reset Password",
    path: "/password/reset/:token?",
    component: ResetPassword,
    exact: true,
  },
  CONTACT: {
    label: "Contact",
    path: "/contact",
    component: Contact,
    exact: true,
  },
  PROFILE: {
    label: "Profile",
    path: "/profile",
    component: Profile,
    exact: true,
  },
  DASHBOARD: {
    label: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    exact: true,
  },
  ACCOUNT_CONFIRMATION: {
    label: "Confirm account",
    path: "/confirm/:token",
    component: AccountConfirmation,
    exact: true,
  },
};

export default routes;
