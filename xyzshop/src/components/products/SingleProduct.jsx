import React from "react";
import { Grid, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
const SingleProduct = (props) => {
  const { product, onDelete, history } = props;
  console.log(props);
  return (
    <Grid item xs={4}>
<h1>{product.novel_name}{" "}</h1>
      <p>{product.author_name}</p>
      <p>{product.price}</p>
      <p>{product.genre}</p>

        {userService.isAdmin() && (
          <>
            <Button
              variant="outlined"
              color="secondary"
              onClick={(e) => {
                console.log("navigate to update");
                history.push("/products/update/" + product._id);
              }}
            >
              Edit
            </Button>{" "}
            <Button
              variant="outlined"
              color="#000000"
              onClick={(e) => {
                productService
                  .deleteProduct(product._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
          </>
        )}


      <hr />
    </Grid>
  );
};

export default withRouter(SingleProduct);
