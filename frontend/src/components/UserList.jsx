import { useEffect, useState } from "react";
import { useChat } from "../context/ChatContext";
import { supabase } from "../lib/supabaseClient";

const UserList = () => {
  const { setCurrentChat, setUsers } = useChat();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .neq("id", user.id);

      setProfiles(data);
      setUsers(data);
    };
    fetchUsers();
  }, [setUsers]);

  return (
    <div className="user-list">
      <h3>Doctors</h3>
      <ul>
        {profiles.map((user) => (
          <li key={user.id} onClick={() => setCurrentChat(user.id)}>
            <img
              src={user.avatar_url || "/default-avatar.png"}
              alt={user.username}
              width="40"
              height="40"
            />
            <span>{user.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
