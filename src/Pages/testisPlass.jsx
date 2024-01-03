const { data: doctors, isLoading } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
        try {
            const res = await fetch('http://localhost:5000/todoappuser', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
        catch (error) {

        }
    }
});



<div>
<h2 className="text-3xl">Manage Doctors: {doctors?.length}</h2>
      <div className="overflow-x-auto">
          <table className="table w-full">
              <thead>
                  <tr>
                      <th></th>
                      <th>Avatar</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Specialty</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      doctors.map((doctor, i) => <tr key={doctor._id}>
                          <th>{i + 1}</th>
                          <td><div className="avatar">
                              <div className="w-24 rounded-full">
                            
                              </div>
                          </div></td>
                          <td>{doctor.name}</td>
                          <td>{doctor.email}</td>
                          <td>{doctor._id}</td>
             
                          <td>
                          </td>
                      </tr>)
                  }
              </tbody>
          </table>
      </div>
    
  </div>