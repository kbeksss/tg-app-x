import { Routing } from '@pages/index.jsx'
import { withProviders } from '@app/providers'
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { ThemeProviderContext } from '@app/providers/with-mui-theme.jsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

const App = () => {
    return (
        <ThemeProviderContext>
            <QueryClientProvider client={queryClient}>
                <ToastContainer autoClose={1000} />
                <Routing />
            </QueryClientProvider>
        </ThemeProviderContext>
    )
}

export default withProviders(App)
