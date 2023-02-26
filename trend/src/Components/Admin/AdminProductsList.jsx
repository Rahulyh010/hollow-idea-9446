
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { getProduct } from '../../Redux/AdminProductReducer/action';
import AdminProductCard from './AdminProductCard';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const AdminProductsList = () => {
    const dispatch = useDispatch();

  const allProducts = useSelector((store)=>{
    // 
    return store.adminProduct.product
  })
  const loading = useSelector((store)=>{
    // 
    return store.adminProduct.isLoading
  })
  

  useEffect(()=>{
    dispatch(getProduct)
  },[])

  return (
    <div>
      {loading ? <Skeleton style={{width:"90%",height:"4rem",marginTop:"1rem"}} count={20}/> :<Mainwrapper>
          {allProducts?.map((el)=>{
            return <AdminProductCard key={el.id} {...el} /> 
          }) }
         
        </Mainwrapper>}
        
    </div>
  )
}

export default AdminProductsList

const Mainwrapper = styled.div`
  margin-top: 1rem;
  width: 90%;
  display: grid;
  justify-content: left;
  grid-template-columns: 100%;
  grid-template-rows:repeat(100px);
  gap: 2rem;
  margin: auto;
  
`