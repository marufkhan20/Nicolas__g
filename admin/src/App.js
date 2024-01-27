import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./pages/PrivateRoute";
import PublicRoute from "./pages/PublicRoute";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import CreditCards from "./pages/campaign/CreditCards";
import CreditCardSinglePage from "./pages/campaign/CreditCards/CreditCard";
import Notices from "./pages/campaign/Notices";
import NoticeSinglePage from "./pages/campaign/Notices/Notice";
import FormCreditCards from "./pages/forms/CreditCards";
import AddCreditCardPage from "./pages/forms/CreditCards/AddCreditCard";
import EditCreditCardPage from "./pages/forms/CreditCards/EditCreditCard";
import FormNotices from "./pages/forms/Notices";
import AddNoticePage from "./pages/forms/Notices/AddNotice";
import EditNoticePage from "./pages/forms/Notices/EditNotice";
import AddService from "./pages/services/AddService";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/auth/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/sign-up"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />

        {/* services */}
        <Route path="/services/add-service" element={<AddService />} />

        {/* campaign */}
        <Route
          path="/campaign/credit-card"
          element={
            <PrivateRoute>
              <CreditCards />
            </PrivateRoute>
          }
        />
        <Route
          path="/campaign/credit-card/:id"
          element={
            <PrivateRoute>
              <CreditCardSinglePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/campaign/notice"
          element={
            <PrivateRoute>
              <Notices />
            </PrivateRoute>
          }
        />
        <Route
          path="/campaign/notice/:id"
          element={
            <PrivateRoute>
              <NoticeSinglePage />
            </PrivateRoute>
          }
        />

        {/* forms */}
        <Route
          path="/forms/credit-card"
          element={
            <PrivateRoute>
              <FormCreditCards />
            </PrivateRoute>
          }
        />
        <Route
          path="/forms/credit-card/add-credit-card"
          element={
            <PrivateRoute>
              <AddCreditCardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/forms/credit-card/edit-credit-card/:id"
          element={
            <PrivateRoute>
              <EditCreditCardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/forms/notice"
          element={
            <PrivateRoute>
              <FormNotices />
            </PrivateRoute>
          }
        />
        <Route
          path="/forms/notice/add-notice"
          element={
            <PrivateRoute>
              <AddNoticePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/forms/notice/edit-notice/:id"
          element={
            <PrivateRoute>
              <EditNoticePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
