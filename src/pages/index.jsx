import { Routes, Route, Outlet } from 'react-router'
import { Layout } from '@widgets'
import HomePage from '@pages/HomePage'
import SearchPage from '@pages/SearchPage'
import TradePage from '@pages/TradePage'
import AccountPage from '@pages/AccountPage'
import SeedphrasePage from '@pages/SeedphrasePage'
import ReceivePage from '@pages/ReceivePage/index.jsx'
import { paths } from '@pages/paths.js'

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
                    <Route path={paths.home} element={<HomePage />} />
                    <Route path={paths.search} element={<SearchPage />} />
                    <Route path={paths.trade} element={<TradePage />} />
                    <Route path={paths.account} element={<AccountPage />} />
                    <Route path={paths.receive} element={<ReceivePage />} />
                </Route>
                <Route path={paths.seedphrase} element={<SeedphrasePage />} />
            </Routes>
        </>
    )
}
