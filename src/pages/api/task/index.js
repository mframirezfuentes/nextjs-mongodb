import {
    dbConnect
} from '../../../utils/mongoose'
import Task from '../../../models/Task.js'

dbConnect()
export default async function handler(req, res) {
    const tasks = await Task.find()
    console.log(tasks)
    res.status(200).json("task")
}