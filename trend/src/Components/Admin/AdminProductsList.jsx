
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { getProduct } from '../../Redux/AdminProductReducer/action';
import AdminProductCard from './AdminProductCard';


const AdminProductsList = () => {
    const dispatch = useDispatch();

  const allProducts = useSelector((store)=>{
    // 
    return store.adminProduct.product
  })
  

  useEffect(()=>{
    dispatch(getProduct)
  },[])

  return (
    <div>
        <Mainwrapper>
          {allProducts?.map((el)=>{
            return <AdminProductCard key={el.id} {...el} />
          })}
        </Mainwrapper>
    </div>
  )
}

export default AdminProductsList

const Mainwrapper = styled.div`
margin-top: 2rem;
  width: 90%;
  display: grid;
  justify-content: left;
  grid-template-columns: repeat(3,1fr);
  gap: 3rem;
  
`