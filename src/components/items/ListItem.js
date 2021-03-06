import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  return (
    <Fragment>
      <tr>
        <td>
          <Link to={`/show-item/${item.id}`}>{item.item_name}</Link>
        </td>
        <td>{item.quantity}</td>
        <td>{item.item_price}</td>
      </tr>
    </Fragment>
  );
};

ListItem.prototype = {
  item: PropTypes.object.isRequired
};

export default ListItem;
