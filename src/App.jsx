import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  CloseModal,
  ModalBody,
  ModalLink,
} from './styles';

const API_URL = 'https://api.imgur.com/3/image';
const CLIENT_ID = 'YOUR_CLIENT_ID';

function App() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [result, setResult] = useState({});

  const upload = (e) => {
    e.preventDefault();

    if (!image) return;

    const formData = new FormData();
    formData.append('image', image, image.name); // Add image
    formData.append('title', title); // Add Title

    axios({
      url: API_URL,
      method: 'POST',
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
      data: formData,
    })
      .then((res) => {
        setResult(res.data.data);
        document.getElementById('modal').classList.add('active');

        setTimeout(() => {
          setImage('');
          setTitle('');
        }, 2000);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <Form onSubmit={upload}>
        <FormGroup>
          <Label htmlFor='title'>Upload title</Label>
          <Input
            id='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='image'>Image</Label>
          <Input
            id='image'
            type='file'
            value={image && image.filename}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </FormGroup>
        <Button onClick={upload} type='submit'>
          Upload to imgur!
        </Button>
      </Form>

      <SuccessModal data={result} />
    </Container>
  );
}

const SuccessModal = ({ data }) => {
  const closeModal = () => {
    document.getElementById('modal').classList.remove('active');
  };

  return (
    <Modal id='modal'>
      <ModalHeader>
        <h2>Success!</h2>
        <CloseModal onClick={closeModal}>&times;</CloseModal>
      </ModalHeader>
      <ModalBody>
        Successfully uploaded image to imgur! <br />
        Your link:{' '}
        <ModalLink target='_blank' rel='noopener noreferrer' href={data.link}>
          {data.link}
        </ModalLink>
      </ModalBody>
    </Modal>
  );
};

export default App;
