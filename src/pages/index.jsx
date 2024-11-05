import { Routes, Route, Outlet } from 'react-router'
import Home from '@pages/Home/index.jsx'
import { Layout } from '@widgets'

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
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/search'} element={<Home />} />
                    <Route path={'/trade'} element={<Home />} />
                    <Route path={'/account'} element={<Home />} />
                </Route>
            </Routes>
        </>
    )
}
