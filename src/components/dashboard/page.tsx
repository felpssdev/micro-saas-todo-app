export type PageGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function Page() {
  return <h1>Page</h1>
}

export function PageHeader() {
  return <h1>PageHeader</h1>
}

export function PageHeaderTitle() {
  return <h1>PageHeaderTitle</h1>
}

export function PageHeaderNav() {
  return <h1>PageHeaderNav</h1>
}

export function PageMain() {
  return <h1>PageMain</h1>
}
