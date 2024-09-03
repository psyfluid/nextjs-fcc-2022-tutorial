import Events from '@/src/components/Events';

const events = (props) => <Events {...props} />;

export default events;

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      events_categories,
    },
  };
}
