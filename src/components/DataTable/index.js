import React from "react";
import PropTypes from "prop-types";

const DataTable = (props) => {
  return (
    <table className={props.className}>
      {props.children}
    </table>
  );
};
DataTable.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string
  };
export default DataTable;