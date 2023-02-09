import React, { useRef, useState } from 'react';
import './App.css';
import { httpBatchLink, createTRPCProxyClient } from '@trpc/client';
import { AppRouter } from '../../server/src/AppRouter';

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4000/trpc',
    }),
  ],
});

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<any>(null);

  const fetchUserByIdHandler = async () => {
    const results = await client.users.getUserById.query({
      id: inputRef.current?.value as string,
    });

    console.log(results);

    setUser(results);
  };

  function User() {
    return (
      <>
        <input type='text' placeholder='Enter ID of user.' ref={inputRef} />
        <button onClick={() => fetchUserByIdHandler()}>Click to get user details!</button>
        <br />
        <br />
        <h3>User Details:</h3>
        <p>id: {user ? user.id : 'No user found'}</p>
        <p>name: {user ? user.name : 'No user found'}</p>
      </>
    );
  }

  return (
    <div className='App'>
      <User />
    </div>
  );
}

export default App;
