// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>dashboard</div>
//   )
// }

// export default Dashboard;
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { ethers } from "ethers";
import { useAuth } from "@/context/AuthContext";
export default function Home() {
  const { user } = useAuth();
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [disableButton2, setDisableButton2] = useState(true);
  const [disinput, setDisinput] = useState(true);
  const [rv, setRv] = useState("");
  const [emsg, setEmsg] = useState("");
  const submitContact = async (event) => {
    event.preventDefault();
    alert(`So your name is ${event.target.name.value}?`);
  };
  const connectWallet = () => {
    setIsClicked(true);
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChanged([result[0]]);
        });
    } else {
      // setErrorMessage("Install MetaMask please!!");
      alert("Install MetaMask please!!");
    }
  };
  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);
    getUserBalance(accountName);
  };
  const getUserBalance = (accountAddress) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [String(accountAddress), "latest"],
      })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };
  const [isClicked, setIsClicked] = useState(false);
  function handleClick(e) {
    // console.log(e.target.add.value.toString());
    console.log(rv);
    // var a = 0;
    // if (a == 1) {
    //   setDisableButton2(false);
    //   setDisinput(false);
    // }
    // else
    // {
    //   setDisableButton2(true);
    //   setDisinput(true);
    // }
    // Define the data you want to send to the Flask server
    const dataToSend = {
      message:  rv ,
    };

    // Send a POST request to the Flask server endpoint
    fetch("http://127.0.0.1:5000/api/send-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.message=="0")
        {
          setEmsg("Verified");
          setDisableButton2(false);
          setDisinput(false);
        }
        if (data.message == "1")
        {
          setEmsg("Fraudualant Addresss");
        }
        if (data.message == "2")
        {
          setEmsg("Entered address is not a valid ethereum address")
        }
      })
      .catch((error) => console.error(error));

    e.preventDefault();
  }
  async function sendTransaction(e) {
    e.preventDefault();
    // setIsLoading(true);
    let params = [
      {
        from: defaultAccount.toString(),
        to: e.target.add.value.toString(),
        gas: Number(31000).toString(16),
        gasPrice: Number(3000000).toString(16),
        value: Number(e.target.v.value * 1e18).toString(16),
        // value:Number(2).toString(16),
      },
    ];
    await window.ethereum.request({ method: "eth_sendTransaction", params });
    e.target.v.value = "";
    e.target.add.value = "";
  }

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: "rgb(89, 91, 92)",
      }}
    >
      <br></br>
      <center>
        <h1 className={styles.title}>
          Heyy {user.email} Verify before you transfer
        </h1>
      </center>
      <br />
      <br />
      <style jsx global>{`
        body {
          background-color: grey;
        }
        #verifybutton
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #333;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        #verifybutton:hover {
          background-color: #555;
        }
        #verifybutton:active {
          transform: scale(0.95);
        }
        .myInput {
          padding: 10px;
          border: none;
          border-bottom: 2px solid #333;
          background-color: #c6c6c6;
          outline: none;
          margin: 10px;
          border-radius: 5px;
          transition: border-bottom 0.2s ease-in-out;
        }
        .myInput:focus {
          border-bottom: 2px solid green;
          animation: pulse 0.5s ease-in-out;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        #myButton {
          position: fixed;
          top: 10px;
          right: 10px;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #333;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        #myButton:hover {
          background-color: #555;
        }

        #myButton:active {
          transform: scale(0.95);
        }

        ${
          isClicked &&
          `
          #myButton {
            background-color: green;
          }

          #myButton:hover {
            background-color: green;
          }

          #myButton:active {
            transform: none;
          }
        `
        }
        .submitbutton {
          padding: 10px 20px;
          background: #333;
          border: none;
          border-radius: 5px;
          color: #fff;
          font-size: 1rem;
          cursor: pointer;
        }
        ${
          !disinput &&
          `.v:hover {
          background: #555;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .v:focus {
          outline: none;
        }`
        }
        ${
          !disableButton2 &&
          `.submitbutton:hover {
          background: #555;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .submitbutton:focus {
          outline: none;
        }`
        }
      `}</style>
      <button id="myButton" onClick={connectWallet}>
        connect wallet button
      </button>

      <form className="flex flex-col" onSubmit={sendTransaction}>
        <center>
          <input
            id="name"
            htmlFor="name"
            type="text"
            value={defaultAccount}
            size={45}
            readOnly
            className="myInput"
          />
          <br />
          <input
            type="text"
            id="add"
            onChange={(e) => {
              setRv(e.target.value);
              setEmsg("")
              setDisableButton2(true);
              setDisinput(true);
            }}
            className="myInput"
            placeholder="Enter the receiver's address"
            size={45}
          />
          <br />
        </center>

        <center>
          <button id="verifybutton" onClick={handleClick}>
            verify
          </button>
          <br></br>
          <div>{emsg}</div>
        </center>

        <br />
        <center>
          <input
            type="text"
            id="v"
            className="myInput"
            placeholder="Ethers to transfer"
            disabled={disinput}
          />
        </center>
        <br />
        <center>
          <input
            type="submit"
            className="submitbutton"
            value="Submit"
            disabled={disableButton2}
          />
        </center>
      </form>
    </div>
  );
}
