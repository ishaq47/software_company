import React, { useEffect } from 'react';

const BookedWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//widget.simplybook.asia/v2/widget/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="simplybook-widget-container"></div>
    );
};

export default BookedWidget;
