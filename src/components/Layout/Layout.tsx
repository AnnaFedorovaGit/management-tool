// import { Outlet } from 'react-router-dom';
// import UserMenu from 'components/UserMenu/UserMenu';
import LoginPage from "../../pages/LoginPage/LoginPage";

import scss from './Layout.module.scss';


const Layout = () => {
    return (
        <>
            {/* <header className={css.header}> */}
                {/* <UserMenu /> */}
                {/* <div className={css.backgroundImage}></div> */}
            {/* </header> */}
            <main>
                <div className={scss.wrapper}>
                    <LoginPage/>
                </div>
                {/* <Outlet/> */}
            </main>
        </>
    )
}


export default Layout;