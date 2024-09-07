'use client';
import { Inter } from "next/font/google";
import { Provider } from 'react-redux';
import { store } from './config/store/Store';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/app/Components/Hero2Sec/Hero2Sec.css'
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script src="https://js.stripe.com/v3/"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
          integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
          crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
          integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
          crossOrigin="anonymous"></script>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
