import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>Dirty Birds Header</header>
      <main>{children}</main>
      <footer>© 2025 Dirty Birds</footer>
    </div>
  )
}
