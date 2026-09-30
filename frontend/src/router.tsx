import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import AuthLayout from './layouts/AuthLayout'

/*
    Aqui las dependencias se utilizan de la siguiente manera:
    BrowserRouter -> Prepara todo para utilizar react router dom
    Routes -> Permite agrupar todas las rutas
    Route -> Componente donde se define la url y el componente que se va a mostrar
*/

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout/>}>
                    <Route path='/auth/login' element={<LoginView/>} />
                    <Route path='/auth/register' element={<RegisterView/>} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
