"use client";

import axios from "axios";
import { useState, useEffect } from "react";
export default function Table() {
  const [friends, setFriends] = useState([]);
  const [info, setInfo] = useState([]);

  // function to handle new friend
  function handleClick() {
    const username = prompt("Enter codechef username : ");
    if (username) {
      setFriends((prev) => [...prev, username]);
      getData(username);
    }
  }

  // function to retrieve data of friend
  async function getData(frnd) {
    let res = await axios(`https://codechef-api.onrender.com/api/${frnd}`);
    // console.log(frnd);
    if (res.data.username) {
      setInfo((prev) => [...prev, res.data]);
    } else {
      alert("Invalid Username!");
    }
  }

  // to handle sorting
  //const sortedPeopleDescending = people.slice().sort((a, b) => b.age - a.age);
  function handleSort(param) {
    switch (param) {
      case "username":
        console.log("By username");
        var newInfo = info
          .slice()
          .sort((a, b) => b.username.toLowerCase() - a.username.toLowerCase());
        setInfo(newInfo);
        break;
      case "rating":
        console.log("By rating");
        var newInfo = info.slice().sort((a, b) => b.rating - a.rating);
        setInfo(newInfo);
        break;
      case "contest":
        console.log("By contest");
        var newInfo = info.slice().sort((a, b) => b.contests - a.contests);
        setInfo(newInfo);
        break;
      default:
        break;
    }
  }

  // generating rows
  const tableRows = info.map((row, idx) => {
    //console.log(row);
    return (
      <tr
        key={idx}
        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 px-2"
      >
        <td>&nbsp;&nbsp;&nbsp;&nbsp;{idx + 1}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {row.username}
        </th>

        <td className="px-6 py-4">{row.rating[0] == "0" ? 0 : row.rating}</td>
        <td className="px-6 py-4">{row.contests}</td>
      </tr>
    );
  });
  return (
    <>
      <center className="my-12">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Leaderboard
        </h1>
        <br></br>
      </center>
      <div className=" mx-8 my-12 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sr. No
              </th>
              <th scope="col" className="px-6 py-3">
                username
              </th>
              <th scope="col" className="px-6 py-3">
                rating
              </th>
              <th scope="col" className="px-6 py-3">
                contests
              </th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
      <center>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Click here to add new friends
        </button>
      </center>
    </>
  );
}

/*
<button
                  onClick={() => {
                    handleSort("username");
                  }}
                  type="button"
                  class="text-white bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  &nbsp;↑
                </button>
*/
