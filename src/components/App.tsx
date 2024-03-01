import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));


function App() {
  return (
		// !isLoading && (
			// <Suspense fallback={<Loader/>}>
			<Suspense fallback={<p>is loading</p>}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
					{/* <Route path='/register' element={<RestrictedRoute><RegisterPage/></RestrictedRoute>}/> */}
					{/* <Route index element={<HomePage />} /> */}
					{/* <Route path='/login' element={<RestrictedRoute><LoginPage/></RestrictedRoute>}/>
					<Route path='/contacts' element={<PrivateRoute><ContactListPage /></PrivateRoute>} /> */} 
				</Route>
				<Route path='*' element={<h1>error</h1>} />
			</Routes>
		</Suspense >
		// )
	)
}


export default App;