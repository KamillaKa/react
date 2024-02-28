// Ensure this import statement is correct and points to the file where MediaItemWithOwner is defined.
import {MediaItemWithOwner} from '../types/DBTypes';

import Likes from '../components/Likes';
import Comments from '../components/Comments';
import {NavigateFunction, useLocation, useNavigate} from 'react-router-dom';

const Single = () => {
  const {state} = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const item = state as MediaItemWithOwner; // Ensure casting is correct and necessary

  return (
    <>
      <h3>{item.title}</h3>
      {item.media_type.includes('video') ? (
        <video controls src={item.filename}></video>
      ) : (
        <img src={item.filename} alt={item.title} />
      )}
      <Likes item={item} />
      <p>{item.description}</p>
      <p>Uploaded at: {new Date(item.created_at).toLocaleString('fi-FI')}, by: {item.owner.username}</p> // Fixed the problem by accessing the 'username' property through 'owner'
      <p>File size: {item.filesize}</p>
      <p>Media type: {item.media_type}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
      <Comments item={item} /> {/* Ensure that 'item' prop type matches the expected type in Comments.tsx */}
    </>
  );
};

export default Single;
