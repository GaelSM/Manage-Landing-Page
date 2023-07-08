import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Manage from "./components/Manage"
import Simplify from "./components/Simplify"
import Started from "./components/Started"
import Testimonials from "./components/Testimonials"


export default function App() {
  return (
    <>
    <main>
      <Header />
      <Simplify />
      <Manage />
    </main>
    <Testimonials />
    <Started />
    <Footer />
    </>
  )
}   