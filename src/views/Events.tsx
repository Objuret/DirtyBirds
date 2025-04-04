import { useEvents } from '../hooks/useEvents'

export default function Events() {
  const events = useEvents()
  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map((e) => (
          <li key={e.id}>
            {e.title} – {e.date}
          </li>
        ))}
      </ul>
    </div>
  )
}

