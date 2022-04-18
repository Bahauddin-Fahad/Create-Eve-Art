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
            <strong>The Context API</strong> is a way to declare global
            variables that can be passed to the other components. Context
            provides a way to pass data through the component tree without
            passing props down manually at every level. This is the alternative
            to <strong>"prop drilling"</strong> which is used to move props from
            grandparent to parent to child component and so on.
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
            <strong>Semantic Tag</strong> is HTML tag that introduces meaning to
            the web page rather than just presentation.
            <strong> Semantic HTML tags</strong> gives information about the
            contents of the tags that describe more about how the contents look
            on a page. Semantic tags are used when someone want to mark up a
            content block that has an important role in the document structure.
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
            <strong>Inline :</strong> Inline Elements are the elements which
            don't have fixed height and width. And the height and width values
            of Inline Elements can't be set manually. <br />
            <strong>Block : </strong> Block Elements are those which start on a
            new line and take the available full width. The width and height
            values of Block elements can be set manually. <br />
            <strong>Inline-block :</strong> Inline-block Elements are like
            Inline Elements,but the difference is, the height and width values
            can be set manually.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
