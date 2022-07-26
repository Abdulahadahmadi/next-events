import Head from 'next/head'
import EventList from '../components/events/EventList'
import { getFeaturedEvents } from '../helpers/api-util'

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="Find lots of great events that allow you to evolve..." />
        <link rel="icon" href="/favicon.ico" />
        <body className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></body>
      </Head>


      <EventList items={props.events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}
