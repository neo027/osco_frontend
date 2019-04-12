export const isEmpty = (value) => {
	if(value === undefined || value === null || value === ''){
		return true;
	}
	else if(typeof value === 'string' && value.trim() === ''){
		return true;
	}
	else {
		return false;
	}
}

export const isNotEmail = (value) => {
	if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(value)){
		return false;
	}
    return true;
}

export const saveToken = (token) => {
	localStorage.token = token;
}

export const getToken = () => {
	return localStorage.token;
}

export const removeToken = () => {
	localStorage.removeItem('token');
}