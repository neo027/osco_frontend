import axios from 'axios';
import {getToken} from '../Utilities';


// POST Requests

export const doLogin = (credentials) => axios.post('/api/auth/login', {...credentials}).then(response => response.data);
export const doRegister = (registrationData) => axios.post('/api/auth/register', {...registrationData}).then(response => response.data);
export const resendOTP = (mobileNumber) => axios.post('/api/auth/resend-otp', {mobileNumber}).then(response => response.data);
export const verifyOTP = (otpData) => axios.post('/api/auth/verify-otp', {...otpData}).then(response => response.data);


// Get Requests

export const fetchMe = () => axios.get('/api/auth/me', {headers:{'X-Access-Token':getToken()}}).then(response => response.data)