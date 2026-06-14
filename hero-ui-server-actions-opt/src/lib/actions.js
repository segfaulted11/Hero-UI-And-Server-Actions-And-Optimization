"use server";

export async function AddATask(formData) {
  console.log("hlw form data");

  const name = formData.get("name");
  const description = formData.get("description");
  const assignee = formData.get("assignee");

  console.log({ name, description, assignee });
}