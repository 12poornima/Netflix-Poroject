import NetflixBtnPart from "./Components/NetflixBtnPart"
import NetflixPartOne from "./Components/NetflixPartOne"
import NetflixTitle from "./Components/NetflixTitle"

function App() {
  return (
    <div className="signup-container">
      <div className="card" >
        <NetflixTitle />
        <NetflixPartOne />
        {/* <NetflixBtnPart /> */}
      </div>
    </div>
  )
}

export default App
