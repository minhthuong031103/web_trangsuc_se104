import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

import Cart from "../Pages/Cart";
import PaymentInfo from "../Pages/Payment/PaymentInfo";
import PaymentFinish from "../Pages/Payment/PaymentFinish";
import Blog from "../Pages/Blog/Blog";
import ProductsPage from "../Pages/Products/Screens/ProductsPage";
import ProductsPage1 from "../Pages/Products/Screens/ProductsPage1";
import ProductsPage2 from "../Pages/Products/Screens/ProductsPage2";
import ProductsDetail from "../Pages/Products/Components/ProductDetail";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Book from "../Pages/Book/Book";
import HomeAdmin from "../admin/pages/home/home_admin";

import Service from "../admin/pages/service/service_admin";
import AddService from "../admin/pages/service/addService/addService";
import ViewService from "../admin/pages/service/viewService/viewService";
import AdjustService from "../admin/pages/service/adjustService/adjustService";
import AddTypeInService from "../admin/pages/service/viewService/add/add";
import AdjustTypeInService from "../admin/pages/service/adjustTypeInService/adjustTypeInService";

import PaymentAdmin from "../admin/pages/paymentVerification/paymentVerification";
import ViewPayment from "../admin/pages/paymentVerification/viewPayment/viewPayment";
import VerifyOrder from "../admin/pages/orderVerification/orderVerification";
import ViewOrderVerification from "../admin/pages/orderVerification/viewOrderVerification/viewOrderVerification";

import Hoadon from "../admin/pages/Hoadon";

import VouchersPageAdmin from "../admin/pages/VouchersPage/Screens/vouchersPage";
import VouchersDetailsAdmin from "../admin/pages/VouchersDetails/Screens/vouchersDetails";
import ProductsPageAdmin from "../admin/pages/ProductsPage/Screens/productsPage";
import AddProduct from "../admin/pages/ProductsPage/Screens/addProduct";
import EditProduct from "../admin/pages/ProductsPage/Screens/editProduct";
import AddVoucher from "../admin/pages/VouchersPage/Screens/addVoucher";
import EditVoucher from "../admin/pages/VouchersPage/Screens/editVoucher";

const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "*", component: <NotFound />, layout: null },
  { path: "/cart", component: <Cart /> },
  { path: "/paymentinfo", component: <PaymentInfo /> },
  { path: "/paymentfinish/:madonhang", component: <PaymentFinish /> },

  {
    path: "/blog",
    component: <Blog />,
  },
  { path: "/products/nhan", component: <ProductsPage /> },
  {
    path: "/products/bong-tai",
    component: <ProductsPage1 />,
  },
  {
    path: "/products/day-chuyen",
    component: <ProductsPage2 />,
  },
  {
    path: "/productsdetail",
    component: <ProductsDetail />,
  },
  {
    path: "/aboutus",
    component: <AboutUs />,
  },
  {
    path: "/book",
    component: <Book />,
  },
];
export { publicRoutes };

const adminRoutes = [
  { path: "*", component: <NotFound />, layout: null },

  {
    path: "/service",
    component: <Service />,
  },
  {
    path: "/service/addTypeInService",
    component: <AddTypeInService />,
  },
  {
    path: "/service/addService",
    component: <AddService />,
  },
  {
    path: "/service/view",
    component: <ViewService />,
  },
  {
    path: "/service/adjustService",
    component: <AdjustService />,
  },
  {
    path: "/service/adjustTypeInService",
    component: <AdjustTypeInService />,
  },
  {
    path: "/homeAdmin",
    component: <HomeAdmin />,
  },

  {
    path: "/paymentVerfication",
    component: <PaymentAdmin />,
  },
  {
    path: "/paymentView",
    component: <ViewPayment />,
  },
  {
    path: "/orderVerification",
    component: <VerifyOrder />,
  },
  {
    path: "/viewOrderVerification",
    component: <ViewOrderVerification />,
  },

  {
    path: "/HoadonAdmin",
    component: <Hoadon />,
  },
  {
    path: "/admin/vouchersPage",
    component: <VouchersPageAdmin />,
  },
  {
    path: "/admin/vouchersPage/:id",
    component: <VouchersDetailsAdmin />,
  },
  {
    path: "/admin/productsPage",
    component: <ProductsPageAdmin />,
  },
  {
    path: "/admin/productsPage/add",
    component: <AddProduct />,
  },
  {
    path: "/admin/productsPage/edit/:id",
    component: <EditProduct />,
  },
  {
    path: "/admin/vouchersPage/add",
    component: <AddVoucher />,
  },
  {
    path: "/admin/vouchersPage/edit/:id",
    component: <EditVoucher />,
  },
];
export { adminRoutes };
