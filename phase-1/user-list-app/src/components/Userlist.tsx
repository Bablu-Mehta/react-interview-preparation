import { useEffect, useState } from "react";
import "./userlist.css";

interface UserData {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
    bs: string;
  };
}

const Userlist = () => {
  const [userList, setUserList] = useState<UserData[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUserList = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const parsedData = await response?.json();
      setUserList(parsedData);
      setLoading(false);
    } catch (error) {
      console.error("something went wrong while fetching the user list", error);
      setError("Failed to fetch user list");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);
  return (
    <>
    {!loading && !error && userList.length === 0 && (
  <div className="empty">No users found.</div>
)}
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <table aria-label="User List" className="table_container">
            <caption className="heading">User List</caption>
            <thead className="thead">
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
              </tr>
            </thead>
            {userList?.length > 0 &&
              userList?.map((user, index) => {
                return (
                  <tr key={user?.id}>
                    <td>{index + 1}</td>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.company?.name}</td>
                  </tr>
                );
              })}
          </table>
        </>
      )}
    </>
  );
};

export default Userlist;
