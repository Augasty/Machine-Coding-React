import "./styles.css";
import { useState, useMemo, useEffect } from "react";
import debouce from "lodash.debounce";
import fruits from "./Fruits";
import { Link } from "react-router-dom";

export default function Debounce() {
    const [searchTerm, setSearchTerm] = useState("");

    let listToDisplay = fruits;



    if (searchTerm !== "") {
        listToDisplay = fruits.filter((fruit) => {
            return fruit.includes(searchTerm);
        });
    }
    const debouncedResults = useMemo(() => {
        return debouce((e)=>{setSearchTerm(e.target.value)}, 1000);
    }, []);
    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

    const renderFruitList = () => {
        return listToDisplay.map((fruit, i) => <p key={i}>{fruit}</p>);
    };
    return (
        <div className="App">
            <h1>Fruit Stand</h1>
            <input type="text" onChange={debouncedResults} />
            <Link to="/">
                <button type="button" className="Homebutton">Back
                </button></Link>
            {renderFruitList()}
        </div>
    );
}
