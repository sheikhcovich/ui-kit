/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-new-wrappers */
import React from "react";
import { useCallback, useEffect, useState } from "react";
import Fab from "../Fab/Fab";
import { MyCard } from "../Card/Card.stories";
import Carousel from "./Carousel";

export default {
  title: "Carousel",
  component: Carousel,
};
// export const Parent = () => {
//   const [data, setdata] = useState([]);
//   const [page, setpage] = useState(1);
//   const [_loading, setloading] = useState(false);
//   const prevData = useRef([]);
//   const loadingRef = useRef(false);

//   const setLoading = (loading) => {
//     loadingRef.current = loading;
//     setloading(loading);
//   };

//   let child = useMemo(
//     () =>
//       data?.map((item) => {
//         console.log("play");
//         return (
//           <div style={{ margin: "20px" }}>
//             <img
//               src={item?.thumbnailUrl}
//               alt="salah"
//               height="500px"
//               width="500px"
//               style={{ margin: "auto", display: "block" }}
//             />
//           </div>
//         );
//       }),
//     [data]
//   );

//   const getData = () => {
//     setLoading(true);
//     fetch(
//       `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${4}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setdata(data);
//         setLoading(false);
//       })
//       .catch((e) => console.log(e));
//   };

//   useEffect(() => {
//     prevData.current = [...prevData.current, ...child];
//   }, [data]);
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (loadingRef.current) {
//         console.log("loadingRef");
//         return;
//       }
//       const Scrollable =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const scrolled = window.scrollY;
//       if (scrolled >= Scrollable - 700) setpage((prev) => prev + 1);
//     });

//     return () => {
//       window.removeEventListener("scroll", () => console.log("done"));
//     };
//   }, []);

//   useEffect(() => {
//     getData();
//   }, [page]);
//   return (
//     <div>
//       {prevData.current}
//       {
//         <div
//           style={{
//             height: "500px",
//             width: "500px",
//             margin: "auto",
//             backgroundColor: "black",
//           }}
//         />
//       }

//       <button onClick={() => setpage((prev) => prev + 1)}>Click</button>
//       {/* <button onClick={() => window.scrollTo(pos, 0)}>laoding</button> */}
//     </div>
//   );
// };

export const AsyncronousCarousel = <T extends { id: number }>() => {
  const [data, setdata] = useState<T[]>();
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(false);
  const [errpage, seterrpage] = useState<{ num: number }>({ num: 0 });

  const getData = () => {
    if (page * 4 > 20) return;
    setloading(true);
    fetch(`http://localhost:3005/products?_page=${page}&_limit=${4}`)
      .then((res) => res.json())
      .then((data) => {
        setdata((prev) => (prev ? [...prev, ...data] : [...data]));
        seterrpage({ num: 0 });
        setloading(false);
      })
      .catch((e) => {
        seterrpage({ num: page });
        setloading(false);
      });
  };
  const handlePage = useCallback(
    () => setpage((prev) => (errpage.num ? errpage.num : prev + 1)),
    []
  );

  useEffect(() => {
    getData();
  }, [page]);
  if (!data) return;

  return (
    <div>
      {
        <Carousel
          sx={{
            padding: "5px",
          }}
          responsive={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 5 }}
          data={data}
          itemsCount={20}
          onNextEvent={handlePage}
          loadingComponent={
            <div
              style={{
                backgroundColor: "whitesmoke",
                textAlign: "center",
                height: "100%",
              }}
            />
          }
        >
          <DataRow />
        </Carousel>
      }
    </div>
  );
};

export const DefaultCarousel = () => {
  let data = [
    { id: 1, title: "T-shirt", price: 20 },
    { id: 2, title: "T-shirt", price: 20 },
    { id: 4, title: "T-shirt", price: 20 },
    { id: 5, title: "T-shirt", price: 20 },
    { id: 6, title: "T-shirt", price: 20 },
    { id: 7, title: "T-shirt", price: 20 },
    { id: 8, title: "T-shirt", price: 20 },
    { id: 9, title: "T-shirt", price: 20 },
    { id: 10, title: "T-shirt", price: 20 },
    { id: 11, title: "T-shirt", price: 20 },
    { id: 12, title: "T-shirt", price: 20 },
    { id: 13, title: "T-shirt", price: 20 },
    { id: 14, title: "T-shirt", price: 20 },
    { id: 15, title: "T-shirt", price: 20 },
    { id: 16, title: "T-shirt", price: 20 },
    { id: 17, title: "T-shirt", price: 20 },
    { id: 18, title: "T-shirt", price: 20 },
    { id: 19, title: "T-shirt", price: 20 },
    { id: 20, title: "T-shirt", price: 20 },
    { id: 21, title: "T-shirt", price: 20 },
  ];
  return (
    <Carousel
      itemsCount={20}
      responsive={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
      sx={{
        padding: "5px",
      }}
      data={data}
      left={
        <Fab
          variant="primary"
          style={{
            left: "-38%",
            backgroundColor: "black",
            fontSize: "30px",
          }}
        >
          &lsaquo;
        </Fab>
      }
      right={
        <Fab
          style={{
            right: "-30%",
            backgroundColor: "black",
            color: "white",
            fontSize: "30px",
          }}
        >
          &rsaquo;
        </Fab>
      }
    >
      <DataRow />
    </Carousel>
  );
};
export type itemPropTypes = {
  item?: {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
};
const DataRow = ({ item }: itemPropTypes) => {
  return <MyCard item={item} />;
};
