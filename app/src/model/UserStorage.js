"use stript";
class UserStorage{
     static #users={
        id : ["tlarmsdud12", "jossi"],
        psword : ["1223", "135456"],
        name : ["심근영", "조정민"]
    }
    static getUsers(...fields){
        const users=this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
            } 
            return newUsers;
        },{});
        return newUsers;
    }
    static getUsersInfor(id){
        const users=this.#users;
        const idx = users.id.indexOf(id);
        const usersKey = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});
    }
}

module.exports= UserStorage;