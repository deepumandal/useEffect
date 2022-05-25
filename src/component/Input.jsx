import React, { useEffect, useState } from "react";

const Input = () => {
  useEffect(() => {
    fetch("http://localhost:8080/abcd")
      .then((r) => r.json())
      .then((d) => {
        // console.log(d)
        setdata(d);
      });
  }, []);

  const [data, setdata] = useState([]);
  const [querry, setQuerry] = useState("");

  console.log(data);
  return (
    <div>
      <div>
      <input
        onChange={(e) => {
          setQuerry(e.target.value);
        }}
      />
      <button
        onClick={() => {
          //call the api to save the info in db.json file

          fetch("http://localhost:8080/abcd", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              value: querry,
              status: false,
            }),
          })
            .then((r) => r.json())
            .then((d) => {
                setdata([...data,d])
              setQuerry("");
            });
        }}
      >
        
        +
      </button>
      </div>

<div>
    {data.map(e=>{
       return <div key={e.id}> {e.value} -- {e.status} </div>
    })

    }
</div>

    </div>
  );
};

export default Input;
