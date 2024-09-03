import Image from 'next/image';
import Link from 'next/link';

export const HomePage = ({ events_categories }) => {
  return (
    <div className="home">
      {events_categories.map((event) => (
        <Link className='card' key={event.id} href={`/events/${event.id}`}>
          <figure>
            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={400}
              className='image'
              // layout="intrinsic"
            />
          </figure>
          <div className="content">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
