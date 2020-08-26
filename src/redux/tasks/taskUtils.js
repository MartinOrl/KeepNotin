import firebase, {firestore} from '../../firebase/firebase'

export const addTaskToDatabase = (user, task) => {
    var tasksRef = firestore.collection("users").doc(user.id).collection("tasks").doc("tasks")
    return tasksRef.update({
        tasks: firebase.firestore.FieldValue.arrayUnion(task)
    })
}

export const TaskSetStatusComplete = (tasks, taskToUpdate) => {
    const {id, status} = taskToUpdate;
    const taskIndex = tasks.findIndex(task => task.id === id)
    if(status === 'Completed'){
        tasks[taskIndex].status = 'Pending'
    }
    else{
        tasks[taskIndex].status = 'Completed'
    }
}