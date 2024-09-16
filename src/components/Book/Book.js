import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
//import './MyBook.css';

function MyBook(props) {
    const bookRef = useRef();

    const goToPreviousPage = () => {
        bookRef.current.pageFlip().flipPrev();
    };

    const goToNextPage = () => {
        bookRef.current.pageFlip().flipNext();
    };

    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = 'path/to/your/book.pdf'; // Replace with your actual PDF file path
        link.download = 'book.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="book-container">
            <h1 className='text' >Portfolio</h1>
            <HTMLFlipBook 
                width={842} // A3 width in pixels (landscape)
                height={595} // A3 height in pixels (landscape)
                size="stretch" // Adjust size according to container
                minWidth={315}
                maxWidth={1000}
                minHeight={225}
                maxHeight={780}
                maxShadowOpacity={0.5} // Adjust shadow
                showCover={true} // Show the cover
                mobileScrollSupport={true} // Enable mobile support
                ref={bookRef}
            >
                <div className="demoPage">
                    <img src="https://images.pexels.com/photos/4328429/pexels-photo-4328429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Page 1" />
                </div>
                <div className="demoPage">
                    <img src="https://archicgi.com/wp-content/uploads/2022/09/3d-interior-visualization-modern-living-room.jpg" alt="Page 2" />
                </div>
                <div className="demoPage">
                    <img src="https://archicgi.com/wp-content/uploads/2022/09/3d-interior-visualization-spacious-room.jpg" alt="Page 3" />
                </div>
                <div className="demoPage">
                    <img src="https://archicgi.com/wp-content/uploads/2019/12/3d-rendering-3d-interior-visualization-5-key-elements-of-scene-view03office-lobby-design-view.jpg" alt="Page 4" />
                </div>
                <div className="demoPage">
                    <img src="https://archicgi.com/wp-content/uploads/2022/09/3d-interior-visualization-luxurious-design.jpg" alt="Page 1" />
                </div>
                <div className="demoPage">
                    <img src="https://archicgi.com/wp-content/uploads/2022/09/3d-interior-visualization-modern-kitchen.jpg" alt="Page 1" />
                </div>
                <div className="demoPage">
                    <img src="https://archicgi.com/wp-content/uploads/2022/09/3d-interior-visualization-stylish-space.jpg" alt="Page 1" />
                </div>
                <div className="demoPage">
                    <img src="https://via.placeholder.com/800x400?text=Page+1" alt="Page 1" />
                </div>
                <div className="demoPage">
                    <img src="https://via.placeholder.com/800x400?text=Page+1" alt="Page 1" />
                </div>
                <div className="demoPage">
                    <img src="https://via.placeholder.com/800x400?text=Page+1" alt="Page 1" />
                </div>
            </HTMLFlipBook>
            <div className="controls">
                <button onClick={goToPreviousPage}>Previous</button>
                <button onClick={goToNextPage}>Next</button>
                <button onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
}

export default MyBook;