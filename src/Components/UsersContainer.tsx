import UserList from "./UserList";
import useUserData from "../hooks/useUserData";

const UsersContainer = () => {
  const { data, error, isLoading } = useUserData();
  const props = {
    isLoading,
    error,
    data,
  };
  return <UserList {...props}></UserList>;
};

export default UsersContainer;
