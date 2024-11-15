// app/layout.js
"use client"

import './lib/fontawesome.js'
import React from "react";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Header from "./components/common/header"
import Footer from "./components/common/footer"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <title>One Ring Rentals</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            <link href="http://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic"
                  rel="stylesheet" type="text/css"/>
            <link href="/styles/bootstrap.min.css" rel="stylesheet"/>
            <link href="/styles/style.css" rel="stylesheet"/>
        </head>

        <body>
        <div id="wrapper">
            <Header/>
            {children}
            <Footer/>

            <script src="/js/common.js"></script>
            <script src="/js/common/bootstrap.min.js"></script>
            <script src="/js/common/bootstrap-datepicker.js"></script>
            <script src="/js/common/chosen.min.js"></script>
            <script src="/js/common/bootstrap-checkbox.js"></script>
            <script src="/js/common/nice-scroll.js"></script>
            <script src="/js/common/jquery-browser.js"></script>
            <script src="/js/scripts.js"></script>
        </div>
        </body>
        </html>
    );
}