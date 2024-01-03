import { useLoaderData } from "react-router-dom";

const UpdeteData = () => {
  const loaderData = useLoaderData();
  console.log("skdkksdkdkkd", loaderData);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = {name, email}
    console.log(name, email);

    fetch (`http://localhost:5000/todoapp/${loaderData._id}`, {
      method: "PUT",
        headers: {
          "content-type": "application/json"
        },
       body: JSON.stringify(updateUser)   
    })

    .then(res=>res.json())
    .then(data=> {
      
      console.log("data", data)
      if(data.modifiedCount > 0){
        alert("user updated successfully")
      }
    
    })
  };

  return (
    <div>
      <h2>Update Todo {loaderData?.name}</h2>
      <h2>Update Todo {loaderData?._id}</h2>
      <h4>upd</h4>

      <form onSubmit={handleUpdate}>
        <input
          className="mt-6"
          type="text"
          name="name" // Corrected from nema to name
          defaultValue={loaderData?.name}
          id=""
        />
        <br />
        <input
          className="mt-6"
          type="text"
          name="email" // Corrected from nema to email
          defaultValue={loaderData?.email}
          id=""
        />
        <br />
        <input type="submit" value="update" />
      </form>
    </div>
  );
};

export default UpdeteData;
