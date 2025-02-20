import ButtonSpecials from '@/components/buttons/buttonSpecials'
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <div className='bg-light'>
      <h1 className='text-4xl logo p-5 text-main-dark bg-main-light font-semibold'>Ceres</h1>
      <div className="p-4">
        <ButtonSpecials variant="primary">Login</ButtonSpecials>
        <ButtonSpecials variant="secondary">Register</ButtonSpecials>
        <ButtonSpecials variant="accent">Submit</ButtonSpecials>
        <ButtonSpecials variant="disabled" disabled>Edit Profile</ButtonSpecials>
        <Button>Shadcn</Button>
      </div>
    </div>      
  )
}
