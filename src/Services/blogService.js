import axios from 'axios';
const baseURL = 'https://stormy-hamlet-49486.herokuapp.com/api/blogs';

const getAll = () => {
    return axios.get(baseURL);
}

const create = (blogObject) => {
    return axios.post(baseURL, blogObject);
}

const deleteItem = (id) => {
    return axios.delete(`${baseURL}/${id}`);
}

const update = (id, newBlogObject) => {
    return axios.put(`${baseURL}/${id}`, newBlogObject);
}

export default { getAll, create, deleteItem, update };