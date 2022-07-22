import { useParams } from 'react-router-dom';
import { ProjectDetail } from '../share/projectDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ExhReviw from '../exhibition/exhReviw';
import { Container } from '@mui/system';

const RecrutmentDetail = () => {
  const [exhibitionProject, setExhibitionProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/recruitment/postId/${id}`)
      .then((res) => setExhibitionProject(res.data));
  }, []);
  return (
    <>
      <ProjectDetail exhibitionProject={exhibitionProject} />
      <Container sx={{ mx: 30 }}>
        <ExhReviw />
      </Container>
    </>
  );
};

export { RecrutmentDetail };