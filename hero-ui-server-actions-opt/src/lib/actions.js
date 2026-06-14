"use server";

import { revalidatePath } from "next/cache";
import { postTasks } from "./tasks";
import { redirect } from "next/navigation";

export async function AddATask(formData) {
  // const name = formData.get("name");
  // const description = formData.get("description");
  // const assignee = formData.get("assignee");
  // const priority = formData.get("priority");
  // const status = formData.get("status");

  const newTask = Object.fromEntries(formData.entries());
  console.log(newTask);

  const res = await postTasks(newTask);
  if(res.ok){
    revalidatePath("/tasks");
  }
  return res;
}
export async function CreateATask(formData) {

  const newTask = Object.fromEntries(formData.entries());
  console.log(newTask);

  const res = await postTasks(newTask);
  if(res.ok){
    revalidatePath("/tasks");
    redirect("/tasks");
  }
  return res;
}
