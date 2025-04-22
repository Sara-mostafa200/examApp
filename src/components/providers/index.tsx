import React from 'react'
import NextAuthProvider from './_components/next-auth.provider';
import { SidebarProvider} from '../ui/sidebar';
import ReactQueryProvider from './_components/react-query.provider';

type ProvidersProps  = {
    children: React.ReactNode; 
} 

export default function Providers({children}:ProvidersProps) {
  return (
    <ReactQueryProvider>
    <NextAuthProvider>
      <SidebarProvider>
      {children}
      </SidebarProvider>
    </NextAuthProvider>
    </ReactQueryProvider>
  )
}
