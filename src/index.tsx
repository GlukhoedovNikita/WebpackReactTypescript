import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@routes/index'

const root = ReactDom.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
