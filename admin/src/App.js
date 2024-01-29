import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./pages/PrivateRoute";
import PublicRoute from "./pages/PublicRoute";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import CasesPage from "./pages/cases";
import AddCasePage from "./pages/cases/AddCase";
import EditCasePage from "./pages/cases/EditCase";
import Services from "./pages/services";
import AddService from "./pages/services/AddService";
import EditServicePage from "./pages/services/EditService";
import TeamMembersPage from "./pages/teamMembers";
import AddTeamMemberPage from "./pages/teamMembers/AddTeamMember";
import EditTeamMemberPage from "./pages/teamMembers/EditTeamMember";

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
        <Route
          path="/services"
          element={
            <PrivateRoute>
              <Services />
            </PrivateRoute>
          }
        />
        <Route
          path="/services/add-service"
          element={
            <PrivateRoute>
              <AddService />
            </PrivateRoute>
          }
        />
        <Route
          path="/services/edit-service/:id"
          element={
            <PrivateRoute>
              <EditServicePage />
            </PrivateRoute>
          }
        />

        {/* cases */}
        <Route
          path="/cases"
          element={
            <PrivateRoute>
              <CasesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cases/add-case"
          element={
            <PrivateRoute>
              <AddCasePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cases/edit-case/:id"
          element={
            <PrivateRoute>
              <EditCasePage />
            </PrivateRoute>
          }
        />

        {/* team members */}
        <Route
          path="/team-members"
          element={
            <PrivateRoute>
              <TeamMembersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/team-members/add-member"
          element={
            <PrivateRoute>
              <AddTeamMemberPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/team-members/edit-member/:id"
          element={
            <PrivateRoute>
              <EditTeamMemberPage />
            </PrivateRoute>
          }
        />

        {/* campaign */}
        {/* <Route
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
        /> */}

        {/* forms */}
        {/* <Route
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
    /> */}
      </Routes>
    </>
  );
}

export default App;
