import axios from "axios";

export default class UserService {
    static async getAll() {
        try {
            const response = await axios.get(
                "https://dummyjson.com/users?limit=300&select=firstName,lastName,email,company,university,image,phone,username"
            );
            return response.data.users;
        } catch (error) {
            console.log(error);
        }
    }
}
