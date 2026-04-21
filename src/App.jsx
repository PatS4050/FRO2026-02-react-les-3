import './App.css'

const bTest1 = "Test 1 completed"
const bTest2 = "Test 2 completed"
const bTest3 = "Test 3 completed"


function App() {
    function buttonClick(e) {
        console.log(e)
    }
    return (
        <>
            <nav>
          <span>
              <button type="button" name="buttonTest1" onClick={() => buttonClick(bTest1)}>test 1</button>
              <button type="button" name="buttonTest1" onClick={() => buttonClick(bTest2)}>test 2</button>
              <button type="button" name="buttonTest1" onClick={() => buttonClick(bTest3)} disabled>test 3</button>
          </span>
            </nav>
            <h1>Handbags & Purses</h1>
        </>
    )
}

export default App
