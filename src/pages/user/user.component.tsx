import { useUsersApi } from "@core/store";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const UserPage: React.FC = () => {
  const { getUserById, cleanCurrentUser, currentUser, isLoading } = useUsersApi();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getUserById(id);
    }
    return () => {
      cleanCurrentUser();
    };
  }, [getUserById, cleanCurrentUser, id]);

  if (isLoading) return <h1>Loading...</h1>;

  return <div> {JSON.stringify(currentUser)}</div>;
};

export default UserPage;
