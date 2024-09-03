import Event from '@/src/components/Event';

const event = (props) => <Event {...props} />;

export default event;

export const getStaticPaths = async () => {
  const { allEvents } = await import('/data/data.json');

  const allPaths = allEvents.map((event) => {
    return {
      params: {
        city: event.city,
        id: event.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context?.params?.id;
  const { allEvents } = await import('/data/data.json');
  const event = allEvents.find((event) => event.id === id);

  return {
    props: {
      event,
    },
  };
};
