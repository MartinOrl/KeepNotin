import firebase, {firestore} from '../../firebase/firebase'

export const addTaskToDatabase = (user, task) => {
    var tasksRef = firestore.collection("users").doc(user.id).collection("tasks").doc("tasks")
    return tasksRef.update({
        tasks: firebase.firestore.FieldValue.arrayUnion(task)
    })
}