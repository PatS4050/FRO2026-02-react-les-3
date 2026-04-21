import './App.css'
import Button from "./component/button/Button.jsx";
import bag1 from "./assets/bag_1.png"

function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <span>
                    <Button label="to the collection" name="test 1" logText="Test 1 is completed" disabled={false}/>
                     <Button label="shop all bags" name="test 2" logText="Test 2 is completed" disabled={false}/>
                     <Button label="pre-orders" name="test 3" logText="Test 3 is completed" disabled= {true}  />
                </span>
            </nav>
            <main className="products">

                    <article>
                        <span>conditie</span>
                        <img src={bag1} alt="tasje taupe" />
                        <p>naam tas</p>
                        <h4>prijs</h4>
                    </article>
                    <article/>
                    <article/>
                    <article/>

            </main>

        </>
    )
}

export default App
