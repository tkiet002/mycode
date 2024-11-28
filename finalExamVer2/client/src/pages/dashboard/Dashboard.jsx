import React from 'react'
import { ColorModeContext, useMode } from '../../Theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import '../../css/App.css'
import Topbar from "../global/Topbar"
import Sidebar from "../global/Sidebar"

function Dashboard() {
  const [theme, color_mode] = useMode();
  return (
  <ColorModeContext.Provider value={color_mode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='dashboard'>
        <p>precede</p>
      </div>
    </ThemeProvider>
    <div>
        
    </div>
  </ColorModeContext.Provider>
  )
}

export default Dashboard