"use server"

import { sendContactEmail } from "@/lib/send-email"

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "Please fill in all fields.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    const result = await sendContactEmail({
      name,
      email,
      subject,
      message,
    })

    return result
  } catch (error) {
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    }
  }
}
