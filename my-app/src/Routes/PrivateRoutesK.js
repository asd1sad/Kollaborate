import  Navbar  from '../Navbar/Navbar.js'; 
import { Routes, Route, Navigate } from 'react-router-dom'
import { Ok } from '../Ok.js';
import { Mural } from '../Mural/Mural.js';
import { Game } from '../Game/Game.js';
import { Stepinto } from '../Stepinto/Stepinto.js';
import { Login } from '../Login/Login.js';

const API_KEY =`${process.env.REACT_APP_KEY}`

export const PrivateRoutesK = () => {

    return (
        <>
            <Navbar />
                    <Routes>  
                        <Route path='/' element={<Game  API_KEY={API_KEY}/> }/>
                        <Route path='/discover' element={<Ok /> } />
                        <Route path='/about'  element={<Ok />}/>
                        <Route path='/team' element={<Ok />} />
                        <Route path='/blog' element={<Ok /> } />
                        <Route path='/login'  element={<Login />}/>
                        <Route path='/register' element={<Mural/>} />
                        <Route path='*' element={ <Navigate to={'/'}/> } />
                    </Routes>
         
        </>
    )
}