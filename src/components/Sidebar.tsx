import colors from 'tailwindcss/colors'
import { DefaultColors } from "tailwindcss/types/generated/colors"

const stopColors = [
  'blue',
  'green',
  'yellow',
  'red',
  'pink',
  'purple',
] as (keyof DefaultColors)[]

const gradient = `linear-gradient(90deg, ${stopColors.map((color, i) => `${colors[color][500]} ${i * 100 / (stopColors.length - 1)}%`).join(', ')})`

function Sidebar() {
  return <>
    <div className="h-px lg:w-px lg:h-auto bg-gray-300 my-8 lg:my-0 lg:mx-8"></div>
    <div className="w-80">
      <p>You&apos;re on a</p>
      <h3 className="text-lg font-bold">2 day streak </h3>
      <div className="h-0.5 flex items-center mt-8 justify-between text-white text-sm pr-6" style={{ background: gradient }}>
        {stopColors.map((color, i) => (
          <div key={color} className={`rounded-full border-2 w-6 h-6 flex justify-center items-center border-${color}-500 bg-${i < 2 ? `${color}-500` : 'white'}`}>
            {i < 2 && "✓"}
          </div>))}
      </div>
    </div>
  </>
}

export default Sidebar