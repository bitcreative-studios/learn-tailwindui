import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TeamLogo from './TeamLogo'

export default {
  title: 'Elements/Team Logo',
  component: TeamLogo,
  argTypes: {
    logo: {
      options: [
        'bears',
        'bengals',
        'bills',
        'broncos',
        'browns',
        'buccaneers',
        'cardinals',
        'chargers',
        'chiefs',
        'colts',
        'cowboys',
        'dolphins',
        'eagles',
        'falcons',
        'giants',
        'jaguars',
        'jets',
        'lions',
        'niners',
        'packers',
        'panthers',
        'patriots',
        'raiders',
        'rams',
        'ravens',
        'saints',
        'seahawks',
        'steelers',
        'texans',
        'titans',
        'vikings',
        'washington',
      ],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof TeamLogo>

const Template: ComponentStory<typeof TeamLogo> = args => <TeamLogo {...args} />

export const Default = Template.bind({})
Default.args = {
  logo: 'broncos',
}

export const Small = Template.bind({})
Small.args = {
  logo: 'cardinals',
  size: 48,
}
