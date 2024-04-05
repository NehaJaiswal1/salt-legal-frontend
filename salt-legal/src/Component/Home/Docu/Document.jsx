import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDownload } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import com from '../../../assets/image/com.png';
import './Document.css';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { useRecoilValue } from 'recoil';
import { jwtTokenState } from '../../auth/atoms';

function Document() {
  const navigate = useNavigate();
  const jwtToken = useRecoilValue(jwtTokenState);
  const [categoryData, setCategoryData] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [fileUrl, setFileUrl] = useState([]);
  const cameFromPackagesPage = useLocation().state && useLocation().state.from === '/packages';
  const storage = getStorage();

  useEffect(() => {
    fetchUploadedImages();
  }, []);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  const handleDownload = () => {
    if (jwtToken) {
      if (cameFromPackagesPage) {
        downloadFiles();
      } else {
        navigate('/package');
      }
    } else {
      navigate('/login');
      console.log('User not logged in. Please login to download.');
    }
  };

  const fetchUploadedImages = async () => {
    try {
      const subCategoriesRef = ref(storage, 'SubCategories');
      const subCategoryItems = await listAll(subCategoriesRef);

      const categoryPromises = subCategoryItems.prefixes.map(async (folderRef) => {
        const subCategoryName = folderRef.name;
        const subCategoryRef = ref(storage, `SubCategories/${subCategoryName}`);
        const subCategoryItems = await listAll(subCategoryRef);

        const subDocuments = subCategoryItems.items.map((item) => item.name);
        const subFolders = subCategoryItems.prefixes.map(async (subFolderRef) => {
          const subFolderName = subFolderRef.name;
          const subFolderItems = await listAll(subFolderRef);
          const subFolderDocuments = subFolderItems.items.map((item) => item.name);
          return { folderName: subFolderName, subDocuments: subFolderDocuments };
        });

        const subFolderData = await Promise.all(subFolders);
        return { folderName: subCategoryName, subDocuments, subFolders: subFolderData };
      });

      const categoryData = await Promise.all(categoryPromises);

      console.log('Category Data:', categoryData);

      setCategoryData(categoryData);
    } catch (error) {
      console.error('Error fetching folder names:', error);
    }
  };

  const truncateFileName = (fileName) => {
    const words = fileName.split(' ');
    return words.length > 3 ? `${words.slice(0, 3).join(' ')}...` : fileName;
  };

  const downloadFiles = async () => {
    try {
      const downloadURLs = await Promise.all(
        categoryData.flatMap((item) =>
          item.subDocuments.map(async (fileName) => {
            const fileRef = ref(storage, `SubCategories/${item.folderName}/${fileName}`);
            return await getDownloadURL(fileRef);
          })
        )
      );

      downloadURLs.forEach((url, index) => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `file${index}`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    } catch (error) {
      console.error('Error downloading files:', error);
    }
  };

  const handleBrowseMore = () => {
    if (jwtToken) {
      navigate('/templates');
    } else {
      navigate('/login');
      console.log('User not logged in. Please login to download.');
    }
  };

  return (
    <div className="card-container1">
      <div className="card-container">
        <div>
          <h3>
            Whatever Business <span>or </span>Legal Document You Need,
            <span> We Have a Template </span> for You.
          </h3>
          <p>we offer 200+ templates in different categories | Register with Us | Download templates</p>
        </div>
        {categoryData.slice(0, 24).map((item, index) => (
          <div key={index} className="card">
            <img src={com} style={{ marginRight: '20px', alignText: 'center', color: '#02244a', width: '35px', marginLeft: '20px' }} alt="icon" />
            <h4>{item.folderName}</h4>
            <div className="chevron-icon" onClick={() => toggleCategory(index)}>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </div>
            {expandedCategory === index && (
              <div className="dropdown-options">
                {/* Conditionally render subfolders and subdocuments */}
                {item.subFolders.length === 0 ? (
                  // Render only subdocuments if no subfolders present
                  item.subDocuments.map((subDocument, subIndex) => (
                    <div key={subIndex} className="subcategory-div">
                      {truncateFileName(subDocument)}
                    </div>
                  ))
                ) : (
                  // Render both subfolders and subdocuments if subfolders present
                  item.subFolders.map((subFolder, subIndex) => (
                    <div key={subIndex} className="subcategory-div">
                      <h5>{subFolder.folderName}</h5>
                      {/* Render subfolder's subdocuments */}
                      {subFolder.subDocuments.map((subDocument, subDocIndex) => (
                        <div key={subDocIndex} className="subdocument-div">
                          {truncateFileName(subDocument)}
                          {/* Download button for subdocument */}
                          <FontAwesomeIcon icon={faDownload} className='drop-down-fa-icon' onClick={() => handleDownload(subFolder.folderName, subDocument)} />
                        </div>
                      ))}
                    </div>
                  ))
                )
                }
                {/* Render download icon if there are subdocuments */}
                {item.subDocuments.length > 0 && (
                  <div className='drop-down-div-fa'>
                    <FontAwesomeIcon icon={faDownload} className='drop-down-fa-icon' onClick={handleDownload} />
                  </div>
                )}
              </div>
            )}

          </div>
        ))}
      </div>
      <div className="center-button">
        <button onClick={handleBrowseMore}>BROWSE MORE</button>
      </div>
    </div>
  );
}

export default Document;
