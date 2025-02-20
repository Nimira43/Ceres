import ButtonSpecials from '@/components/buttons/buttonSpecials'

export default function page() {
  return (
    <div className='bg-light'>
      <h1 className='text-4xl logo p-5 text-main-dark bg-grey-light'>NatuFood</h1>
      <div className="p-4">
        <ButtonSpecials variant="primary">Primary Button</ButtonSpecials>
        <ButtonSpecials variant="secondary">Secondary Button</ButtonSpecials>
        <ButtonSpecials variant="accent">Accent Button</ButtonSpecials>
        <ButtonSpecials variant="disabled" disabled>Disabled Button</ButtonSpecials>
      </div>
    </div>      
  )
}
