import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from '@/components/dashboard/dashboard-page'

export default function Page() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Tasks</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>Tasks</DashboardPageMain>
    </DashboardPage>
  )
}
