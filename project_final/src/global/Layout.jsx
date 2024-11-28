import React from 'react'
import Header from './header'
import Footer from './Footer'
import GetWindows from './GetWindows'
export default function Layout({children}) {


  

  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    
    <main className="flex-grow">
      {children}
    </main>
    
    <Footer />
  </div>
  )
}
