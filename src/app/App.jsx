import { Routing } from '@pages/index.jsx'
import { withProviders } from '@app/providers'
import './styles/index.css'

const App = () => {
    return (
        <>
            <Routing />
        </>
    )
}

export default withProviders(App)
