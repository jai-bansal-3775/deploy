import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from '../services/api';

function MyProperties() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', description: '' });
    const [editingItem, setEditingItem] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await getItems();
            setItems(result);
        };
        fetchItems();
    }, []);

    const handleAddItem = async () => {
        if (newItem.name && newItem.description) {
            const email = 'user@example.com'; // Replace with actual user email from auth context or localStorage
            await addItem(email, newItem.name, newItem.description);
            setNewItem({ name: '', description: '' });
            // Refresh items
            const result = await getItems();
            setItems(result);
        }
    };

    const handleEditItem = async (id) => {
        if (editingItem.name && editingItem.description) {
            await updateItem(id, editingItem.name, editingItem.description);
            setEditingItem(null);
            // Refresh items
            const result = await getItems();
            setItems(result);
        }
    };

    const handleDeleteItem = async (id) => {
        await deleteItem(id);
        // Refresh items
        const result = await getItems();
        setItems(result);
    };

    return (
        <div>
            <nav>
                <button onClick={() => setEditingItem({ name: '', description: '' })}>Add Property</button>
            </nav>
            <h2>My Properties</h2>
            <div>
                {items.map(item => (
                    <div key={item._id}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                        <button onClick={() => setEditingItem(item)}>Edit</button>
                    </div>
                ))}
            </div>
            {editingItem && (
                <div>
                    <h3>{editingItem._id ? 'Edit Property' : 'Add Property'}</h3>
                    <input 
                        type="text" 
                        value={editingItem.name} 
                        onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })} 
                        placeholder="Name" 
                    />
                    <input 
                        type="text" 
                        value={editingItem.description} 
                        onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })} 
                        placeholder="Description" 
                    />
                    <button onClick={() => editingItem._id ? handleEditItem(editingItem._id) : handleAddItem()}>
                        {editingItem._id ? 'Update' : 'Add'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default MyProperties;
