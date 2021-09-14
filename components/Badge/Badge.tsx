import clx from 'classnames'
/* This example requires Tailwind CSS v2.0+ */
type BadgeProps = {
  text: string
  size: 'small' | 'large'
  variant: string
}

// TODO: abstract color classes for both background and text into variant prop

const Badge = ({ text, size, variant }: BadgeProps) => {
  const spanClassNames = [
    'inline-flex items-center py-0.5 font-medium bg-indigo-100 text-indigo-800',
    size === 'large' ? 'px-2.5 rounded-md text-sm' : 'px-2 rounded text-xs',
  ]
  const svgClassNames = [
    'mr-1.5 h-2 w-2 text-indigo-400',
    size === 'large' ? '-ml-0.5' : '',
  ]
  return (
    <>
      <span className={clx(spanClassNames)}>
        <svg
          className={clx(svgClassNames)}
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
        {text}
      </span>
    </>
  )
}
export default Badge
