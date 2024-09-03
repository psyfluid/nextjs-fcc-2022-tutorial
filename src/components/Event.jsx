import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

const Event = ({ event }) => {
  const emailInput = useRef();
  const router = useRouter();

  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = emailInput.current.value;
    const eventId = router?.query?.id;

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const error = new Error(
          errorData.message || `An error occurred: ${response.status} - ${response.statusText}`
        );
        error.response = response;
        throw error;
      }

      const data = await response.json();
      setMessage(data.message);
      emailInput.current.value = '';
    } catch (error) {
      setMessage(error.message);
      emailInput.current.value = '';
      console.error(error);
    }
  };

  return (
    <div className="event">
      <h1>{event.title}</h1>
      <Image src={event.image} alt={event.title} width={700} height={700} className="image" />
      <p>{event.description}</p>
      <form onSubmit={onSubmit} className="registration">
        <label htmlFor="email">Get registered for this event!</label>
        <input
          ref={emailInput}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Event;
