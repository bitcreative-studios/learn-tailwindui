import React, { useState } from 'react'
import TeamLogo, { Teams } from '../Team Logo/TeamLogo'
import clx from 'classnames'

type TeamSelectButtonProps = {
  // The lowercase nickname  of a sports team
  team: Teams
  // A seed value to determine if this button is selected upon initial render
  active?: boolean
  //If disabled user can't change component's internal selected state & hover has no effect
  disabled?: boolean
}

// TODO: extract selection color from team logo
const colors = {
  bears: {
    hoverBorderColor: 'hover:border-[#C83803]',
    selectedColor: 'bg-[#C83803]',
  },
  bengals: {
    hoverBorderColor: 'hover:border-[#FB4F14]',
    selectedColor: 'bg-[#FB4F14]',
  },
  bills: {
    hoverBorderColor: 'hover:border-[#00338D]',
    selectedColor: 'bg-[#00338D]',
  },
  broncos: {
    hoverBorderColor: 'hover:border-[#FB4F14]',
    selectedColor: 'bg-[#FB4F14]',
  },
  browns: {
    hoverBorderColor: 'hover:border-[#311D00]',
    selectedColor: 'bg-[#311D00]',
  },
  buccaneers: {
    hoverBorderColor: 'hover:border-[#D50A0A]',
    selectedColor: 'bg-[#D50A0A]',
  },
  cardinals: {
    hoverBorderColor: 'hover:border-[#97233F]',
    selectedColor: 'bg-[#97233F]',
  },
  chargers: {
    hoverBorderColor: 'hover:border-[#0080C6]',
    selectedColor: 'bg-[#0080C6]',
  },
  chiefs: {
    hoverBorderColor: 'hover:border-[#FFB81C]',
    selectedColor: 'bg-[#FFB81C]',
  },
  colts: {
    hoverBorderColor: 'hover:border-[#002C5F]',
    selectedColor: 'bg-[#002C5F]',
  },
  cowboys: {
    hoverBorderColor: 'hover:border-[#003594]',
    selectedColor: 'bg-[#003594]',
  },
  dolphins: {
    hoverBorderColor: 'hover:border-[#008E97]',
    selectedColor: 'bg-[#008E97]',
  },
  eagles: {
    hoverBorderColor: 'hover:border-[#004C54]',
    selectedColor: 'bg-[#004C54]',
  },
  falcons: {
    hoverBorderColor: 'hover:border-[#A71930]',
    selectedColor: 'bg-[#A71930]',
  },
  giants: {
    hoverBorderColor: 'hover:border-[#0B2265]',
    selectedColor: 'bg-[#0B2265]',
  },
  jaguars: {
    hoverBorderColor: 'hover:border-[#006778]',
    selectedColor: 'bg-[#006778]',
  },
  jets: {
    hoverBorderColor: 'hover:border-[#125740]',
    selectedColor: 'bg-[#125740]',
  },
  lions: {
    hoverBorderColor: 'hover:border-[#0076B6]',
    selectedColor: 'bg-[#0076B6]',
  },
  niners: {
    hoverBorderColor: 'hover:border-[#B3995D]',
    selectedColor: 'bg-[#B3995D]',
  },
  packers: {
    hoverBorderColor: 'hover:border-[#FFB612]',
    selectedColor: 'bg-[#FFB612]',
  },
  panthers: {
    hoverBorderColor: 'hover:border-[#0085CA]',
    selectedColor: 'bg-[#0085CA]',
  },
  patriots: {
    hoverBorderColor: 'hover:border-[#002244]',
    selectedColor: 'bg-[#002244]',
  },
  raiders: {
    hoverBorderColor: 'hover:border-[#A5ACAF]',
    selectedColor: 'bg-[#A5ACAF]',
  },
  rams: {
    hoverBorderColor: 'hover:border-[#003594]',
    selectedColor: 'bg-[#003594]',
  },
  ravens: {
    hoverBorderColor: 'hover:border-[#241773]',
    selectedColor: 'bg-[#241773]',
  },
  saints: {
    hoverBorderColor: 'hover:border-[#D3BC8D]',
    selectedColor: 'bg-[#D3BC8D]',
  },
  seahawks: {
    hoverBorderColor: 'hover:border-[#69BE28]',
    selectedColor: 'bg-[#69BE28]',
  },
  steelers: {
    hoverBorderColor: 'hover:border-[#FFB612]',
    selectedColor: 'bg-[#FFB612]',
  },
  texans: {
    hoverBorderColor: 'hover:border-[#03202F]',
    selectedColor: 'bg-[#03202F]',
  },
  titans: {
    hoverBorderColor: 'hover:border-[#4B92DB]',
    selectedColor: 'bg-[#4B92DB]',
  },
  vikings: {
    hoverBorderColor: 'hover:border-[#4F2683]',
    selectedColor: 'bg-[#4F2683]',
  },
  washington: {
    hoverBorderColor: 'hover:border-[#773141]',
    selectedColor: 'bg-[#773141]',
  },
}

const TeamSelectButton = ({
  team,
  active = false,
  disabled,
}: TeamSelectButtonProps) => {
  const [selected, setSelected] = useState(active)
  const { hoverBorderColor, selectedColor } = colors[team]

  const selectorStyles = [
    'relative  h-44 w-44 rounded-3xl flex justify-center items-center',
    'border-2 border-transparent hover:cursor-pointer transition duration-150 ',
    hoverBorderColor,
    selected ? selectedColor : 'bg-gray-100',
  ]
  return (
    <div onClick={() => setSelected(v => !v)} className={clx(selectorStyles)}>
      <div className="h-36 w-36 rounded-3xl flex items-center justify-center overflow-hidden bg-white drop-shadow transition duration-150">
        <TeamLogo logo={team} />
      </div>
    </div>
  )
}

export default TeamSelectButton
