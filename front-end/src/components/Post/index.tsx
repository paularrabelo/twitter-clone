import { useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import { Container, ContainerContent, ContainerFoto, FotoPerfil, TextArea, FileInput, PreviewContainer, RemoveButton, BotoesIcone, ContainerBotoesPost, BotaoPostar } from "./styles";
import fotoPerfil from "../../assets/Captura de tela 2024-11-13 105851.png";
import iconeEmoji from "../../assets/feliz.png"
import iconeFile from "../../assets/foto.png"

const Post = () => {
    const [postText, setPostText] = useState<string>("");
    const [media, setMedia] = useState<string | null>(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.value.length <= 280) {
            setPostText(event.target.value);
            if (textAreaRef.current) {
                textAreaRef.current.style.height = "auto";
                textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
            }
        }
    };

    const handleEmojiClick = (emojiObject: any) => {
        setPostText((prevText) => prevText + emojiObject.emoji);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setMedia(fileUrl);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    // Remove a mídia carregada
    const removeMedia = () => {
        setMedia(null);
    };

    return (
        <Container>
            <ContainerFoto>
                <FotoPerfil src={fotoPerfil} alt="Foto de perfil" />
            </ContainerFoto>
            <ContainerContent>
                <TextArea
                    ref={textAreaRef}
                    placeholder="O que está pensando?"
                    value={postText}
                    onChange={handleChange}
                />
                
                {media && (
                    <PreviewContainer>
                        {media.endsWith(".mp4") ? (
                            <video src={media} controls width="100%" />
                        ) : (
                            <img src={media} alt="Mídia carregada" width="100%" />
                        )}
                        <RemoveButton onClick={removeMedia}>X</RemoveButton>
                    </PreviewContainer>
                )}

                
                <ContainerBotoesPost>
                    <div>
                        <BotoesIcone onClick={handleUploadClick}><img src={iconeFile} /></BotoesIcone>
                        <FileInput ref={fileInputRef} type="file" accept="image/*,video/*" onChange={handleFileChange} />
                        <BotoesIcone onClick={() => setShowEmojiPicker(!showEmojiPicker)}><img src={iconeEmoji} /></BotoesIcone>
                    </div>
                    <div>
                        <BotaoPostar>Postar</BotaoPostar>
                    </div>
                </ContainerBotoesPost>

                {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
            </ContainerContent>
        </Container>
    );
};

export default Post;
