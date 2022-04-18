import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="font-bold text-center mt-4">Question And Answer</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 gap-10">
        <div className="border-2 rounded-lg shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px]">
          <h5 className="font-bold m-2 p-2 mb-3 rounded-md bg-[#212529] text-white h-24 flex items-center justify-center">
            Question 1 : Difference between Authentication and Authorization?
          </h5>
          <span className="text-lg flex justify-start font-bold px-3">
            Answer:
          </span>
          <h6 className="text-justify px-5 pb-3">
            <strong className="text-lg">Authentication :</strong> Authentication
            is to verify the data of a user to give him the access for the next
            process of website benefits. <br />
            <strong className="text-lg">Authorization :</strong> Authorization
            is to give a user permission to use resources or to do further
            activities.
            <br />
            <strong>Simply,</strong> Authentication is the process of verifying
            who a user is, while Authorization is the process of verifying what
            they have access to.
          </h6>
        </div>
        <div className="border-2 rounded-lg shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px]">
          <h5 className="font-bold m-2 p-2 mb-3 rounded-md bg-[#212529] text-white flex items-center justify-center h-24">
            Question 2 : Why do we use Firebase? What are the other options
            beside Firebase for Authentication?
          </h5>
          <span className="text-lg flex justify-start font-bold px-3">
            Answer:
          </span>
          <h6 className="text-justify px-5 pb-3">
            Firebase is less technical and less time consuming than writing
            complete backend code for dynamic apps. If developer ultimately want
            to host and manage an app in the cloud and can also consider this
            tool. Firebase is serverless, so there is no worry about cloud
            server configuration technology. As a Google Cloud service,
            developer can also access other Google products and features such as
            Google Drive and spreadsheets.
            <br />
            <strong className="text-left">Some firebase Alternatives : </strong>
            Parse, Back4App, AWS Amplify, Kuzzle, Couchbase, NativeScript.
          </h6>
        </div>
        <div className="border-2 rounded-lg shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px]">
          <h5 className="font-bold m-2 p-2 mb-3 rounded-md bg-[#212529] text-white  flex items-center justify-center h-24">
            Question 3 : What are the other uses of Firebase beside
            Authentication?
          </h5>
          <span className="text-lg flex justify-start font-bold px-3">
            Answer:
          </span>
          <h6 className="text-justify px-5 pb-3 max-h-46 overflow-auto">
            <strong>Firebase Analytics :</strong> Firebase Analytics presents
            data about the user behavior of applications and suggests the
            improvement of the performance.
            <br />
            <strong>Cloud Messaging :</strong> Cloud Messaging is a messaging
            tool that helps the companies to receive and deliver messages on
            applications at no cost.
            <br />
            <strong>Realtime Database :</strong> Realtime Database is a cloud
            hosted NoSQL Database that stores and syncs data of the users in
            real time. <br />
            <strong>Test Lab :</strong> Test Lab is an app testing
            infrastructure by which developers can test the applications easily.
            <br />
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
