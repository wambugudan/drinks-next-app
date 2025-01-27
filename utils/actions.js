'use server'

import { revalidatePath } from "next/cache"
import prisma from "./db"
import { redirect } from 'next/navigation';
import {z} from "zod"


export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy:{
            createdAt: "desc"
        }
    })
}

export const createTask = async (formData) => {
    const content = formData.get("content")
    await prisma.task.create({
        data: {
            content,
        }
    })
    revalidatePath("/tasks")
}

// Creating improved action -> createTask

export const createTaskCustom = async (prevState, formData) => {
    // await new Promise(resolve => setTimeout(resolve, 2000))

    const content = formData.get("content")
    // Intitializing zod
    const Task = z.object({
        content: z.string().min(5)
    })

    try {
        //  setting up the zod validation
        Task.parse({content})
        await prisma.task.create({
        data: {
            content,
        }
        })
        revalidatePath("/tasks")
        return{message: 'success'}

    } catch (error) {
        // Showing the error if zod validation fails
        console.log(error);
        
        return{message: 'error'}
    }

}

export const deleteTask = async (formData) => {
    const id = formData.get('id')
    await prisma.task.delete({
        where:{id}
    })
    revalidatePath("/tasks")
}

// Improved deleteTask Action
export const deleteTaskCustom = async (formData) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const id = formData.get('id')
    await prisma.task.delete({
        where:{id}
    })
    revalidatePath("/tasks")
}

export const getTask = async (id) => {
    return prisma.task.findUnique({
        where:{
            id,
        },
    })
}

export const editTask = async (formData) => {
    const id = formData.get('id')
    const content = formData.get('content')
    const completed = formData.get('completed')

    await prisma.task.update({
       where:{
        id,
       },
       data:{
        content,
        completed: completed === "on" ? true: false
       }
    })
    redirect('/tasks')
}