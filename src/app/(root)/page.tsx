import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
     
      
      <Button>Shadcn button</Button>
    </div>
  )
}

export default LandingPage