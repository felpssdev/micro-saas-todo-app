import React from 'react'
import { ProfileForm } from './_components/form'
import { auth } from '@/services/auth'

const Settings = async () => {
  const session = await auth()

  return <ProfileForm defaultValue={session?.user} />
}

export default Settings
