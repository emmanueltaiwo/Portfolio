import React from 'react'
import Card from '../UI/Card'
import CustomSection from '../UI/CustomSection'
import ContactForm from './ContactForm'
import CustomHeaderText from '../UI/CustomHeaderText'
import CustomEmoji from '../UI/CustomEmoji'
import CustomParagraphText from '../UI/CustomParagraphText'

const ContactMain = () => {
  return (
    <Card>
        <CustomSection>
            <CustomHeaderText>CONTACT ME</CustomHeaderText>
            <CustomEmoji>📞</CustomEmoji>
            <CustomParagraphText>Feel free to contact me by submitting the form below, and I&apos;ll get back to you as soon as possible</CustomParagraphText>
        </CustomSection>
        <main className='mt-10 ml-2 mr-2 xl:ml-10 xl:mr-10 md:ml-10 md:mr-10 pb-24'>
            <ContactForm />
        </main>
    </Card>
  )
}

export default ContactMain