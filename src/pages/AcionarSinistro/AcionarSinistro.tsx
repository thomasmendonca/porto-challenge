import React, { useEffect, useState } from "react";
import { 
    Wrapper,
    Title,
    Text,
    InputFile,
    Label,
    ContainerButton,

} from "./AcionarSinistro.style";
import { Layout } from "../../components/Layout/Layout";
import { Button } from "../../components/Button/Button";

export default function AcionarSinistro() {
  const [data, setData] = useState({});

  const [selectedFile, setSelectedFile] = useState(null);

  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/upload");

      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

    // Carregar e exibir a imagem selecionada

    const file = event.target.files[0];

    const imageURL = URL.createObjectURL(file);

    setImageURL(imageURL);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();

      formData.append("file", selectedFile);

      try {
        const response = await fetch("http://127.0.0.1:5000/upload", {
          method: "POST",

          body: formData,
        });

        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  return (
    <Layout>
      <Wrapper>
        {/* <h1>Classificação</h1>

        <input type="file" accept="image/*" onChange={handleFileChange} />

        <button onClick={handleUpload}>Enviar Imagem</button>

        {imageURL && <img src={imageURL} alt="Imagem Enviada" />}

        <h1>{data.prediction}</h1> */}

        <Title>Acionando seu Sinistro</Title>
        <Text>Faça o upload da foto de seu veículo danificado para que possamos te auxiliar com nosso melhor guincho.</Text>
        <InputFile type="file" accept="image/*" onChange={handleFileChange} id="inputFile"/>
        <Label htmlFor="inputFile">Clique para carregar a imagem de seu veículo</Label>
        {imageURL && <img src={imageURL} alt="Imagem Enviada" />}
      </Wrapper>
      <ContainerButton>
            <Button onClick={handleUpload} inverse="inverse">Enviar</Button>
      </ContainerButton>
      <h1>{data.prediction}</h1>
    </Layout>
  )
}
