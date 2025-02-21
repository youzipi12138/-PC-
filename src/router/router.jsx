

//  使用lazy函数对组件进行导入   实现路由懒加载
// const Home = lazy(() => import('../pages/Home'))
// const Aticle = lazy(() => import('../pages/Aticle'))
// const Pulish = lazy(() => import('../pages/Pulish'))
import Index from "../layout/Index/"


import { createBrowserRouter } from "react-router-dom";
// import AuthRoute from "@/components/AuthRoute";
import { lazy, Suspense } from "react";
const router = createBrowserRouter([
  {
    path: '/',
    element:  <Index/>,
    // children: [
    //   {
    //     path: '/home',
    //     element: <Suspense fallback={'加载中...'}><Home /></Suspense>
    //   },
    // ]
  },
  // {
  //   path: '/login',
  //   element: <Login />
  // }
])
export default router;
