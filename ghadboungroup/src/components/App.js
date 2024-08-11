import React, { useState, useEffect } from "react"
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './static/css/app.css'
import AppLayout from './AppLayout'
import Home from './Home'
import Services from "./Services"
import NotFound from './NotFound.js'
import Gallery from "./Gallery.js"
import ContactUs from './ContactUs'
import UploadImage from "./UploadImage.js"
import EditImage from './EditImage.js'

export default function App(){
    return (
        <Routes>
            <Route element={<AppLayout />} >
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />}/>
                <Route path="/gallery" >
                    <Route index element={<Gallery />} />
                    <Route path=":category_param" element={<Gallery />} />
                </Route>
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/upload_image" element={<UploadImage />} />
                <Route path="/editImage/:image_id" element={<EditImage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

const root = createRoot(document.getElementById("app"));
root.render(<BrowserRouter><App /></BrowserRouter>);