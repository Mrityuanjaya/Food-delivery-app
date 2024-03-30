import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState({});
  // useEffect(() => {
  //   (async () => {
  //     setData(
  //       await axios.get(
  //         "http://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //       )
  //     );
  //     console.log(data);
  //   })();
  // }, []);
  return <div>Home Page</div>;
};

export default HomePage;
