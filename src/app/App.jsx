import { Routing } from '@pages/index.jsx'
import { withProviders } from '@app/providers'
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { ThemeProviderContext } from '@app/providers/with-mui-theme.jsx'

const App = () => {
    return (
        <ThemeProviderContext>
            <ToastContainer autoClose={1000} />
            <Routing />
        </ThemeProviderContext>
    )
}

export default withProviders(App)
