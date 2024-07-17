import React from "react";

const ProjectsPage = () => {
  const isLoading = true;
  const data = [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((order) => (
        <div key={order.id}>{order.title}</div>
      ))}
    </div>
  );
}

export default ProjectsPage;