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
    <div>
      <div className='lg:px-20 px-5 py-10'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-4xl text-primary logo'>Ceres</h1>
          <div className='flex gap-5 items-center'>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className='text-sm text-main hover:text-main-dark font-medium uppercase transition-colors duration-500 cursor-pointer'
              >
                {item.name}
              </div>
            ))}
            <Button className='uppercase'>Login</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage


