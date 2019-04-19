import axios from 'axios';
import {getToken} from '../Utilities';


// POST Requests

export const createCustomer = (data) => axios.post('/api/auth/add-customer', {...data}, {headers:{'X-Access-Token':getToken()}}).then(response => response.data);
export const assignCouponToCustomer = (data) => axios.post('/api/coupon/assign-to-customer', {...data}, {headers:{'X-Access-Token':getToken()}}).then(response => response.data);

export const getCoupons = () => axios.get('/api/coupon/', {headers:{'X-Access-Token':getToken()}}).then(response => response.data)