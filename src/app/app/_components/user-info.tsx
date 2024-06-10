'use client'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import React from 'react'

type Props = {
  user: Session['user']
}

const UserInfo = ({ user }: Props) => {
  if (!user) return

  return (
    <div className='size-full flex flex-col gap-2 items-center justify-center'>
      <Avatar className='flex items-center justify-center'>
        <AvatarFallback>
          U
        </AvatarFallback>
      </Avatar>
      <span>{user?.email}</span>
      <Button variant="outline" onClick={() => signOut()}>Sign out</Button>
    </div>
  )
}

export default UserInfo