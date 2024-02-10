/*import React, {useState} from "react";
import './Storage.css';
import { FaPlus } from "react-icons/fa";
function Storage(){
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemCount, setItemCount] = useState(0);
    
    const AddItem = () => {
        if(itemName.trim()!==""&&itemCount!==0){
            const newItem = {
                itemName: itemName,
                itemCount: itemCount,
            };
            setItems([...items, newItem]);
            setItemName("");
            setItemCount(0);
        }
    }
        return(
            <div className="storage">
                <div className="itemName">
                    <input
                        type="itemName"
                        placeholder="item name"
                        required
                        value={itemName}
                        onChange={(event) => setItemName(event.target.value)}
                        />
                </div>
                <div className="itemCount">
                <input
                        type="itemCount"
                        required
                        value={itemCount}
                        onChange={(event) => setItemCount(event.target.value)}
                        />
                </div>
                <div className="add-item">
                    <button onClick={AddItem}><FaPlus /></button>
                </div>
                <div className="item-list">
                {items.map((item, index) => (
                    <div key={index} className="item">
                        <h1>{item.itemName}</h1>
                        <p>Count: {item.itemCount}</p>
                    </div>
                ))}
                </div>
            </div>
        );
}



export default Storage;*/
import React, { useState } from "react";
import './Storage.css';
import { FaPlus } from "react-icons/fa";

function Storage(){
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemCount, setItemCount] = useState(0);
    
    const AddItem = () => {
        if(itemName.trim()!==""&&itemCount!==0){
            const newItem = {
                itemName: itemName,
                itemCount: itemCount,
            };
            setItems([...items, newItem]);
            setItemName("");
            setItemCount(0);
        }
    }

    return(
        <div className="storage">
            <div className="addItemForm">
                <input
                    type="text"
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(event) => setItemName(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Item Count"
                    value={itemCount}
                    onChange={(event) => setItemCount(event.target.value)}
                />
                <button onClick={AddItem}><FaPlus /> Add Item</button>
            </div>
            <table className="item-list">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Item Count</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.itemName}</td>
                            <td>{item.itemCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Storage;