import { BrowserRouter } from 'react-router-dom'
import { PrivateRoutesK } from './PrivateRoutesK';
 

export const AppRouterK = () => {
    return(
        <BrowserRouter>
           <PrivateRoutesK/>
        </BrowserRouter>
    )
} 