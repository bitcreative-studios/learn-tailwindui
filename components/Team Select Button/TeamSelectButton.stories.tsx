import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TeamSelectButton from './TeamSelectButton'

export default {
  title: 'Elements/Team Select Button',
  component: TeamSelectButton,
  argTypes: {
    team: {
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
} as ComponentMeta<typeof TeamSelectButton>

const Template: ComponentStory<typeof TeamSelectButton> = args => (
  <TeamSelectButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  team: 'falcons',
}

export const Selected = Template.bind({})
Selected.args = {
  team: 'falcons',
  active: true,
}

export const DisabledAndSelected = Template.bind({})
DisabledAndSelected.args = {
  team: 'dolphins',
  active: true,
  disabled: true,
}
