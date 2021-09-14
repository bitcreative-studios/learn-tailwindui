import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Badge from './Badge'

export default {
  title: 'Elements/Badge',
  component: Badge,
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />

export const Large = Template.bind({})
Large.args = {
  color: 'red',
  size: 'large',
  text: 'Large',
}

export const Small = Template.bind({})
Small.args = {
  color: 'red',
  size: 'small',
  text: 'small',
}
