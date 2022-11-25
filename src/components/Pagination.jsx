import React from 'react';
import ReactPaginate from 'react-paginate'
import '../assets/style/pagination.css'



const Pagination = ({totalPokemons, pokemonsPerPage, setCurrentPage }) => {
    let totalPages = []
    let til = Math.ceil(totalPokemons/pokemonsPerPage) + 1
    for (let index = 1; index < til; index++) {
        totalPages.push(index)
    }

    const changePage = (data) => {
        let currentPage = data.selected +1
        setCurrentPage(currentPage)
    }

    return (
        <div id='pagination'>
            <ReactPaginate 
            previousLabel={'Prev'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={totalPages.length}
            marginPagesDisplayed={3}
            pageRangeDisplayed={3}
            onPageChange={changePage}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextLinkClassName={'page-link'}
            nextClassName={'page-item'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            />
        </div>
    );
};

export default Pagination;