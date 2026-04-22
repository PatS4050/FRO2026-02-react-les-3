import './App.css'
import Button from "./component/button/Button.jsx";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import Article from "./component/Article/Article.jsx";

function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <span>
                    <Button label="to the collection" name="test 1" logText="Test 1 is completed" disabled={false}/>
                     <Button label="shop all bags" name="test 2" logText="Test 2 is completed" disabled={false}/>
                     <Button label="pre-orders" name="test 3" logText="Test 3 is completed" disabled={true}/>
                </span>
            </nav>
            <main className="products">
                <Article condition="Best  seller" imageProduct={bag1} nameProduct="The handy bag" priceProduct="€ 400,-"/>
                <Article condition="Best seller" imageProduct={bag2} nameProduct="The stylish bag" priceProduct="€ 250,-"/>
                <Article condition="New collection" imageProduct={bag3} nameProduct="The simple bag" priceProduct="€ 300,-"/>
                <Article condition="New collection" imageProduct={bag4} nameProduct="The trendy bag" priceProduct="€ 150,-"/>
            </main>

        </>
    )
}

export default App
