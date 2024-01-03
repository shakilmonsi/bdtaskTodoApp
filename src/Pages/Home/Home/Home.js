import React from "react";

import PostData from "../../PostData";
import DeleteData from "../../DeleteData";
import UpdeteData from "../../UpdeteData";
import DataGet from "../../DataGet";

const Home = () => {
  return (
    <div className="mx-5">
      <PostData></PostData>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider ">OR</div>
      </div>
      <DeleteData></DeleteData>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">OR</div>
      </div>
      
      <DataGet></DataGet>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider ">OR</div>
      </div>


    </div>
  );
};

export default Home;
