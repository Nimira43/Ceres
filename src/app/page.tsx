import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function page() {
  return (
    <div className='bg-light'>
      <h1 className='text-4xl logo p-5 text-main bg-gold font-semibold'>Ceres</h1>
      <div className='p-4'>
        <Button>Shadcn</Button>
        <Input placeholder='Search...'/>
      </div>
    </div>      
  )
}
