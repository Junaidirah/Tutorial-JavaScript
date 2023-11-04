function getUserWeather(usersId){
    try{
        const user = getUser(usersId)
        const weather = getUser(user.location);
        return {...user ...weather}
    }catch(error){
        console.log(error.mesaage);
        return null;
    }
}

const UserWeather = getUserWeather(1);

console.log(UserWeather);