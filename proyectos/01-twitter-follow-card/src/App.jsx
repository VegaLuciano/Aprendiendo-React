import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'ELV_s5',
    name: 'Luciano Vega',
    isFollowing: true
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: true
  },
  {
    userName: 'IbaiLlanos',
    name: 'Ibai Llanos',
    isFollowing: false
  },
  {
    userName: 'Cristiano',
    name: 'Cristiano Ronaldo',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}