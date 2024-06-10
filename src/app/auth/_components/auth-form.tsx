'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signIn } from 'next-auth/react'

import { useForm } from "react-hook-form"
import { toast } from "@/components/ui/use-toast"

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      console.log(data)
      await signIn('email', { email: data.email, redirect: false })
      toast({
        title: 'Magic link sent',
        description: 'Check your e-mail for the magic link to login'
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error has occurred. Please try again.'
      })
    }
  })

  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
        <div className="space-y-4">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">
              {"Enter your e-mail below and we'll send you a magic link to log in."}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input {...form.register('email')} id="email" type="email" placeholder="m@example.com" required />
            </div>
            <Button type="submit" className="w-full">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}