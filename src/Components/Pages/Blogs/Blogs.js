import React from "react";
import { Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container>
      <h2 className="text-primary text-start p-2">
        1. Difference between Node.JS and Javascript :
      </h2>
      <h6 className="py-2 text-start">
        Javascript is a programming language that is used for writing scripts on
        the website where NodeJS is a Javascript runtime environment. Javascript
        can only be run in the browsers where We can run Javascript outside the
        browser with the help of NodeJS. Javascript is basically used on the
        client-side but NodeJs is mostly used on the server-side. Javascript is
        capable enough to add HTML and play with the DOM but Nodejs does not
        have capability to add HTML tags. Javascript can run in any browser
        engine as like JS core in safari and Spidermonkey in Firefox where V8 is
        the Javascript engine inside of node. js that parses and runs
        Javascript. Javascript is used in frontend development but Nodejs is
        used in server-side development. Javascript is the upgraded version of
        ECMA script that uses Chrome's V8 engine written in C++ where Nodejs is
        written in C, C++ and Javascript.
      </h6>
      <h2 className="text-primary text-start p-2">
        2. When should we use NodeJS and when should we use MongoDB?
      </h2>
      <h6 className="py-2 text-start">
        MongoDB and NodeJS are two different technologies. MonogDB is a database
        system which gives you a chance to efficiently store documents in a
        database and to perform operations like data updates, or to search
        documents by some criterias.Nodejs is a Javascript engine that you can
        write any application you want with. It runs your Javascript code. Most
        commonly, it is used to build servers that can respond to web requests,
        though it can be used for lots of other types of code too.MongoDB is a
        database engine. Code within some application or server uses MongoDB to
        save, query or update data in a database. There are many web servers
        built with nodejs that will then use MongoDB for storing data.These two
        technologies are for different parts of a typical web server system. You
        don't substitute one for the other. Instead, you can use them together.
      </h6>
      <h2 className="text-primary text-start p-2">
        3. Difference between SQL and NoSQL Databases:
      </h2>
      <h6 className="py-2 text-start">
        SQL databases are relational, NoSQL databases are non-relational.SQL
        databases use structured query language and have a predefined schema,
        NoSQL databases have dynamic schemas for unstructured data.SQL databases
        are vertically scalable, while NoSQL databases are horizontally
        scalable.SQL databases are table-based, while NoSQL databases are
        document, key-value, graph, or wide-column stores.SQL databases are
        better for multi-row transactions, while NoSQL is better for
        unstructured data like documents or JSON.
      </h6>
      <h2 className="text-primary text-start p-2">
        4. What is the purpose of "jwt" and how does it work ?
      </h2>
      <h6 className="py-2 text-start">
        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
        compact and self-contained way for securely transmitting information
        between parties as a JSON object. This information can be verified and
        trusted because it is digitally signed.
      </h6>
      <h6 className="py-2 text-start">
        In authentication, when the user successfully logs in using their
        credentials, a JSON Web Token will be returned. Since tokens are
        credentials, great care must be taken to prevent security issues. In
        general, you should not keep tokens longer than required.Whenever the
        user wants to access a protected route or resource, the user agent
        should send the JWT, typically in the Authorization header using the
        Bearer schema.The server's protected routes will check for a valid JWT
        in the Authorization header, and if it's present, the user will be
        allowed to access protected resources. If the JWT contains the necessary
        data, the need to query the database for certain operations may be
        reduced, though this may not always be the case.
      </h6>
    </Container>
  );
};

export default Blogs;
