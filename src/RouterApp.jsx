/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  * as React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function RouterApp({mainRoutePath, mainRouteElement, indexRouteElement, routesList=[{path:'',element:<></>}]}) {
  return (
		<BrowserRouter>
			<Routes>
                <Route path={mainRoutePath} element={mainRouteElement}>
                    <Route index element={indexRouteElement}/>
                    {routesList.map((route,index)=>(
                        <Route key={index} path={route.path} element={route.element}/>
                    ))}
                </Route>
				{/* <Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='restaurant' element={<Restaurant />} />
					<Route path='dashboard' element={<Dashboard />} />
					<Route path='pos' element={<POS />} />
					<Route path='menu' element={<Menu />} />
					<Route path='tables' element={<Tables />} />
					<Route path='users' element={<Users />} />
					<Route path='inventory' element={<Inventory />} />
					<Route path='settings' element={<Settings />} />
					<Route path='help' element={<Help />} />
					<Route path='*' element={<NoPage />} />
				</Route> */}
			</Routes>
			{/* <Layout /> */}
		</BrowserRouter>
	);
}

export default RouterApp