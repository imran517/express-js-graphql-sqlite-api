const controller = require('./taskController')

const rootResolver = {
    getTasks: controller.getTasks,
    getTask: controller.getTask,
    addTask: controller.addTask,
    updateTask: controller.updateTask,
    deleteTask: controller.deleteTask
  };

module.exports = rootResolver;


