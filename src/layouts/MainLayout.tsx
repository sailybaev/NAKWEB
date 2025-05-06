import { NavBar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import { ReactNode } from 'react'
import { Box } from '@mui/material'

type Props = {
  children: ReactNode
}

export function MainLayout({ children }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>
        <main>{children}</main>
      </Box>
      <Footer />
    </Box>
  )
}
