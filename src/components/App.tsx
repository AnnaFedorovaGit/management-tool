// import { useState } from 'react'
import { Suspense, lazy } from 'react';
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
// import viteLogo from '../../public/vite.svg'

import './App.css'

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));


function App() {
  // const [count, setCount] = useState(0)

  return (
		// !isLoading && (
			// <Suspense fallback={<Loader/>}>
			<Suspense fallback={<p>is loading</p>}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<LoginPage />} />
					{/* <Route index element={<HomePage />} /> */}
					{/* <Route path='/register' element={<RestrictedRoute><RegisterPage/></RestrictedRoute>}/>
					<Route path='/login' element={<RestrictedRoute><LoginPage/></RestrictedRoute>}/>
					<Route path='/contacts' element={<PrivateRoute><ContactListPage /></PrivateRoute>} /> */}
				</Route>
				<Route path='*' element={<h1>error</h1>} />
			</Routes>
		</Suspense >
		// )
	)
}
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
//   )
// }

export default App;