import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/tasks/";

// const taskServices = {
//     getTasks: async () => {
//         try {
//             const response = await axios.get(API_URL);
//             return response.data;
//         } catch (error) {
//             console.error("Error fetching tasks:", error);
//             throw error;
//         }
//     },
//     createTask: async (taskData) => {
//         try {
//             const response = await axios.post(API_URL, taskData, {
//                 headers: { "Content-Type": "application/json" },
//             });
//             return response.data;
//         } catch (error) {
//             console.error("Error creating task:", error);
//             throw error;
//         }
//     }
// };

const taskServices = {
    getTasks: () => axios.get(API_URL),
    createTask: (taskData) => axios.post(API_URL, taskData)
};

export default taskServices;