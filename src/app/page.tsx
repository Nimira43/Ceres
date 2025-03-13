import { Button } from '@/components/ui/button'

function HomePage() {
  const menuItems = [
    {
      name: 'Home',
      path: '/',     
    },
    {
      name: 'Services',
      path: '/',     
    },
    {
      name: 'Contact',
      path: '/',     
    },
  ]

  return (
    <div className='lg:px-20 px-5 py-10'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-4xl text-primary logo'>Ceres</h1>
        <div className='flex gap-5 items-center'>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className='text-sm text-main hover:text-support font-medium uppercase transition-colors duration-500 cursor-pointer'
            >
              {item.name}
            </div>
          ))}
          <Button className='uppercase'>Login</Button>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[70vh] items-center'>
        <div className='col-span-1'>
          <div>
            <h1 className='text-4xl font-medium text-main'>Ceres Healthly Foods</h1>
            <p>Discover the essence of health and flavour at Ceres. Explore our nutritious, organic food range, crafted with care to nourish your body and soul. Begin your journey to vitality today.</p>
          </div>
        </div>
        <div className='col-span-1 flex justify-end'>
          <img
            src='./logo.png'
            className='w-auto h-96 object-contain border-8 border-main rounded-full'
            alt='logo'
          />
        </div>

      </div>
    </div>
  )
}

export default HomePage


