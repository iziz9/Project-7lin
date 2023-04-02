import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Groups from "../pages/groups/Groups";
import Login from "../pages/login/Login";
import MainPage from "../pages/main/MainPage";
import Review from "./../pages/review/Review";
import ReviewItem from "../pages/review/ReviewItems";
import ReviewDetail from "./../pages/review-detail/ReviewDetail";
import Notice from "../pages/notice/Notice";
import TripTest from "../pages/trip-test/TripTest";
import TestResult from "../pages/trip-test/TestResult";
import SignupType from "../pages/signup/SignupType";
import SignupSite from "../pages/signup/SignupSite";
import Reservation from "../pages/reservation/Reservation";
import MyPage from "../pages/mypage/MyPage";
import MyReservation from "../pages/mypage/MyReservation";
import Favor from "../pages/mypage/Favor";
import Point from "../pages/mypage/Point";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "review",
        element: <Review />,
      },
      {
        path: "review/:id",
        element: <ReviewDetail />,
      },
      { path: "groups", element: <Groups /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup_type",
        element: <SignupType />,
      },
      {
        path: "/signup_site",
        element: <SignupSite />,
      },
      {
        path: "/test",
        element: <TripTest />,
      },
      {
        //임시
        path: "/test-result",
        element: <TestResult />,
      },
      {
        path: "notice",
        element: <Notice />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
        children: [
          {
            path: "",
            element: <MyReservation />,
          },
          {
            path: "reservation",
            element: <MyReservation />,
          },
          {
            path: "favor",
            element: <Favor />,
          },
          {
            path: "point",
            element: <Point />,
          },
        ],
      },
    ],
  },
]);

export default router;
