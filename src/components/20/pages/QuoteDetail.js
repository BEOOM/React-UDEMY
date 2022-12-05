import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { Fragment } from "react";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
