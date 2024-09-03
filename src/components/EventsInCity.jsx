import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EventsInCity = ({ data }) => {
  return (
    <div className="events-in-city">
      <h1>EVENTS IN {data[0].city.toUpperCase()}</h1>

      <div className="content">
        {data.map((event) => (
          <div key={event.id} className="card">
            <Link href={`/events/${event.city}/${event.id}`}>
              <figure>
                <Image
                  src={event.image}
                  alt={event.title}
                  width={550}
                  height={550}
                  className="image"
                  // layout="intrinsic"
                />
              </figure>
              <h2>{event.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsInCity;
