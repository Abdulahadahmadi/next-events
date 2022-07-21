import Head from 'next/head'
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/EventList'


export default function Home() {
  const featuredEvents = getFeaturedEvents()
  return (
    <div>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <body className='bg-gradient-to-r from-violet-500 to-fuchsia-500'></body>
      </Head>

      
      <EventList items={featuredEvents} />
      
    </div>
  )
}
