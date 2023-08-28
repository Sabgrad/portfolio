'use server'

import { getErrorMessage, validateString } from "@/utils/actions-utils"
import { Resend } from "resend"
import ContactFormEmail from "@/email/contact-form-email"
import React from "react"

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async (formData: FormData) => {
  const sender = formData.get('email')
  const message = formData.get('message')

  if (!validateString(sender, 256)) {
    return {
      error: 'Invalid sender email'
    }
  }

  if (!validateString(message, 1024)) {
    return {
      error: 'Invalid sender email'
    }
  }

  let data

  try {
    data = await resend.emails.send({
      from: 'Contact Form<onboarding@resend.dev>',
      to: 'andrey.zhmudenko1@gmail.com',
      subject: 'Message from contact form',
      reply_to: sender as string,
      // text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        sender: sender as string,
      }),

    })
  } catch (err: unknown) {
    return {
      err: getErrorMessage(err)
    }
  }

  return {
    data
  }
}