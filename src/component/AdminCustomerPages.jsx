import { useState, useEffect } from 'react';

const AdminCustomerPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showEllipsis, setShowEllipsis] = useState(true);
  const [totalPages, setTotalPages] = useState(10);
  const [visiblePages, setVisiblePages] = useState([]);

  useEffect(() => {
    // Define the number of visible page buttons based on screen size
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setVisiblePages(3); // Show 3 buttons on smaller screens
    } else {
      setVisiblePages(5); // Show 5 buttons on larger screens
    }
  }, []);

  const handlePrevClick = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    setShowEllipsis(false); // Reset to hide ellipsis
  };

  const handleNextClick = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    setShowEllipsis(false); // Reset to hide ellipsis
  };

  const handleEllipsisClick = () => {
    setShowEllipsis(!showEllipsis);
  };

  const renderNumberButtons = () => {
    const buttons = [];

    // Render numbers 1 to 4
    for (let i = 1; i <= Math.min(totalPages, visiblePages); i++) {
      buttons.push(
        <button 
          key={i}
          className={`mx-1 px-3 py-2 rounded  text-awhite ${currentPage === i ? 'bg-[#990404] ' : 'bg-[#adadad]'}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    // Render ellipsis and numbers 5 to 6 when ellipsis is clicked
    if (showEllipsis) {
      // Render the ellipsis button
      buttons.push(
        <button 
          key="ellipsis" 
          className="mx-1 px-3 py-2 rounded bg-gray-200"
          onClick={handleEllipsisClick}
        >
          ...
        </button>
      );
    } else {
      // Render numbers 5 through 8 as an alternative
      for (let i = 5; i <= 8; i++) {
        buttons.push(
          <button 
            key={i}
            className={`mx-1 px-3 py-2 rounded text-awhite ${currentPage === i ? 'bg-[#990404] ' : 'bg-[#adadad]'}`}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>
        );
      }
    }

    return buttons;
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <div 
        className={`bg-[#adadad] gap-x-1 flex items-center text-awhite px-4 py-2 rounded hover:bg-blue-600 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        <span className="icon-[ooui--previous-ltr] w-6 h-6 text-[#ffffff]"></span>
        Prev
      </div>
      {renderNumberButtons()}
      <div 
        className={`bg-[#adadad] gap-x-1 flex items-center text-awhite px-4 py-2 rounded hover:bg-blue-600 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next
        <span className="icon-[ooui--previous-rtl] w-6 h-6 text-[#ffffff]"></span>
      </div>
    </div>
  );
};

export default AdminCustomerPagination;
