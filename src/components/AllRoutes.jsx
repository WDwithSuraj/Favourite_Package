import React from 'react'
import { Routes, Route } from "react-router-dom"
import { FavouritePackage } from '../pages/FavouritePackage'
import { AddFavouritePackage } from '../pages/AddFavouritePackage'
export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<FavouritePackage />} />
            <Route path='/add-favourite' element={<AddFavouritePackage />} />
        </Routes>
    )
}
