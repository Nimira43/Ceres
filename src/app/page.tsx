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
      <div className='lg:px-20 px-5 py-10 bg-gold-light'>
        <div className='flex justify-between '>
          <h1 className='font-bold text-3xl text-primary logo'>Ceres</h1>
          <div className='flex gap-5 items-center'>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className='text-sm text-main font-medium uppercase'
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


