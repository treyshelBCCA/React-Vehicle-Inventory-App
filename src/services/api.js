import axios from 'axios';

const BASE_URL = 'https://unit-4-project-app-24d5eea30b23.herokuapp.com';

export const getAllCars = async (teamId) => {
    const response = await axios.get(`${BASE_URL}/get/all?teamId=${teamId}`);
    return response.data;
};

export const getCarById = async (teamId, recordId) => {
    const response = await axios.get(`${BASE_URL}/get/data?teamId=${teamId}&recordId=${recordId}`);
    return response.data;
};

export const createCar = async (teamId, newCar) => {
    const response = await axios.post(`${BASE_URL}/post/data`, {
        team: teamId,
        body: newCar
    });
    return response.data;
};

export const updateCar = async (teamId, recordId, updatedCar) => {
    const response = await axios.post(`${BASE_URL}/update/data?teamId=${teamId}&recordId=${recordId}`, updatedCar);
    return response.data;
};

export const deleteCar = async (teamId, recordId) => {
    const response = await axios.post(`${BASE_URL}/delete/data`, {
        id: recordId,
        team: teamId
    });
    return response.data;
};
