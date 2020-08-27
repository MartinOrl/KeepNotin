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

export const SortTasks = (tasks, filter) => {
    function alphabet(a,b){
        if(a['title'] > b['title']) return 1;
        if(b['title'] > a['title']) return -1;
        return 0
    }
    function alphabetReverse(a,b){
        if(a['title'] > b['title']) return -1;
        if(b['title'] > a['title']) return 1;
        return 0
    }
    function priority(){
        return [...(tasks.filter(task => task.priority === 'High')), ...(tasks.filter(task => task.priority === 'Medium')), ...(tasks.filter(task => task.priority === 'Low'))]
    }
    switch(filter){
        case 'Alphabet':
            return tasks.sort(alphabet)
        case 'Alphabet Reverse':
            return tasks.sort(alphabetReverse)
        case 'Priority':
            return priority()
        default: 
            return tasks
    }   
}