// Arrays to keep track of each task's state
// Get rid of the arrays and changed to object:
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}


const task1 = newTask("Clean Cat Litter", "Take all the 💩")
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

