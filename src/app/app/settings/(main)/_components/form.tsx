'use client'

import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { updateProfile } from '../actions'
import { updateProfileSchema } from '../schema'
import {
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Session } from 'next-auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type ProfileFormProps = {
  defaultValue: Session['user']
}

export function ProfileForm({ defaultValue }: ProfileFormProps) {
  const router = useRouter()
  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: defaultValue?.name ?? '',
      email: defaultValue?.email ?? '',
    },
  })

  const onSubmit = form.handleSubmit(async (data) => {
    console.log(data)
    await updateProfile(data)
    router.refresh()

    toast({
      title: 'Success',
      description: 'Your profile has been updated!',
    })
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Name</CardTitle>
            <CardDescription>This will be your displayed name.</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Email</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input readOnly placeholder="Enter your email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <FormDescription>
              Please, contact flsdesenvolvimento@gmail.com to change the email.
            </FormDescription>{' '}
          </CardFooter>
        </Card>
        <Button disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? 'Saving...' : 'Submit'}
        </Button>
      </form>
    </Form>
  )
}
