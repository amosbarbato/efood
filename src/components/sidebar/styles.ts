import { styled } from 'styled-components'
import { color } from '../../styles'

export const SidebarModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
`

export const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const SidebarContent = styled.aside`
  width: 360px;
  padding: 16px 8px;
  background-color: ${color.red};
  color: ${color.white};
  display: block;
  z-index: 1;
`
