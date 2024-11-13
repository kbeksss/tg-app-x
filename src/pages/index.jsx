import { Routes, Route, Outlet } from 'react-router'
import { Layout } from '@widgets'
import HomePage from '@pages/HomePage'
import SearchPage from '@pages/SearchPage'
import TradesPage from '@pages/TradesPage'
import AccountPage from '@pages/AccountPage'
import SeedphrasePage from '@pages/SeedphrasePage'
import ReceivePage from '@pages/ReceivePage'
import SendPage from '@pages/SendPage'
import { paths } from '@pages/paths.js'
import PaymentSuccessPage from '@pages/PaymentSuccessPage'
import ExchangePage from '@pages/ExchangePage'
import ExchangeSuccessPage from '@pages/ExchangeSuccessPage'
import NetworkSettingsPage from '@pages/NetworkSettingsPage'
import TradePage from '@pages/TradePage'
import UserProfilePage from '@pages/UserProfilePage'
import SubscribeSuccessPage from '@pages/SubscribeSuccessPage'

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
                    <Route path={paths.trades} element={<TradesPage />} />
                    <Route
                        path={`${paths.trade}/:id`}
                        element={<TradePage />}
                    />
                    <Route path={paths.account} element={<AccountPage />} />
                    <Route
                        path={`${paths.networkSettings}/:network`}
                        element={<NetworkSettingsPage />}
                    />
                    <Route path={paths.receive} element={<ReceivePage />} />
                    <Route path={paths.send} element={<SendPage />} />
                    <Route
                        path={paths.sendSuccess}
                        element={<PaymentSuccessPage />}
                    />
                    <Route path={paths.exchange} element={<ExchangePage />} />
                    <Route
                        path={paths.exchangeSuccess}
                        element={<ExchangeSuccessPage />}
                    />
                    <Route
                        path={`${paths.userProfile}/:id`}
                        element={<UserProfilePage />}
                    />
                    <Route
                        path={`${paths.userSubscribeSuccess}/:id`}
                        element={<SubscribeSuccessPage />}
                    />
                </Route>
                <Route path={paths.seedphrase} element={<SeedphrasePage />} />
            </Routes>
        </>
    )
}
