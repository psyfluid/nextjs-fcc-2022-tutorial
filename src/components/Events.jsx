import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Events = ({ events_categories }) => {
  return (
    <div className="events">
      {events_categories.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`} className="card">
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
          <h2>{event.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Events;
