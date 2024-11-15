// app/layout.js
"use client"

import "./styles/bootstrap.css";
import "./styles/bootstrap-datepicker.css";
import "./styles/font.css";
import "./styles/owl.transitions.css";
import "./styles/style.css"

import "./lib/fontawesome.js";

import React from "react";
import Script from 'next/script'

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
            <link href="https://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic&display=optional"
                  rel="stylesheet" type="text/css"/>
            {/*<link href="/app/styles/bootstrap.min.css" rel="stylesheet"/>*/}
            {/*<link href="/app/styles/style.css" rel="stylesheet"/>*/}
        </head>

        <body>
        <div id="wrapper">
            <Header/>
            {children}
            <Footer/>

            <Script src="/A3-NextJS-Project-Live/js/common.js"></Script>
            <Script src="/A3-NextJS-Project-Live/js/common/bootstrap.min.js"></Script>
            <Script src="/A3-NextJS-Project-Live/js/common/bootstrap-datepicker.js"></Script>
            <Script src="/A3-NextJS-Project-Live/js/common/chosen.min.js"></Script>
            <Script src="/A3-NextJS-Project-Live/js/common/bootstrap-checkbox.js"></Script>
            <Script src="/A3-NextJS-Project-Live/js/common/nice-scroll.js"></Script>
            <Script src="/A3-NextJS-Project-Live/js/common/jquery-browser.js"></Script>
            <Script src="/A3-NextJS-Project-Live/js/scripts.js"></Script>
        </div>
        </body>
        </html>
    );
}