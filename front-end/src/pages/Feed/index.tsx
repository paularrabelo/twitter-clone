import BotoesFeed from "../../components/ButtonsFeed"
import BotoesMenu from "../../components/ButtonsMenu"
import Post from "../../components/Post"
import Sidebar from "../../components/Sidebar"
import { ContainerFeed, ContentFeed } from "./styles"

const Feed = () => {
    return (
        <ContainerFeed>
            <Sidebar> 
                <BotoesMenu />
            </Sidebar>
            <ContentFeed>
                <BotoesFeed />
                <Post />
            </ContentFeed>
            <Sidebar>
                <p>Sugestoes</p>
            </Sidebar>
        </ContainerFeed>
    )
}

export default Feed