"use stript";

class UserStorage{
     static #users={
        id : ["tlarmsdud12", "jossi","123123"],
        psword : ["1223", "135456","123123"],
        name : ["심근영", "조정민","123123"],
    };
    
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            } 
            return newUsers;
        }, {});
        return newUsers;
    }
    static getUsersInfor(id){
        const users=this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        // console.log(usersKeys);
        const userInfo = usersKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        
        return userInfo;
    }
}

module.exports= UserStorage;