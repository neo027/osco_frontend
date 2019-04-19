import axios from 'axios';
import {getToken} from '../Utilities';


// POST Requests

export const createDistributor = (data) => axios.post('/api/distributor/add', data, {headers:{'X-Access-Token':getToken()}}).then(response => response.data);
export const allotCoupon = (data) => axios.post('/api/coupon/assign-to-distributor', data, {headers:{'X-Access-Token':getToken()}}).then(response => response.data);

export const getAllDistributors = () => axios.get('/api/distributor/all').then(response => response.data)