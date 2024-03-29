import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss'; 

type IPagination = {
  onChangePage: (e:number) => void;
};

const Pagination:React.FC<IPagination> = React.memo(({onChangePage}) => {
  return (
    <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    onPageChange={(e) => onChangePage(e.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={2}
    previousLabel="<"
    renderOnZeroPageCount={null}
  />
  )
})

export default Pagination  