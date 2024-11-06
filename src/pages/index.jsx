import { Routes, Route, Outlet } from 'react-router'
import { Layout } from '@widgets'
import HomePage from '@pages/HomePage'
import SearchPage from '@pages/SearchPage'
import TradePage from '@pages/TradePage'
import AccountPage from '@pages/AccountPage'

export const Routing = () => {
    return (
        <>
            <Routes>
                <Route
                    element={
                        <Layout>
                            <Outlet />
                        </Layout>
                    }>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/search'} element={<SearchPage />} />
                    <Route path={'/trade'} element={<TradePage />} />
                    <Route path={'/account'} element={<AccountPage />} />
                </Route>
            </Routes>
        </>
    )
}
