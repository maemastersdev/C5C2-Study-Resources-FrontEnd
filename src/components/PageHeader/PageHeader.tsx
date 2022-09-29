import React from "react";

import "./PageHeader.scss";

import { SearchBar, BaseModal, TagListSelect } from "../index";
import { IPageHeader } from "../../Interfaces/Interfaces";

const PageHeader = ({
  filterSearchTerm,
  setFilterSearchTerm,
  currentActiveUser,
  setCurrentActiveUser,
  tagsArray,
  setTagsArray,
  postTagsArray,
  setPostTagsArray,
  setResourcesArray,
}: IPageHeader): JSX.Element => {
  return (
    <>
      <div className="header">
        <div className="inner-header flex">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            className="logo"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M384,162.133c9.412,0,17.067-7.654,17.067-17.067c0-9.412-7.654-17.067-17.067-17.067
				c-9.412,0-17.067,7.654-17.067,17.067C366.933,154.479,374.588,162.133,384,162.133z"
                  />
                  <path
                    d="M418.133,85.333c14.114,0,25.6-11.486,25.6-25.6s-11.486-25.6-25.6-25.6s-25.6,11.486-25.6,25.6
				S404.019,85.333,418.133,85.333z M418.133,51.2c4.71,0,8.533,3.831,8.533,8.533s-3.823,8.533-8.533,8.533
				s-8.533-3.831-8.533-8.533S413.423,51.2,418.133,51.2z"
                  />
                  <path
                    d="M392.533,209.067c0,7.057,5.743,12.8,12.8,12.8s12.8-5.743,12.8-12.8c0-7.057-5.743-12.8-12.8-12.8
				S392.533,202.01,392.533,209.067z"
                  />
                  <path
                    d="M477.867,256H230.4c-90.368,0-93.73-79.838-93.858-153.6H204.8c18.825,0,34.133,15.309,34.133,34.133v34.133H204.8
				c-18.825,0-34.133-15.309-34.133-34.133V128c0-4.71-3.814-8.533-8.533-8.533S153.6,123.29,153.6,128v8.533
				c0,28.237,22.963,51.2,51.2,51.2h42.667c4.719,0,8.533-3.823,8.533-8.533v-42.667c0-28.237-22.963-51.2-51.2-51.2h-68.267V51.2
				c0-28.237-22.963-51.2-51.2-51.2H42.667c-4.719,0-8.533,3.823-8.533,8.533V51.2c0,13.133,5.632,30.327,21.427,39.177
				c4.13,2.295,9.318,0.836,11.614-3.277c2.313-4.105,0.845-9.31-3.268-11.614C54.545,70.238,51.2,59.503,51.2,51.2V17.067h34.133
				c18.825,0,34.133,15.309,34.133,34.133v34.731C73.549,91.998,0,145.587,0,264.533c0,92.57,56.286,178.509,133.837,204.365
				c0.896,0.299,1.801,0.435,2.697,0.435c3.576,0,6.904-2.261,8.09-5.837c1.493-4.463-0.922-9.301-5.393-10.795
				C68.437,429.107,17.067,349.969,17.067,264.533c0-106.633,62.549-155.162,102.409-161.382
				c0.179,74.53,4.454,169.916,110.925,169.916h247.467c9.404,0,17.067,7.654,17.067,17.067v8.533
				c0,16.631-2.082,33.143-6.195,49.075c-1.169,4.565,1.579,9.216,6.135,10.394c0.717,0.179,1.434,0.265,2.142,0.265
				c3.797,0,7.27-2.551,8.26-6.4c4.454-17.323,6.724-35.268,6.724-53.333v-8.533C512,271.309,496.691,256,477.867,256z"
                  />
                  <path
                    d="M486.4,375.467H349.867c-61.227,0-74.47,33.877-76.305,39.782c-2.731,6.315-32.87,72.158-107.119,79.095l29.218-73.037
				c1.749-4.386-0.384-9.344-4.762-11.102c-4.352-1.732-9.344,0.384-11.093,4.753l-34.133,85.333
				c-1.05,2.628-0.725,5.615,0.862,7.953c1.587,2.347,4.232,3.755,7.066,3.755c97.382,0,135.518-89.711,135.893-90.615
				c0.154-0.384,0.282-0.777,0.384-1.178c0.051-0.171,2.927-10.598,17.323-18.603v67.729c0,4.71,3.814,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533v-74.112c7.049-1.647,15.462-2.688,25.6-2.688h8.533v64c0,4.71,3.814,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533v-64H409.6v25.6c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-25.6h46.003
				c-33.775,62.618-100.651,102.4-174.003,102.4h-51.2c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h51.2
				c84.642,0,161.391-48.87,195.507-124.493c1.195-2.637,0.964-5.7-0.606-8.132C491.998,376.934,489.301,375.467,486.4,375.467z"
                  />
                  <path
                    d="M392.789,332.8c0-4.71-3.823-8.533-8.533-8.533h-0.094c-4.702,0-8.482,3.823-8.482,8.533c0,4.71,3.857,8.533,8.576,8.533
				C388.966,341.333,392.789,337.51,392.789,332.8z"
                  />
                </g>
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          <h1>
            {currentActiveUser === ""
              ? "Study Resources"
              : `Welcome ${currentActiveUser}`}
          </h1>
        </div>
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
      <div className="tag_container">
        <div className="tag_select">
          <TagListSelect tagsArray={tagsArray} setTagsArray={setTagsArray} />
        </div>
      </div>
      <div className="search_content search_flex">
        <SearchBar
          filterSearchTerm={filterSearchTerm}
          setFilterSearchTerm={setFilterSearchTerm}
        />
      </div>
      <div className="utility_buttons">
        <BaseModal
          currentAcitveUser={currentActiveUser}
          setCurrentActiveUser={setCurrentActiveUser}
          tagsArray={tagsArray}
          postTagsArray={postTagsArray}
          filterSearchTerm={filterSearchTerm}
          setPostTagsArray={setPostTagsArray}
          setResourcesArray={setResourcesArray}
        />
      </div>
    </>
  );
};

export default PageHeader;
