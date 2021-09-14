import React, { useState } from 'react'
import TeamLogo, { Teams } from '../Team Logo/TeamLogo'
import clx from 'classnames'

type TeamSelectButtonProps = {
  team: Teams
  active?: boolean
}
const TeamSelectButton = ({ team, active }: TeamSelectButtonProps) => {
  const [selected, setSelected] = useState(active)
  const selectorStyles = [
    'relative  h-44 w-44 rounded-full bg-gray-50 flex justify-center items-center border-2 border-transparent hover:cursor-pointer hover:border-yellow-300 transition duration-150 ',
    selected ? 'bg-yellow-200' : '',
  ]
  const containerStyles = [
    'h-36 w-36 rounded-full flex items-center justify-center overflow-hidden bg-white drop-shadow transition duration-150',
    selected ? 'bg-yellow-50' : '',
  ]
  return (
    <div onClick={() => setSelected(v => !v)} className={clx(selectorStyles)}>
      <div className={clx(containerStyles)}>
        <TeamLogo logo={team} />
        {/*<svg*/}
        {/*  className="h-full w-full text-gray-300"*/}
        {/*  fill="currentColor"*/}
        {/*  viewBox="0 0 24 24"*/}
        {/*>*/}
        {/*  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />*/}
        {/*</svg>*/}
      </div>
    </div>
  )
}

export default TeamSelectButton
