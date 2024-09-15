import axios from 'axios';

const API_URL = 'http://localhost:5000/api';
const NEW_URL  = 'http://localhost:5000'












export const login = async (email, password) => {
    return axios.post(`${NEW_URL}/auth/login`, { email, password });
};


export const signup = async (name, email, password) => {
    return axios.post(`${NEW_URL}/auth/signup`, { name, email, password });
};

export const fetchItems = async () => {
    return axios.get(`${API_URL}/api/items`);
};

export const searchItems = async (query) => {
    return axios.get(`${API_URL}/api/items/search`, { params: { query } });
};

//
export const getItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/items`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch items:', error);
        throw error; // Re-throw error to handle it in the component
    }
};






// const API_URL = 'http://localhost:5000/api/items'; // Update according to your backend URL

// export const getItems = async () => {
//   const response = await fetch(API_URL, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       // Include authentication token if needed
//     },
//   });
//   return response.json();
// };

// export const addItem = async (email, name, description) => {
//   const response = await fetch(API_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       // Include authentication token if needed
//     },
//     body: JSON.stringify({ email, name, description }),
//   });
//   return response.json();
// };

// export const updateItem = async (id, name, description) => {
//   const response = await fetch(`${API_URL}/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       // Include authentication token if needed
//     },
//     body: JSON.stringify({ name, description }),
//   });
//   return response.json();
// };

// export const deleteItem = async (id) => {
//   const response = await fetch(`${API_URL}/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       // Include authentication token if needed
//     },
//   });
//   return response.json();
// };

// const API_URL = 'http://localhost:5000/api'; // Update according to your backend URL

// // Existing functions
// export const getItems = async () => {
//   const response = await fetch(`${API_URL}/items`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       // Include authentication token if needed
//     },
//   });
//   return response.json();
// };

// export const addItem = async (email, name, description) => {
//   const response = await fetch(`${API_URL}/items`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       // Include authentication token if needed
//     },
//     body: JSON.stringify({ email, name, description }),
//   });
//   return response.json();
// };

// export const updateItem = async (id, name, description) => {
//   const response = await fetch(`${API_URL}/items/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       // Include authentication token if needed
//     },
//     body: JSON.stringify({ name, description }),
//   });
//   return response.json();
// };

// export const deleteItem = async (id) => {
//   const response = await fetch(`${API_URL}/items/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       // Include authentication token if needed
//     },
//   });
//   return response.json();
// };

// // Add signup function
// export const signup = async (name, email, password) => {
//   const response = await fetch(`${API_URL}/signup`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ name, email, password }),
//   });
//   return response.json();
// };



// import axios from 'axios';

// const API_URL = 'http://localhost:5000'; // Update this if your API URL is different

// // Login function
// export const login = async (email, password) => {
//     try {
//         const response = await axios.post(`${API_URL}/login`, { email, password });
//         return response.data; // Assuming the response contains user data and token
//     } catch (error) {
//         throw new Error('Login failed. Please check your credentials.');
//     }
// };

// // Existing functions
// export const signup = async (name, email, password) => {
//     try {
//         await axios.post(`${API_URL}/signup`, { name, email, password });
//     } catch (error) {
//         throw new Error('Signup failed.');
//     }
// };

// export const addItem = async (email, name, description) => {
//     try {
//         await axios.post(`${API_URL}/items`, { email, name, description });
//     } catch (error) {
//         throw new Error('Failed to add item.');
//     }
// };

// export const updateItem = async (id, name, description) => {
//     try {
//         await axios.put(`${API_URL}/items/${id}`, { name, description });
//     } catch (error) {
//         throw new Error('Failed to update item.');
//     }
// };

// export const deleteItem = async (id) => {
//     try {
//         await axios.delete(`${API_URL}/items/${id}`);
//     } catch (error) {
//         throw new Error('Failed to delete item.');
//     }
// };

// export const getItems = async () => {
//     try {
//         const response = await axios.get(`${API_URL}/items`);
//         return response.data;
//     } catch (error) {
//         throw new Error('Failed to fetch items.');
//     }
// };
