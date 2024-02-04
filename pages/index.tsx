// import { Stack } from '@chakra-ui/react'
// import AssetsHomeSection from 'components/HomeSection/Assets'
// import CollectionsHomeSection from 'components/HomeSection/Collections'
// import FeaturedHomeSection from 'components/HomeSection/Featured'
// import ResourcesHomeSection from 'components/HomeSection/Resources'
import UsersHomeSection from 'components/HomeSection/Users'
import { NextPage } from 'next'
import { useCallback, useState } from 'react'
import Head from '../components/Head'
import useCart from '../hooks/useCart'
import LargeLayout from '../layouts/large'


type Props = {
  now: number
}
const HomePage: NextPage<Props> = ({ now }) => {
  const [date, setDate] = useState(new Date(now))
  const updateDate = useCallback(() => setDate(new Date()), [])
  useCart({ onCheckout: updateDate })
  return (
    <LargeLayout>
      <Head />
      
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to Our Platform
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Experience the best platform for your needs.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              {/* <Input className="max-w-lg flex-1" placeholder="Enter your name" type="text" />
              <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
              <Button type="submit">Subscribe</Button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
      {/* <Stack spacing={12}>
        <FeaturedHomeSection date={date} />
        <CollectionsHomeSection />
        <UsersHomeSection />
        <AssetsHomeSection date={date} />
        <ResourcesHomeSection />
      </Stack> */}
    </LargeLayout>
  )
}

export default HomePage
