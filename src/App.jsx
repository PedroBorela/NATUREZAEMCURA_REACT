import { lazy, Suspense } from "react"
import LandingV2 from "./pages/LandingV2"

// A landing antiga continua acessível em ?v=1 até a v2 ser aprovada
const LandingV1 = lazy(() => import("./pages/LandingV1"))

const isLegacy = () => new URLSearchParams(window.location.search).get("v") === "1"

const App = () => {
  if (isLegacy()) {
    return (
      <Suspense fallback={null}>
        <LandingV1 />
      </Suspense>
    )
  }
  return <LandingV2 />
}

export default App
