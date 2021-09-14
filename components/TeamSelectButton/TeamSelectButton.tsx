import React, { useState } from 'react'
import TeamLogo, { Teams } from '../TeamLogo'
import { colors } from '../SportsTeams'
import clx from 'classnames'

type TeamSelectButtonProps = {
  // The sport from which to select the given team nickname from
  sport: 'nfl' | 'basketball' | 'baseball' | 'hockey' | 'soccer'
  // If appropriate identify which league of the given sport (e.g., sport=soccer, league=mls)
  league?: string
  // The lowercase nickname  of a sports team
  team: Teams
  // A seed value to determine if this button is selected upon initial render
  active?: boolean
  //If disabled user can't change component's internal selected state & hover has no effect
  disabled?: boolean
}

const TeamSelectButton = ({
  sport,
  team,
  active = false,
  disabled,
}: TeamSelectButtonProps) => {
  const [selected, setSelected] = useState(active)
  const { hoverBorderColor, selectedColor } = colors[sport][team]

  const selectorStyles = [
    'relative  h-36 w-36 rounded-3xl flex justify-center items-center',
    'border-2 border-transparent hover:cursor-pointer transition duration-150 ',
    hoverBorderColor,
    selected ? selectedColor : 'bg-gray-100',
  ]
  return (
    <div onClick={() => setSelected(v => !v)} className={clx(selectorStyles)}>
      <div className="h-28 w-28 rounded-3xl flex items-center justify-center overflow-hidden bg-white drop-shadow transition duration-150">
        <TeamLogo logo={team} />
      </div>
    </div>
  )
}

export default TeamSelectButton
