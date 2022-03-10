
const Service = require('./taskService');

async function getTasks (args, req) {
    try {
        let svc = new Service();
        let result = await svc.getTasks();
        return result.data;
    } catch (error) {
        console.log(error); 
        return error;
    }
}   

async function getTask (args, req) {    
    try {
        let svc = new Service();
        let result = await svc.getTask(args.id);
        return result.data;
    } catch (error) {
        return error;
    }
}

async function addTask(args, req) {
    try {
        let svc = new Service();
        let result = await svc.addTask(args);
        return true;
    } catch (error) {
        return error;
    }
}

async function updateTask(args, req) {
    try {
        let svc = new Service();
        let result = await svc.updateTask(args)
        return true;       
    } catch (error) {
        return error;
    }
}

async function deleteTask(args, req) {
    try {
        let svc = new Service();
        let result = await svc.deleteTask(args.id)
        return true;
    } catch (error) {
        return error;
    }
}

module.exports =  { getTasks, getTask, addTask, updateTask, deleteTask }