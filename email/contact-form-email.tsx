import React from 'react'

import {
  Html, Body, Head, Heading, Hr, Container, Preview, Section, Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
  message: string,
  sender: string
}

export default function ContactFormEmail({
  message,
  sender,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from portfolio</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
          <Container>
            <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
              <Heading>
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}