import React from 'react';

const Lightbox = ({ videoUrl, onClose }) => {
  return (
    <div id="glightbox-body" className="glightbox-container glightbox-clean">
      <div className="gloader visible" style={{ display: 'none' }}></div>
      <div className="goverlay" onClick={onClose}></div>
      <div className="gcontainer">
        <div id="glightbox-slider" className="gslider">
          <div className="gslide loaded current">
            <div className="gslide-inner-content">
              <div className="ginner-container gvideo-container">
                <div className="gslide-media gslide-video" style={{ maxWidth: '860.8695652173914px' }}>
                  <div className="gvideo-wrapper youtube-video gvideo" data-id="gvideo0" data-index="0">
                    <iframe
                      id="youtube-746"
                      frameBorder="0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Player for Lost Souls"
                      width="640"
                      height="360"
                      src={videoUrl}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="gclose gbtn" onClick={onClose} tabIndex="2" aria-label="Close">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
            <g>
              <g>
                <path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
