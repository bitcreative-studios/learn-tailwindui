/* This example requires Tailwind CSS v2.0+ */
import TeamSelectButton from '../components/Team Select Button/TeamSelectButton'

const GameSelectCard = () => (
  <div className="container mx-auto mt-8">
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 max-w-4xl">
      <div className="px-4 py-5 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="px-4 py-5 sm:p-6">
        {/* Content goes here */}
        <div className="px-20 py-10 grid grid-cols-3 gap-4 justify-items-center items-center">
          <TeamSelectButton team="colts" active={false} />
          <p className="p-4 font-display font-black text-5xl text-gray-800 uppercase text-center">
            at
          </p>
          <TeamSelectButton team="saints" active={true} />
        </div>
      </div>
      <div className="px-4 py-4 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  </div>
)
export default GameSelectCard
