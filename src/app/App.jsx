import { Routing } from '@pages/index.jsx'
import { withProviders } from '@app/providers'
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const App = () => {
    return (
        <>
            <ToastContainer autoClose={1000} />
            <Routing />
        </>
    )
}

export default withProviders(App)
