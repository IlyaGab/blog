import { useUsersApi } from "@core/store";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const UserPage: React.FC = () => {
  const { getUserWithId, userWithId, isLoading } = useUsersApi();
  const { id } = useParams();

  useEffect(() => {
    getUserWithId(id);
  }, [getUserWithId]);

  if (isLoading) return <h1>Loading...</h1>;

  return <div> {JSON.stringify(userWithId)}</div>;
};

export default UserPage;
