import React from 'react'
import { auth } from '@/services/auth'
import UserInfo from './_components/user-info'

const Page = async () => {
  const session = await auth()

  return (
    <main className="flex w-full h-screen">
      <div className="w-full h-full flex items-center justify-center">
        <UserInfo user={session?.user} />
      </div>
    </main>
  )
}

export default Page
