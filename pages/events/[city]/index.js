import EventsInCity from '@/src/components/EventsInCity';

const eventsInCity = (props) => <EventsInCity {...props} />;

export default eventsInCity;

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');
  const allPaths = events_categories.map((event) => {
    return {
      params: {
        city: event.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params?.city;
  const { allEvents } = await import('/data/data.json');
  const data = allEvents.filter((event) => event.city.toLowerCase() === id);

  return {
    props: {
      data,
    },
  };
}
