import { TagContainer } from './styles'

type Prop = {
  children: string
}

const Tag = ({ children }: Prop) => (
  <>
    <TagContainer>{children}</TagContainer>
  </>
)

export default Tag
