"use server";

import { revalidatePath } from "next/cache";
import { postTasks } from "./tasks";

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
    revalidatePath("/path");
  }
  return res;
}
