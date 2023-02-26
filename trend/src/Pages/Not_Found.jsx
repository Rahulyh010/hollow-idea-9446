import React from 'react'
import styled from 'styled-components'
import Error from "../Images/Error.jpg"

const Not_Found = () => {
  return (
    <div>
        <img style={{width:"auto"}} src={Error} alt="ErrorPage" />
        <button >skjdhfjksgdfgdfgdfgdfsdfgh</button>
    </div>
  )
}

export default Not_Found

const Container = styled.div`
  position: relative;
  width: 50%;
  & img {
    width: 100%;
    height: auto;
  }
  & button{
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  }
`