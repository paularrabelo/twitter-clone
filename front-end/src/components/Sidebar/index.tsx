import { ReactNode } from "react"
import { Aside, Content } from "./styles"

export type Props ={
    children: ReactNode
}

const Sidebar = ({children}: Props) => {
    return (
        <Aside>
            <Content>
                {children}
            </Content>
        </Aside>
    )
}

export default Sidebar