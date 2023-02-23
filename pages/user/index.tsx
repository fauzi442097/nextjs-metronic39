import React, {useState, memo, useCallback} from 'react'

const index = () => {
   const initialUser = ['Muhammad', 'Alfan', 'Jauhari'];
   const [users, setUser] = useState<string[]>(initialUser);
   const [text, setText] = useState<string>();

   const handleDelete = useCallback((name: string) => {
      setUser((prevUser) => prevUser.filter((user) => user !== name));
   }, [users]);

   function refill() {
      setUser(initialUser);
   }

   return (
      <>
         {users.length > 0 ? (
            <User users={users} handleDelete={handleDelete} />
         ) : (
            <button onClick={refill}>Refill</button>
         )}
         <input type="text" onChange={(e) => setText(e.target.value)} />
      </>
   );
}

type UserProps = {
   users: string[];
   handleDelete: (name: string) => void;
 };
 
 // Komponen User di sini menggunakan High Order Component React.memo() untuk mengetahui apakah ada perubahan props pada komponen User yang berarti komponent User menggunakan Memoization
 const User = memo(({users, handleDelete}: UserProps) => {
   // cek jika komponen user dirender.
   console.log('User component render!');
   
 
   return (
      <>
         { 
            users.map((user) => (
               <li key={user} style={{ display: 'flex' }}>
                  {user}
                  <button onClick={() => handleDelete(user)}>Delete user</button>
               </li>
            ))
         }
      </>
   )

 });

export default index