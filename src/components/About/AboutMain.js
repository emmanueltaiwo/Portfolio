import React from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'
import Card from '../UI/Card'
import CustomSection from '../UI/CustomSection'
import CustomHeaderText from '../UI/CustomHeaderText'
import CustomEmoji from '../UI/CustomEmoji'
import CustomParagraphText from '../UI/CustomParagraphText'

const AboutMain = () => {
  return (
    <Card>
        <CustomSection>
            <CustomHeaderText>ABOUT ME</CustomHeaderText>
            <CustomEmoji>😁</CustomEmoji>
            <CustomParagraphText>Here you will find more information about me, what I do, and my current skills mostly in terms of programming & technology</CustomParagraphText>
        </CustomSection>

        <main className='mt-20 flex flex-col gap-10 ml-5 mr-5 justify-center xl:flex-row md:flex-row sm:flex-row pb-24'>
            <AboutLeft />
            <AboutRight />
        </main>
    </Card>
  )
}

export default AboutMain