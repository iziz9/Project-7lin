import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import MainPage from "../pages/main/MainPage";
import Review from "./../pages/review/Review";
import ReviewItem from "../pages/review/ReviewItems";
import ReviewDetail from "./../pages/review-detail/ReviewDetail";
import Notice from "../pages/notice/Notice";
import TripTest from "../pages/recommend/TripTestPage";
import SignupType from "../pages/signup/SignupType";
import SignupSite from "../pages/signup/SignupSite";
import ReviewWrite from "./../pages/review-write/ReviewWrite";
import ProductDetail from "./../pages/product-detail/ProductDetail";
import Reservation from "../pages/reservation/ReservationPage";
import MyPage from "../pages/mypage/MyPage";
import MyReservation from "../pages/mypage/MyReservation";
import Favor from "../pages/mypage/Favor";
import Point from "../pages/mypage/Point";
import PrivateRoute from "./PrivateRoute";
import RecommendPage from "../pages/recommend/RecommendPage";
import Search from "../pages/search/Search";
import Cart from "./../pages/cart/Cart";
import KakaoLogin from "../pages/sociallogin/KakaoLogin";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import NaverLogin from "../pages/sociallogin/NaverLogin";
import GoogleLogin from "../pages/sociallogin/GoogleLogin";
import Groups from "../pages/category/Groups";
import Themes from "../pages/category/Themes";
import Destination from "../pages/category/Destination";

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
      {
        path: "review/write",
        element: <ReviewWrite />,
      },
      {
        path: "groups",
        element: <Groups />,
        children: [{ path: ":id", element: <Groups /> }],
      },
      {
        path: "themes",
        element: <Themes />,
        children: [{ path: ":id", element: <Themes /> }],
      },
      {
        path: "destination",
        element: <Destination />,
        children: [{ path: ":id", element: <Destination /> }],
      },
      {
        path: "/login",
        element: (
          <PrivateRoute onlyAuth={false}>
            <Login />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup-type",
        element: (
          <PrivateRoute onlyAuth={false}>
            <SignupType />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PrivateRoute onlyAuth={false}>
            <SignupSite />
          </PrivateRoute>
        ),
      },
      {
        path: "/test",
        element: <TripTest />,
      },
      {
        path: "/recommend",
        element: <RecommendPage />,
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
        element: (
          <PrivateRoute onlyAuth={true}>
            <MyPage />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <MyReservation />,
          },
          {
            path: "myreservation",
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
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/kakaologin",
    element: <KakaoLogin />,
  },
  {
    path: "/naverlogin",
    element: <NaverLogin />,
  },
  {
    path: "/googlelogin",
    element: <GoogleLogin />,
  },
]);

export default router;
