import Header from './Header'
import Navigation from './Navigation'

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <Navigation />
      {children}
    </>
  )
}