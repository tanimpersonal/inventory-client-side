import React from "react";

const Blogs = () => {
  return (
    <div className="px-5">
      <div className="first">
        <h1 className="text-2xl">JS VS NODEJS</h1>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6">
            <div class="py-2 inline-block w-100 sm:px-6">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        JS
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        NodeJS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        JavaScript is a programming language. It is running in
                        any web browser with a proper browser engine.
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        It is an interpreter and environment for JavaScript with
                        some specific useful libraries which JavaScript
                        programming can use separately.
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        Mainly using for any client-side activity for a web
                        application, like possible attribute validation or
                        refreshing the page in a specific interval or provide
                        some dynamic changes in web pages without refreshing the
                        page.
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        It mainly used for accessing or performing any
                        non-blocking operation of any operating system, like
                        creating or executing a shell script or accessing any
                        hardware-specific information or running any backend
                        job.
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        JavaScript running any engine like (FireFox), JavaScript
                        Core (Safari), V8 (Google Chrome).
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        Node JS only run in a V8 engine which mainly used by
                        google chrome.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second my-5">
        <h1 className="text-2xl">When Node?</h1>
        <p>
          I will use node primarily for non-blocking, event-driven servers, due
          to its single-threaded nature.
        </p>
        <h1 className="text-2xl">When MongoDB?</h1>
        <p>
          I will use MongoDB when my data is document-centric and doesn't fit
          well into the schema of a relational database, when you need to
          accommodate massive scale.
        </p>
      </div>
      <div className="third my-5">
        <h1 className="text-2xl">SQL VS NOSQL</h1>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6">
            <div class="py-2 inline-block w-100 sm:px-6">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        SQL
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        NOSQL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        SQL databases are primarily called RDBMS or Relational
                        Databases
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        NoSQL databases are primarily called as Non-relational
                        or distributed database
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        SQL databases are table based databases
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        NoSQL databases can be document based, key-value pairs,
                        graph databases
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        Structured query language (SQL)
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        No declarative query language
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
