"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // You can customize this once you verify your domain
      to: ["rakshit1505@gmail.com"],
      subject: `Portfolio Contact: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #1a202c; margin-top: 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4a5568; width: 80px;">Name:</td>
                  <td style="padding: 8px 0; color: #2d3748;">${formData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Email:</td>
                  <td style="padding: 8px 0; color: #2d3748;">
                    <a href="mailto:${formData.email}" style="color: #667eea; text-decoration: none;">${formData.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Subject:</td>
                  <td style="padding: 8px 0; color: #2d3748;">${formData.subject}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #1a202c; margin-top: 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Message:</h3>
              <div style="background: #f7fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #667eea;">
                <p style="line-height: 1.6; color: #2d3748; margin: 0; white-space: pre-wrap;">${formData.message}</p>
              </div>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e6fffa; border-radius: 8px; border-left: 4px solid #38b2ac;">
              <p style="margin: 0; color: #234e52; font-size: 14px;">
                <strong>Quick Actions:</strong><br>
                • Reply directly to this email to respond to ${formData.name}<br>
                • Add ${formData.email} to your contacts<br>
                • This message was sent from your portfolio website
              </p>
            </div>
          </div>
          
          <div style="background: #2d3748; padding: 20px; border-radius: 0 0 10px 10px; text-align: center;">
            <p style="color: #a0aec0; margin: 0; font-size: 12px;">
              Sent from Rakshit Khandelwal's Portfolio Website<br>
              <a href="https://yourportfolio.com" style="color: #667eea; text-decoration: none;">Visit Portfolio</a>
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Reply to this email to respond directly to ${formData.name}
Sent from your portfolio website
      `,
      replyTo: formData.email, // This allows you to reply directly to the sender
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        success: false,
        message: "Failed to send message. Please try again or contact me directly.",
      }
    }

    console.log("Email sent successfully:", data)
    return {
      success: true,
      message: "Thank you for your message! I'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
